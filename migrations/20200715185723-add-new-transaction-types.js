'use strict'

const data = [
  { code: 'DEP', description: 'DEPÓSITO'        , type: 1 },
  { code: 'TRE', description: 'TRANSFERENCIA ENTRANTE' , type: 1 },
  { code: 'TRS', description: 'TRANSFERENCIA SALIENTE' , type: 0 },
  { code: 'COM', description: 'COMISIÓN BANCARIA' , type: 0 },
];

module.exports = {
  async up(db, client) {
    await db.collection('transaction_types').insertMany(data);
  },

  async down(db, client) {
    await db.collection('transaction_types').deleteMany({
      'code': { $in: ['DEP','TRE','TRS','COM']}
    });
  }
};
