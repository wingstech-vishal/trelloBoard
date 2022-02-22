const mongoose =  require('mongoose');
const {ObjectId} = mongoose.Schema.Types
const Card = require('../model/card');
// const User = require('../model/users')

const cardSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    startDateTime: String,
    endDateTime: String,
    description: String,
    priority: String,
    likes: [{type: ObjectId, ref:"Card"}],
    comments: [{text: String, postedBy:{type: ObjectId, ref:"Card"}}],
    postedBy: {type: ObjectId, ref:"Card"}
})

module.exports = mongoose.model('Card', cardSchema);