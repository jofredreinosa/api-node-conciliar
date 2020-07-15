const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionTypeSchema = new Schema({
    code: String,
    description: String,
    type: { type: Number, default: 0 },
    deletedAt: Date,
});

module.exports = mongoose.model('transaction_type' , TransactionTypeSchema);