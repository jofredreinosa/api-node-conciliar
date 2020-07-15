const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  accountId: String,
  transactionType: String,
  transactionDate: Date,
  transactionNumber: String,
  transactionMotive: String,
  transactionAmount: Number,
  statement: { type: Number, default: 0 },
  registerDate: { type: Date, default: new Date() },
  deletedAt: { type: Date, default: null },
});

module.exports = mongoose.model('transaction' , TransactionType);