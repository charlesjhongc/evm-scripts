import { ethers } from "hardhat";
import { logger } from "./logger";

const contractAddr = "0xf88506B0F1d30056B9e5580668D5875b9cd30F23";
const lonAddr = "0x0000000000095413afC295d19EDeb1Ad7B71c952";

async function main() {
  const contract = await ethers.getContractAt("Reader", contractAddr);

  // Following Reserved
  const lonContract = await ethers.getContractAt("IERC20", lonAddr);
  const xLONAmount = await contract.totalSupply();
  const lonAmount = await lonContract.balanceOf(contractAddr);
  const ratio = lonAmount
    .mul(ethers.constants.WeiPerEther)
    .div(xLONAmount)
    .toNumber();
  logger.info(`LON  : ${ethers.utils.formatUnits(lonAmount)}`);
  logger.info(`xLON : ${ethers.utils.formatUnits(xLONAmount)}`);
  logger.info(`xLON ratio : ${ratio}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
