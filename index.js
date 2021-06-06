const Block = require('./Block');
const Blockchain = require('./Blockchain');
const Transaction = require('./Transaction');

const irlCoin = new Blockchain();

//fromAddress and toAddress would be public key of wallets
irlCoin.createTransaction(new Transaction('Ray', 'Nancy', 100));
irlCoin.createTransaction(new Transaction('Nancy', 'Ray', 50));

console.log('Starting the miner...');
irlCoin.minePendingTransactions('John');

console.log('irlCoin:', JSON.stringify(irlCoin, null, 4));
console.log('Balance of John: ', irlCoin.getBalanceOfAddress('John'));
