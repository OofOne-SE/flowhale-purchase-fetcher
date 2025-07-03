import { Log } from 'ethers';
import { ethers } from 'hardhat';
import abi from './Flowhale-abi-v2';

async function main() {
  const provider = ethers.provider;

  const contractAddress = '0x675293A70C418c97E5455A5d9C498599c5663404';
  
  const fromBlock = 352608361;
  const toBlock = 352608363;

  const eventName = 'LicenseAcquired';

  const contractInterface = new ethers.Interface(abi);
  const eventTopic = contractInterface.getEvent(eventName)?.topicHash;

  let logs = [] as Log[]
  let currentBlock = fromBlock
  const chunkSize = 10000
  while(currentBlock < toBlock) {
    const newLogs = await provider.getLogs({
      address: contractAddress,
      fromBlock: currentBlock,
      toBlock:currentBlock + chunkSize,
      topics: [eventTopic as string],
    });
    currentBlock += chunkSize
    logs = [...logs, ...newLogs]
    console.log("from to", currentBlock, currentBlock + chunkSize)
  }

  const decodedLogs = logs.map((log) => {
    try {
      return contractInterface.parseLog(log);
    } catch (error) {
      console.error('Failed to parse log:', error);
      return null;
    }
  }).filter(Boolean);
  
  let purchaseCountByAddress: any= {}

  for (let i = 0; i < decodedLogs.length; i++) {
    const event = decodedLogs[i]
    if (event?.name != eventName) {
      continue
    }

    const license = {
      id: event.args[0][0],
      owner: event.args[0][1],
      promoCode: event.args[0][2],
      paidInEth: event.args[0][3],
      paymenTokenAddress: event.args[0][4],
      pricePaid: event.args[0][5],
      customData: event.args[0][6],
    }

    if (!(license.owner in purchaseCountByAddress)) {
      purchaseCountByAddress[license.owner] = 0
    }

    purchaseCountByAddress[license.owner] += 1
  }

  const fs = require('fs');
  const csvPath = './purchase-counts.csv';
  
  let csvContent = 'Wallet Address,Purchase Count\n';
  
  Object.entries(purchaseCountByAddress).forEach(([address, count]) => {
    csvContent += `${address},${count}\n`;
  });
  
  fs.writeFileSync(csvPath, csvContent);
  console.log(`CSV file generated at: ${csvPath}`);
}

// Execute the script.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error querying logs:', error);
    process.exit(1);
  });
