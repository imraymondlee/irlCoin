const Block = require('./Block');

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, '06/06/2021', 'Genesis Block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    //hash needs to be updated as previous hash has been updated
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

module.exports = Blockchain;
