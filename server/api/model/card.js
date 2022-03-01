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
    columnId: String,
    likes: [{type: ObjectId, ref:""}],
    comments: [{text: String, postedBy:{type: ObjectId, ref:""}}],
    postedBy: {type: ObjectId, ref:""}
})


module.exports = mongoose.model('Card', cardSchema);