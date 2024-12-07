const { getNamedAccounts } = require("hardhat");

module.exports = async({getNamedAccounts, deployments}) => {
    const {firstAccount} = await getNamedAccounts()
    const {deploy, log} = deployments
    
    log("Deploying the nft contract")
    await deploy("HorusNFT", {
        contract: "HorusNFT",
        from: firstAccount,
        log: true,
        args: ["HorusNFT", "MNT"]
    })
    log("HorusNFT is deployed!")
}

module.exports.tags = ["all", "sourcechain"]