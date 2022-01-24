module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  },

  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.1",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}