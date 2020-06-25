'use strict'

const data = [
  { code: 'NDE', description: 'NOTA DE DÉBITO'  , type: 0 },
  { code: 'NDC', description: 'NOTA DE CRÉDITO' , type: 1 },
  { code: 'CHE', description: 'CHEQUE'          , type: 0 },
  { code: 'CHA', description: 'CHEQUE ANULADO'  , type: 1 },
];

module.exports = {
  async up(db, client) {
    await db.collection('transactionTypes').insertMany(data);
  },

  async down(db, client) {
    await db.collection('transactionTypes').drop();
  }
};
