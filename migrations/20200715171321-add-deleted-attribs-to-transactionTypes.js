module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    await db.collection('transaction_types').updateMany({}, { $set: {'deletedAt': ''} });

  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    await db.collection('transaction_types').updateMany({}, { $unset: {'deletedAt': ''} });	
  }
};
