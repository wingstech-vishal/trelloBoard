const mongoose =  require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const Card = require('../model/card');
// const User = require('../model/users')

const cardSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: String,
    endDate: String,
    description: String,
    category: String ,
    likes: [{type: ObjectId, ref:"Card"}],
    comments: [{text: String, postedBy:{type: ObjectId, ref:"Card"}}],
    postedBy: {type: ObjectId, ref:"Card"}
})

module.exports = mongoose.model('Card', cardSchema);