const Block = require('./Block');
const Blockchain = require('./Blockchain');

const irlCoin = new Blockchain();

irlCoin.addBlock(
  new Block(1, '06/06/2021', { sender: 'Ray', recipient: 'John', amount: 10 })
);

irlCoin.addBlock(
  new Block(2, '06/06/2021', { sender: 'Ray', recipient: 'Nancy', amount: 50 })
);

console.log('irlCoin:', JSON.stringify(irlCoin, null, 4));
