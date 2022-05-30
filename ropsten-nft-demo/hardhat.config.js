require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    ropsten: {
      url: API_URL ,
      accounts: [`16035ddcbb79293c6b705a2303672d51f9975ab6671394cbc722e578846020c0`]
    }
  },
}