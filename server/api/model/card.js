const mongoose =  require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const cardSchema =  new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: String,
    endDate: String,
    description: String,
    category: String ,
    likes: [{type: ObjectId, ref:"User"}],
    comments: [{text: String, postedBy:{type: ObjectId, ref:"User"}}],
    postedBy: {type: ObjectId, ref:"User"}
})

module.exports = mongoose.model('Card', cardSchema);