function Blockchain() {
  this.chain = [];
  this.newTransactions = [];
}

/*  eslint func-names: ["error", "never"] */
// Using eslint new declaration methods

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash) {
  const newBlock = {
    index: this.chain.length + 1,
    timestamp: Date.now(),
    transactions: this.newTransactions,
    nonce,
    hash,
    previousBlockHash,
  };
  this.newTransactions = [];
  // Adds new block to chain
  this.chain.push(newBlock);

  return newBlock;
};
module.exports = Blockchain;
