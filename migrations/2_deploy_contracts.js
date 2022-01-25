const EduchainMain = artifacts.require("EduchainMain");
const ECToken = artifacts.require("EduChainRewardToken");

module.exports = async function(deployer) {
    await deployer.deploy(EduchainMain);
    await deployer.deploy(ECToken);

    const ECMain = await EduchainMain.deployed();
    const ECT = await ECToken.deployed();
    await ECMain.setECTAddress(ECT.address);
    const MINTER_ROLE = web3.utils.soliditySha3("MINTER_ROLE");
    await ECT.grantRole(MINTER_ROLE, ECMain.address);
}