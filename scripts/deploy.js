const { ethers, run, network } = require("hardhat");

//async function verify(contractAddress, args) => {} 
  const verify  = async(contractAddress, args) => {}
  const deployedContract = await ethers.deployContract("SimpleStorage");
  console.log("Deploying contract...");
  await deployedContract.waitForDeployment();
  console.log("SimpleStorage Contract Address:", await deployedContract.getAddress());
  if (network.config.chainId == 11155111 && process.env.ETHERSCAN_API_KEY) {
  await deployedContract.deployTransaction.wait(5)
  await verify(deployedContract.address, []);
  }
  const currentValue = await deployedContract.retrieve()
  console.log(`Current value is: ${currentValue}`)
  
  const transactionResponse = await deployedContract.store(7)
  await transactionResponse.wait(1)
  const updatedValue = await deployedContract.retrieve()
  console.log(`Updated value is: ${updatedValue}`)


}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


