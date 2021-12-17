const {Blockchain, Transaction} = require('./Blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('dd13f6be0b483f3607954c33276e2ae9e09ac8daf1b079f1187c61813a8b02e2');
const myWalletAddress = myKey.getPublic('hex');

let DICEcoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'Public key of receiver', 10);
tx1.signTransaction(myKey);
DICEcoin.addTransaction(tx1);

console.log('\n Starting the miner...');
DICEcoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of miner is which is also me is', DICEcoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', DICEcoin.isChainValid());
