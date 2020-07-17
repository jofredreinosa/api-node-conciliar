const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const settingSchema = new Schema({
    minDateForTransactions: Date,
    maxDateForTransactions: Date,
    idb: Boolean,
    percentIdb: Number,
});

module.exports = mongoose.model('setting' , settingSchema);