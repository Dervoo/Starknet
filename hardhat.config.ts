/* This config file is used for running mocha tests in this repository, and not on the example repository */

// import "./dist/src/index";
import "@shardlabs/starknet-hardhat-plugin";

module.exports = {
    wallets: ["MyWallet"],
    networks: {
        myNetwork: {
            url: "http://127.0.0.1:5050"
        }
    }
};
