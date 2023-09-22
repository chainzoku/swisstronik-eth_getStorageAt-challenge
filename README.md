# Swisstronik eth_getStorageAt Challenge x LearnWeb3DAO

Make a JSON RPC call using eth_getStorageAt() to get the first storage variable (slot #0) of any deployed smart contract and explain what is the retrieved value or if there is any difference with other blockchains when using this RPC method.

## Descriptions

eth_getStorageAt is a JSON-RPC (Remote Procedure Call) method used in Ethereum blockchain development. It allows you to retrieve the value stored in a specific storage slot of an Ethereum smart contract.

Smart Contract: `0xf84Df872D385997aBc28E3f07A2E3cd707c9698a`

## Installation
```
npm install
```

if error, you can ketik ini

```
npm config --location=project set legacy-peer-deps=true
```

## Usage


I tested with 3 Testnet Networks, is a [Swisstronik] [Ethereum Sepolia] and [Polygon Mumbai]


### Swisstronik Network

I have implemented Swisstronik RPC in the configuration as the default network

```
npx hardhat run scripts/getStorageAt.js
```
or 
```
npx hardhat run scripts/getStorageAt.js --network swisstronik
```

### Ethereum Sepolia Network

```
npx hardhat run scripts/getStorageAt.js --network ethereum_sepolia
```

### Polygon Mumbai Network

```
npx hardhat run scripts/getStorageAt.js --network polygon_mumbai
```