const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String,
    phone: Number,
    email: String,
    userType: String,
})

userSchema.path('username').validate(async (username) => {
    const usernameCount = await mongoose.models.Column.countDocuments({ username })
    return !usernameCount
}, 'Username already taken!');

userSchema.path('email').validate(async (email) => {
    const emailCount = await mongoose.models.Column.countDocuments({ email })
    return !emailCount
}, 'Email already exist!');

module.exports = mongoose.model('Users', userSchema);