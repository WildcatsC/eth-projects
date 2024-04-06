import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const ALCHEMY_API_KEY = '2C7EE17-yO6HtqhHot5ET5AKZB_5BWhw'

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/2C7EE17-yO6HtqhHot5ET5AKZB_5BWhw}',
      accounts: ["0x16035ddcbb79293c6b705a2303672d51f9975ab6671394cbc722e578846020c0"]
    }
  }
};

export default config;
