const mongoose = require('mongoose');
const Column = require('../model/column');

const columnSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    color: String
})

columnSchema.statics.isTitleExist = async function(title) {
    try {
        const title = await this.findOne({ title })
        if (title) return false;

        return true;
    }
    catch (err) {
        console.log('Error inside isTitleExist method' , err.message);
        return false
    }
}

module.exports = mongoose.model('Column', columnSchema);