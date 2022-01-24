const EduchainMain = artifacts.require("EduchainMain");

module.exports = async function(deployer) {
    await deployer.deploy(EduchainMain);
}