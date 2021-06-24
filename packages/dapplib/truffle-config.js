require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strong riot nominee color harvest narrow flower genre'; 
let testAccounts = [
"0xde435d53d26eef7f1ec35f672003d89233354acb8a807eee602c7898880d1731",
"0x6469b44bf7ef31c5558923a70b3c8e11899a85c2f966c3b70ac6bcf970848172",
"0xf55d9dd50e1074db84dff78000b38a70c5a5ad25ad304ac2b2b162400ab47c5a",
"0xaca99eb375c960ab4a300b62db0f2d46e7267e5a518f3abb617bc27c077cbcfc",
"0x2afdda6528f5183ddbacd55dadd0674126f7003aa5f680aaf80abd3be18e4690",
"0x907a4675f5c8fa5a5a6f123c0b81a150ddcd092418b6982de42d23b0ae87a523",
"0xec963e8833e92759dec062b9fb1c1e97d6be7947052a29feccbbb63d634225dc",
"0xac0835136531d9f8095529a88b7daec31a70a2d8b246a50ad16ad5179a598f62",
"0xa6a6845767161aa3f5b26107cc033cdd21f8c26c942b889205c87692b4f2cf11",
"0xea3a65f409ea4f7a6bb76917c487c370bf767deade1e49f4b73732f71a573351"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

