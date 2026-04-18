# ChainSnap — Decentralized Photo Feed

A decentralized gallery where users post images with captions and others
tip the creator with 0.0001 ETH per like.

## Live Deployment

- **Contract (Sepolia):** 0x6571c2Fc7862751b59FDD30a8454b8eBC623F2A2
- **Etherscan:** https://sepolia.etherscan.io/address/0x6571c2Fc7862751b59FDD30a8454b8eBC623F2A2

## Run Locally

```bash
npm install
npx hardhat compile
npx hardhat test
npm run dev
```

## Getting Sepolia ETH

- https://cloud.google.com/application/web3/faucet/ethereum/sepolia
- https://sepoliafaucet.com
- https://www.infura.io/faucet/sepolia

## Tech Stack

| Layer | Technology |
|---|---|
| Smart Contract | Solidity ^0.8.20 |
| Dev Framework | Hardhat 2 |
| Frontend | React + Vite + TypeScript |
| Blockchain Lib | ethers.js v6 |
| Wallet | MetaMask |
| Network | Sepolia Testnet |
| Hosting | Vercel |