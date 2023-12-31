require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const ALCHEMY_API_KEY = "xBo7c9nK2wg5LexoeEalUs9v7EjT4KT4";

const SEPOLIA_PRIVATE_KEY =
  "6dab07c8779d8fcbe5d4b92d9987b5c99912eaf05afa92c8e7f62162ad5e298b";

module.exports = {
  solidity: "0.8.23",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
