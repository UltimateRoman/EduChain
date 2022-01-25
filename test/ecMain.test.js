const { assert } = require("chai");

const EduchainMain = artifacts.require('EduchainMain');

contract('EduChainMain', (accounts) => {
    let ecMain;

    before(async() => {
        ecMain = await EduchainMain.deployed();
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
        let initialCount;

        before(async() => {
            initialCount = await ecMain.contentCount();
        });

        it("adds new content", async() => {
            await ecMain.addContent("BTE", "Engineering Materials", "https://adgdagadg.dweb.link");
        });

        it("content count increases", async() => {
            let finalCount = await ecMain.contentCount();
            const difference = finalCount - initialCount;     
            assert.equal(difference, 1);
        })
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