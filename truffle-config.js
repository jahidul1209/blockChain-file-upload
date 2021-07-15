// require('babel-register');
// require('babel-polyfill');
require('dotenv').config();
 const HDWalletProvider = require('truffle-hdwallet-provider');
//var HDWalletProvider = require("@truffle/hdwallet-provider");
var mnemonic = process.env["NEMONIC"];
var tokenKey = process.env["INFURA_API_KEY"];

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    // kovan: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKeys.split(','), // Array of account private keys
    //       `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
    //     )
    //   },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 42
    // },
    // mainnet: {
    //   provider: function() {
    //     return new HDWalletProvider( mnemonic, "https://mainnet.infura.io/v3/" +  tokenKey);
    //     },
    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei
    //   network_id: 1,
    //   timeoutBlocks: 4000, 
    //   skipDryRun: true,  
    //   to: '0xf6C5F18e305eE929BA373799a17D234854FA3d82',
    // },
    // rinkeby: {
    //   provider: function() {
    //     return new HDWalletProvider(
    //       privateKeys.split(','), // Array of account private keys
    //       `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`// Url to an Ethereum Node
    //     )
    //   },

    //   gas: 5000000,
    //   gasPrice: 5000000000, // 5 gwei      
    //   network_id: 4
    // },
    ropsten:{
      host: "localhost",
      provider: function() {
      return new HDWalletProvider( mnemonic, "https://ropsten.infura.io/v3/" +  tokenKey);
      },
      network_id:3,
      gas : 5000000,
      gasPrice : 5000000000,
      timeoutBlocks: 4000, 
      skipDryRun: true,   
      networkCheckTimeout: 4000,
      to: '0xf6C5F18e305eE929BA373799a17D234854FA3d82',
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: ">=0.6.0 <0.9.0",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}


