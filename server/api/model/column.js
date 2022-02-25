const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema.Types
const Column = require('../model/column');
const Card = require('../model/card');


const columnSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    color: String,
})
// console.log("test", Card);

columnSchema.path('title').validate(async (title) => {
    const titleCount = await mongoose.models.Column.countDocuments({ title })
    return !titleCount
}, 'Title already exist!')

// db.columns.aggregate({
//     $lookup: {
//         from: "cards",
//         localField: "_id",
//         foreignField: "_id" ,
//         as: "check"   
//     }
// })

module.exports = mongoose.model('Column', columnSchema);