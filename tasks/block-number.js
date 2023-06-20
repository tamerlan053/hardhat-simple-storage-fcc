const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    async (taskArhs, hre) => {
        const blockNumber = hre.ethers.provider.getBlockNumber()
    }
)
