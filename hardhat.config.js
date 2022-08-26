require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("hardhat-deploy-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.0',
      },
      {
        version: '0.8.1'
      },
      {
        version: '0.8.2'
      }
    ]
  },

  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com/v1/f79235594e1c3bda499c75b6f0338cc703995047',
      chainId: 80001,
      accounts: ['1934c4fa3a8c7130c55b4b2933657b584102c02e6fdc682394728822a714404e']
    }
  },

  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
