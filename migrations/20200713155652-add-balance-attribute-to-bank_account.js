module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    await db.collection('bank_accounts').updateMany({}, { $set: {'accountBalance': ''} });	
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    await db.collection('bank_accounts').updateMany({}, { $unset: {'accountBalance': ''} });	
  }
};
