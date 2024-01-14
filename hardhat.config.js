/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: { },
    sepolia: {
      //url : `https://eth-sepolia.g.alchemy.com/v2/mInrkAX77eWZKzqpMV0_QM7SFZMhnZho`,
      url: 'https://eth-sepolia.g.alchemy.com/v2/${ process.env.API_URL }',
      accounts: [`0x${PRIVATE_KEY}`]

    }
  },  
};
