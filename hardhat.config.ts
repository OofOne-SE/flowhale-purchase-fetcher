import "@nomicfoundation/hardhat-ledger";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import { resolve } from 'path';

const envFilePath = resolve(__dirname, `.env`);
dotenv.config({ path: envFilePath });

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 200,
      }
    },
  },
  networks: {
    arbitrumTestnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614
    },
    arbitrumMainnet: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161
    },
    ethTestnet: {
      url: `https://ethereum-sepolia-rpc.publicnode.com`,
      chainId: 11155111
    },
    ethMainnet: {
      url: `https://ethereum-rpc.publicnode.com`
    },
    bnbMainnet: {
      url: `https://bsc-dataseed.bnbchain.org/`,
      chainId: 56
    },
    baseMainnet: {
      url: `https://mainnet.base.org`,
      chainId: 8453
    },
    scriptBnbNet: {
      url: `https://bsc-dataseed.bnbchain.org`,
      chainId: 56
    }
  },
  sourcify: {
    enabled: false
  },
};

export default config;
