const hre = require("hardhat");
const { ethers } = require("ethers");

async function main() {

  // contract address
  const contractAddress = "0xf84Df872D385997aBc28E3f07A2E3cd707c9698a";

  // network rpc from hardhat.config.js
  const rpc = hre.network.config.url;

  // Create an instance of ethers.js provider
  const provider = new ethers.getDefaultProvider(rpc);

  // Define a contract interface (ABI is not needed for this)
  const contractInterface = new ethers.utils.Interface([]);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractInterface, provider);

  try {

    // Get storage at slot 0
    const storageValue = await contract.provider.getStorageAt(contract.address, 0);
    console.log(`[+] [SLOT #${0}] Storage Value: 0x${storageValue}`);

  } catch (error) {
    console.error("Error:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
