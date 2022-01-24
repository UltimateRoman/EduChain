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
});