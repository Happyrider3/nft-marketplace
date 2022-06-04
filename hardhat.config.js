/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
require('dotenv').config()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
//  unused configuration commented out for now
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/QaCPBaH90sf2_9ZaezgjxcNzbQ3JHjOu",
      accounts: [process.env.privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}