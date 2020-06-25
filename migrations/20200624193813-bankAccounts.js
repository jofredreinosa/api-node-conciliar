module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    await db.createCollection('bankAccounts');
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    await db.collection('bankAccounts').drop();
  }
};
