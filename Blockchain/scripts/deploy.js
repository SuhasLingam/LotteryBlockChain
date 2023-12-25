const hre = require("hardhat");

async function main() {
  const Lottery = await hre.ethers.getContractFactory("lottery");
  const lottery = await Lottery.deploy();

  await lottery.waitForDeployment();

  console.log("Lottery Deployed to :", await lottery.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
