import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ETHEREUM_MAINNET_TOKEN}`,
        blockNumber: 12650600,
      },
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_ETHEREUM_MAINNET_TOKEN}`,
    },
    goerli: {
      url: "",
    },
  },
  solidity: "0.8.17",
};
