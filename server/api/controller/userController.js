var User = require('../model/users');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

//Register User Controller
const registerUser = async (req,res,next) =>{
    try {
        const user =  new User({
            email: req.body.email,
            username: req.body.username,
            password: User.hashPassword(req.body.password),
            userType: req.body.userType,
          });
        await user.save();
        res.status(201).json({message:"Register User Sccessfully"})
    } catch (error) {
        res.status(400).json({
            error
        })
    }
}

//Login User Controller
const loginUser = async (req,res,next) =>{
    try {
        const user  = await User.findOne({email:req.body.email}).exec();
        if(!user){
            res.status(501).json({message:'Invalid Credentials'});
        }
        const match = await bcrypt.compare(req.body.password,user.password)
        if(!match){
            res.status(501).json({message:'Invalid Credentials'});
        }
        const token = jwt.sign({username:user.username},'secret', {expiresIn : '3h'});
        res.status(200).json({message:token});
    } catch (error) {
        console.log(error)
        res.status(400).json({
            error
        })
    }
}

module.exports = {registerUser, loginUser}