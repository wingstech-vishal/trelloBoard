const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { createCard, getAllCards, updateCard, deleteCard } = require('../controller/cardController');
const Card = require('../model/card');

//Post card data
router.post('/', createCard);

//Get card data
router.get('/all',getAllCards)

//Update And Drag-Drop card data
router.put('/:id', updateCard)

//Delete card 
router.delete('/:id', deleteCard)

//Like api
// router.put('/likes/:id', (req, res, next) => {
//     Card.findByIdAndUpdate(req.params.id, {
//         $push:{likes: req.body.likes}
//     }, {
//         new: true 
//     }).exec((err, result) => {
//         if(err) {
//             return res.status(500).json({
//                 error: err
//             })
//         } else{
//             res.json(result)
//         }
//     })
// })

// //Unlike api
// router.put('/unlike/:id', (req, res, next) => {
//     Card.findByIdAndUpdate(req.params.id, {
//         $pull:{likes: req.body.likes}
//     }, {
//         new: true 
//     }).exec((err, result) => {
//         if(err) {
//             return res.status(500).json({
//                 error: err
//             })
//         } else{
//             res.json(result)
//         }
//     })
// })


// //Comment api
// router.put('/comment/:id', (req, res, next) => {
//     const comment = {
//         text: req.body.text,
//         postedBy: req.use
//     }
//     Card.findByIdAndUpdate(req.params.id, {
//         $push:{likes: req.body.likes}
//     }, {
//         new: true 
//     }).exec((err, result) => {
//         if(err) {
//             return res.status(500).json({
//                 error: err
//             })
//         } else{
//             res.json(result)
//         }
//     })
// })

// // Delete comment api
// router.put('/comment/:id', (req, res, next) => {
//     const comment = {
//         text: req.body.text,
//         postedBy: req.use
//     }
//     Card.findByIdAndUpdate(req.params.id, {
//         $pull:{likes: req.body.likes}
//     }, {
//         new: true 
//     }).exec((err, result) => {
//         if(err) {
//             return res.status(500).json({
//                 error: err
//             })
//         } else{
//             res.json(result)
//         }
//     })
// })

module.exports = router;