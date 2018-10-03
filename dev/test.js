const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();
bitcoin.createNewBlock(2389, '0INASDASJD123', '123SAOIQ2');
/* eslint-disable-next-line no-console */
console.log(bitcoin);
