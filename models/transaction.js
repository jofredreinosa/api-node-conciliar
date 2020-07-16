const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionType = require('./transactionType');

const TransactionSchema = new Schema({
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  transactionType: transactionType.schema,
  transactionDate: Date,
  transactionNumber: String,
  transactionMotive: String,
  transactionAmount: Number,
  statement: { type: Number, default: 0 },
  registerDate: { type: Date, default: new Date() },
  deletedAt: { type: Date, default: null },
});

module.exports = mongoose.model('transaction' , TransactionSchema);