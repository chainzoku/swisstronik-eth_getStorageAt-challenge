require("@nomicfoundation/hardhat-toolbox");

// PRIVATE KEY
const accountCollections = ["0x"];

module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "swisstronik",
  networks: {
    // swisstronik rpc network
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: accountCollections,
    },
    // ethereum sepolia rpc network
    ethereum_sepolia: {
      url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
      accounts: accountCollections,
    },
    // polygon mumbai rpc network
    polygon_mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: accountCollections,
    },
  },
};