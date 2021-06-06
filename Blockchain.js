const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, '06/06/2021', 'Genesis Block', '0');
  }
}

module.exports = Blockchain;
