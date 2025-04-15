# Flowhale Purchase Fetcher

This project fetches purchase events from Flowhale smart contracts and generates a CSV report of purchase counts by wallet address.

## Description

The script queries the blockchain for `LicenseAcquired` events from a specified Flowhale smart contract within a given block range. It then processes these events to count purchases per wallet address and generates a CSV file with the results.

## Setup

1. Install dependencies:
```bash
npm install
```

## Usage

1. Open `src/get-license-acquired-events.ts` and modify the following variables:
   - `contractAddress`: The address of the Flowhale smart contract tier you want to analyze
   - `fromBlock`: The starting block number to search from
   - `toBlock`: The ending block number to search to

2. Run the script using one of the configured networks:
```bash
npx hardhat run src/get-license-acquired-events.ts --network NETWORK
```

Available networks (from hardhat.config.ts):
- arbitrumTestnet
- arbitrumMainnet
- ethTestnet
- ethMainnet
- bnbMainnet
- baseMainnet
- scriptBnbNet

You can also extend your own networks/rpcs in the config.

## Output

The script generates a CSV file at `purchase-counts.csv` with the following columns:
- Wallet Address
- Purchase Count