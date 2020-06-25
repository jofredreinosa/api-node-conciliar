'use strict'
const bcrypt = require('bcrypt');

module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    const saltRounds = 10;
    const password = '234wer';
    var hashedPassword;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    await db.collection('users').insertOne(
      {
        email: 'email@email.com',
        displayName: 'default.user',
        password: hash,
        signUpDate: Date.now(),
        lastLogin: null,
      }
    );
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    await db.collection('users').drop();
  }
};
