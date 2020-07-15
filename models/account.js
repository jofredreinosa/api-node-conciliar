const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    accountName: String,
    accountNumber: String,
    accountType: String,
    accountBankType: String,
    accountBalance: { type: Number, default: 0 },
    isDeleted: Boolean,
    deletedAt: { type: Date, default: null },
});

module.exports = mongoose.model('bank_account' , accountSchema);