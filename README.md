# 🚀 Sui NFT dApp – NamoMints 

This project is a **Sui-based decentralized application (dApp)** that I built as part of my learning journey through the *“Sui On-Chain”* workshop 🧑‍💻, in collaboration with **Codenex Club, SRM**.  

It’s powered by the official [@mysten/create-dapp](https://sdk.mystenlabs.com/dapp-kit) template and sets up everything needed for building a Sui dApp from scratch.  

---

## ⚡ Tech Stack  

This dApp comes with a modern developer-friendly stack out of the box:  

- ⚛️ [React](https://react.dev/) → User Interface framework  
- 🟦 [TypeScript](https://www.typescriptlang.org/) → Type safety  
- ⚡ [Vite](https://vitejs.dev/) → Fast build tooling  
- 🎨 [Radix UI](https://www.radix-ui.com/) → Ready-to-use UI components  
- 🧹 [ESLint](https://eslint.org/) → Code linting  
- 🔗 [`@mysten/dapp-kit`](https://sdk.mystenlabs.com/dapp-kit) → Wallet connection + data handling  
- 📦 [pnpm](https://pnpm.io/) → Package manager  

---

## 🛠️ Setting up Sui CLI  

Before deploying the Move smart contracts, make sure you’ve installed the **Sui CLI**.  
👉 Follow the [installation guide here](https://docs.sui.io/build/install).  

Since this template works with **Sui Testnet**, let’s set it up:  

```bash
sui client new-env --alias testnet --rpc https://fullnode.testnet.sui.io:443
sui client switch --env testnet
