# EduChain
Decentralized study materials and resource sharing platform

## Tech Stack Used

- Solidity
- Truffle Suite
- Celo ContractKit
- web3.storage - IPFS and Filecoin
- Openzeppelin contracts
- ReactJS
- react-bootstrap

## EduChain Smart Contract Deployment

**Alfajores Testnet**

| Contract | Deployed address  |
| :----- | :- |
| [EduchainMain Contract](https://alfajores-blockscout.celo-testnet.org/address/0xcAf1EeB614ADB2A7c635629d0A2A1c8891d085DD/transactions) | `0xcAf1EeB614ADB2A7c635629d0A2A1c8891d085DD` |
| [ECT Token Contract](https://alfajores-blockscout.celo-testnet.org/address/0xb70fb6c0B8BbeD8DB3289fCd97e33c3EF52E5Dbf/transactions) | `0xb70fb6c0B8BbeD8DB3289fCd97e33c3EF52E5Dbf`|

## Run Locally

### Pre-Requisites

- Truffle Suite
- Ganache CLI

```
$ npm install -g truffle
$ npm install -g ganache-cli
```  
Clone the project

```
$ git clone https://github.com/UltimateRoman/EduChain.git
$ cd EduChain
```
### Setting up a local Blockchain
Install dependencies

```
$ npm install
```

Compile Smart Contracts

```
$ truffle compile
```

Run ganache

```
$ ganache-cli
```  

Run migrations to deploy the smart contracts

```
$ truffle migrate
```  

### Setting up the client

Start the App

```
$ npm start
```

Visit https://localhost:3000/ to view the app


## Running Tests

To run tests, run

```
  truffle test
```
