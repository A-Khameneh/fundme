const { ethers, getNamedAccounts } = require("hardhat")

async function main() {

  const FundMe = await hre.ethers.getContractFactory("Market");
  const fundme = await FundMe.deploy(1);

  console.log( "FundMe contract address: ", await fundme.getAddress() );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
