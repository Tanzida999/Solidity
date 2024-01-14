const API_KEY = process.env.API_KEY;
CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const { ethers, network} = require("hardhat");
const contract = require("/Users/rj/hello-world/artifacts/contracts/HelloWorld.sol/HelloWorld.json");

//provider alchemy
const AlchemyProvider = new ethers.providers.AlchemyProvider("sepolia", API_KEY);

//signer you
const signer = new ethers.Wallet(PRIVATE_KEY, AlchemyProvider);

//contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main(){
    const message = await helloWorldContract.message();
    console.log("The Message is: " + message);

    console.log("Message is updating....");
    const tx = await helloWorldContract.update("This is the New Message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new Message is: " + newMessage);

}
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});