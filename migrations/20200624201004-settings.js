'use strict'

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    const year = new Date().getFullYear();
    const minDate = new Date('01-01-' + year);
    const maxDate = new Date('12-31-' + year);

    await db.collection('settings').insertOne(
      {
        minDateForTransactions: minDate, 
        maxDateForTransactions: maxDate,
        idb: false,
        percentIdb: null,
      }
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    await db.collection('settings').drop();
  }
};
