require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'give enroll slender trip blanket decrease sad slow coral light army giggle'; 
let testAccounts = [
"0xeee98026b628d53b2a9a9a4355749ff74b745f46fb831b28ae32703851bb546a",
"0x85e273a9c2802ac4026d2ce6eb15f6a518c5b866db705e2f721c5fd33c38af6d",
"0xadc0f14333cc1f69e8958e2336bcf5b2dc84f94afbb02dfa62f2057d641a8af7",
"0xe0965cac23fa4bc7dba047214edd84c3c5adb8dfe9f7a74311ce3201d9bf3bc2",
"0x5b45c4994e2cba5d250f7cedcb32392317855281a9953e17167308911b585a6a",
"0xe48cde6ca2ce55c65734c694908066e2639dbe93d87c65b244e636ccccf43ca5",
"0x6c79bc1d77aa3583c92c7b5d1d681589aab46ffd4170b34295f7501f8f64186b",
"0x1b474bf46df4d936a4017596be57eac3251339e89c01537ae004d13da08ca016",
"0x075ac77783007560073aa09432197fe11669186c570ef55c62eb62340a72aead",
"0x8a4d5d09022d91e79338bdf6c12e2f8c12fe8c0218cc0754fac512261a498cf6"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


