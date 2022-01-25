const { assert } = require("chai");

const EduchainMain = artifacts.require('EduchainMain');
const EduChainRewardToken = artifacts.require("EduChainRewardToken");

contract('EduChainMain', (accounts) => {
    let ecMain, ECToken;

    before(async() => {
        ecMain = await EduchainMain.deployed();
        ECToken = await EduChainRewardToken.deployed();
        await ecMain.setECTAddress(ECToken.address);
        const MINTER_ROLE = web3.utils.soliditySha3("MINTER_ROLE");
        await ECToken.grantRole(MINTER_ROLE, ecMain.address);
    });

    describe("Contract Deployment", async() => {
        it("contract deploys succesfully", async() => {
           const address = await ecMain.address;
           assert.isDefined(address);    
           assert.notEqual(address, "0x0000000000000000000000000000000000000000"); 
           assert.notEqual(address, null);
           assert.notEqual(address, undefined);       
        });
    });

    describe("Adding new content", async() => {
        let initialCount, initialBalance;

        before(async() => {
            initialCount = await ecMain.contentCount();
            initialBalance = await ECToken.balanceOf(accounts[1]);
        });

        it("adds new content", async() => {
            await ecMain.addContent("BTE", "Engineering Materials", "https://adgdagadg.dweb.link");
            await ecMain.addContent("MBB", "Anatomy", "https://asfhfhfhfsjjgadg.dweb.link", {from: accounts[1]});
        });

        it("content count increases", async() => {
            let finalCount = await ecMain.contentCount();
            const difference = finalCount - initialCount;     
            assert.equal(difference, 2);
        });

        it("contributor receives ECT token reward", async() => {
            let finalBalance = await ECToken.balanceOf(accounts[1]);
            assert.equal(
                web3.utils.fromWei((finalBalance - initialBalance).toString()), "1"
            );
        });
    });

    describe("Retrieving content", async() => {
        it("can view content using id", async() => {
            const content = await ecMain.contents(0);
            assert.equal(content.course, "BTE");
            assert.equal(content.subject, "Engineering Materials");
            assert.equal(content.file, "https://adgdagadg.dweb.link");
            assert.equal(content.contributor, accounts[0]);
        });

        it("can retrieve correct contributor of content", async() => {
            const content = await ecMain.contents(0);
            const contributor = await ecMain.getContributor("https://adgdagadg.dweb.link");
            assert.equal(content.contributor, contributor);
        });
    });
});