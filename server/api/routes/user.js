// const express = require('express');
// const req = require('express/lib/request');
// const router = express.Router();
// const mongoose = require('mongoose');
// const User = require('../model/users');
// const bcrypt =  require('bcryptjs');
// const jwt = require('jsonwebtoken');
// // const { JWT_SECRET } = require('../keys')
// const checkToken = require('../middleware/check-auth');
// const app = require('../../app');


// //Create new user / Signup api
// router.post('/signup', (req, res, next) => {
//     // res.status(200).json({
//     //     message: 'User get message'
//     // })
//     bcrypt.hash(req.body.password, 20, (err, hash) => {
//         if(err) {
//             return res.status(500).json({
//                 error: err
//             })
//         }
//         else {
//             const user = new User({
//                 _id: new mongoose.Types.ObjectId,
//                 username: req.body.username,
//                 password: hash,
//                 phone: req.body.phone,
//                 email: req.body.email,
//                 userType: req.body.userType,
//             })

//             user.save()
//             .then(result => {
//                 res.status(200).json({
//                     newUser: result
//                 })
//             })
//             .catch(err => {
//                 res.status(500).json({
//                     error: err
//                 })
//             })
//         }
//     })
// })

// // router.get('/signup', (req, res, next) => {
// //     res.render('signup.ejs')
// // })


// //Login api
// router.post('/login', (req, res, next) => {
//     User.find({ username: req.body.username })
//     .exec()
//     .then(user => {
//         if(user.length < 1) {
//             return res.status(401).json({
//                 message: 'User not found'
//             })
//         }
//         bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//            if (!result) {
//                return res.status(401).json({
//                    message: 'Incorrct Password'
//                })
//            } 
//            if (result) {
//                const token = jwt.sign({
//                    username: user[0].username,
//                    userType: user[0].userType,
//                    email: user[0].email,
//                    phone: user[0].phone
//                },
//             //    console.log(token),
//             //    'Secret Key',
//                {
//                    expiresIn: "1h"
//                }
//                );
//                res.status(200).json({
//                    username: user[0].username,
//                    userType: user[0].userType,
//                    email: user[0].email, 
//                    phone: user[0].phone,
//                    token: token
//                })
//            }
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         })
//     })
// })



// //Get all users
// router.get('/', (req, res, next) => {
//     // res.status(200).json({
//     //     message: 'Student get request'
//     // })
//     User.find()
//     .then(result => {
//         res.status(200).json({
//             userData: result
//         });
//         // console.log(result);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         });
//     })
// })


// //Update user info
// router.put('/:id', (req, res, next) => {
//     console.log(req.params.id);
//     User.findOneAndUpdate({ _id: req.params.id }, {
//         $set: {
//             username: req.body.username,
//             phone: req.body.phone,
//             email: req.body.email,
//         }
//     })
//     .then(result => {
//         res.status(200).json({
//             updated_user: result
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         })
//     })
// })


// //Delete User
// router.delete('/:id', (req, res, next) => {
//     User.remove( { _id: req.params.id } )
//     .then(result => {
//         res.status(200).json({
//             message: 'Deleted Successfully',
//             result: result
//         })
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         })
//     })
// })

// module.exports = router;


var express = require('express');
var jwt = require('jsonwebtoken');
const { registerUser, loginUser } = require('../controller/userController');
var router = express.Router();

// new user register api
router.post('/register', registerUser)

// login user api
router.post('/login',loginUser)

// Get all user api

router.get('/username', verifyToken, function(req,res,next){
  return res.status(200).json(decodedToken.username);
})

var decodedToken='';
function verifyToken(req,res,next){
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token,'secret', function(err, tokendata){
    if(err){
      return res.status(400).json({message:' Unauthorized request'});
    }
    if(tokendata){
      decodedToken = tokendata;
      next();
    }
  })
}

module.exports = router;