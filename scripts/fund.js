const { errors } = require("ethers")
const { getNamedAccounts, ethers } = require("hardhat")

async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding Contract...")
    const trasactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    })
    await trasactionResponse.wait(1)
    console.log("Funded")
    console.log("Contract Address:", trasactionResponse.to) // 打印合约地址
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
