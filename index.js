const Block = require('./Block');
const Blockchain = require('./Blockchain');
const Transaction = require('./Transaction');
const EC = require('elliptic').ec;

const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate(
  '923646e1ecffb37c84c1d9cdd4aafd37abb5aaf4429526da7108d05b5675b635'
);
const myPublicKey = myKey.getPublic('hex');

const irlCoin = new Blockchain();

const tx1 = new Transaction(myPublicKey, 'public key here', 10);
tx1.signTransaction(myKey);
irlCoin.addTransaction(tx1);

console.log('Starting the miner...');
irlCoin.minePendingTransactions(myPublicKey);

console.log('Balance of my wallet: ', irlCoin.getBalanceOfAddress(myPublicKey));
