const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const settingSchema = new Schema({
    minDateForTransactions: Date,
    maxDateForTransactions: Date,
    idb: Boolean,
    percentIdb: Number,
});

module.exports = mongoose.model('setting' , settingSchema);