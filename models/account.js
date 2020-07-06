const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    accountName: String,
    accountNumber: String,
    accountType: String,
    accountBankType: String,
});

module.exports = mongoose.model('bank_account' , accountSchema);