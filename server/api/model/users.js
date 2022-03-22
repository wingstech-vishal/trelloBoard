// const mongoose = require('mongoose');
// const User = require('../model/users');

// const userSchema = new mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     username: String,
//     password: String,
//     phone: Number,
//     email: String,
//     userType: String,
// })

// userSchema.path('username').validate(async (username) => {
//     const usernameCount = await mongoose.models.User.countDocuments({ username })
//     return !usernameCount
// }, 'Username already taken!');

// userSchema.path('email').validate(async (email) => {
//     const emailCount = await mongoose.models.User.countDocuments({ email })
//     return !emailCount
// }, 'Email already exist!');

// module.exports = mongoose.model('Users', userSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    email : {type:String, require:true},
    username: {type:String, require:true},
    password:{type:String, require:true},
    userType:{type:String, require:true}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

schema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports = mongoose.model('User',schema);