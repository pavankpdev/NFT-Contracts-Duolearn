const func = async (hre) => {
    const {deployments, getNamedAccounts} = hre;
    const {deployer} = await getNamedAccounts();
    const {deploy} = deployments;

    await deploy('DuoNFT', {
        from: deployer,
        log: true,
        skipIfAlreadyDeployed: true,
        args: ["DuoNFT", "DNT"]
    })

}

func.tags = ['DuoNFT', "BSC"]

module.exports = func;
