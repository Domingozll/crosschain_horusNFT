module.exports = async({getNamedAccounts, deployments}) => {
    const { firstAccount } = await getNamedAccounts()
    const { deploy, log } = deployments

    log("deploying wrapped HorusNFT on destination chain")
    await deploy("WrappedHorusNFT", {
        contract: "WrappedHorusNFT",
        from: firstAccount,
        log: true,
        args: ["WrappedHorusNFT", "WNFT"]
    })
    log("deployed wrapped nft")
}

module.exports.tags = ["all", "destchain"]