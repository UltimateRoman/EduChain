# EduChain
Decentralized study materials and resource sharing platform.

Nowadays, students mostly rely on soft copy and online materials and resources for study purposes. In some cases this could be pirated content such as e-books and a major roadblock is the lack of availability of materials pertaining to certain less popular topics or courses. EduChain provides a decentralized platform where users can contribute their study materials and resources to be utilised by the public. This could be handwritten notes, presentations, slides, infographics or any relevant content. This is stored in a decentralized, public and transparent form by virtue of blockchain technology, ensuring free of cost accessibility to any students or tutors around the world. The uploaded files are stored using web3.storage with data persisted by Filecoin and accessible over IPFS.

To incentivise the users who contribute these resources, the platform will provide them with EduChain Reward Tokens(ECT) in return. Furthermore, platform users can directly provide tips the contributor of any specific content whom they would like to support. This is done anonymously, ensuring sufficient privacy and also without the need for middle-men or intermediaries. EduChain aims to be a community driven forum for students, where users are rewarded for their valuable contributions.

The Smart Contracts are currently deployed on the Celo Alfajores Testnet and also can be deployed on any EVM-compatible chain.

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
