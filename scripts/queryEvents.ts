import { ethers } from "hardhat";
import { logger } from "./logger";

const eventABI = [
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
  "event Transfer(address indexed _from, address indexed _to, uint256 _value)",
];
const contractAddr = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

async function main() {
  const contract = new ethers.Contract(contractAddr, eventABI, ethers.provider);
  const filter = contract.filters.Transfer();

  // Only indexed event parameters may be filtered
  // const tokenOwner = "0xd7DF400ec8cB5b29601d6097CA3B2ad00ADd013e";
  // const filter = contract.filters.Transfer(tokenOwner);

  const events = await contract.queryFilter(filter, -5, "latest");
  for (const event of events) {
    printEvent(event);
  }
}

async function printEvent(event: any) {
  logger.info(`TX : ${event.transactionHash}`);
  // FIXME print arg name and value instead
  console.log(event.args);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
