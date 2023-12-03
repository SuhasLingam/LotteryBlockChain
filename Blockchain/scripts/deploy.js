const hre = require("hardhat");

async function main() {
  const Lottery = await hre.ethers.getContractFactory("lottery");
  const lottery = await Lottery.deploy();

  await lottery.waitForDeployment();

  console.log("Lottery Deployed to :", await lottery.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x0eb56B3cbc98BafcD5B00957979479ccc5dcE6B5
