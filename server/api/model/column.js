const mongoose = require('mongoose');
const Column = require('../model/column');

const columnSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
})

module.exports = mongoose.model('Column', columnSchema);