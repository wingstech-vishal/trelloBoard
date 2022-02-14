const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mongoose = require('mongoose');
const Card = require('../model/card');

//Post card data
router.post('/', (req, res, next) => {
    const card = new Card({
        _id: new mongoose.Types.ObjectId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
        category: req.body.category
    })

    card.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            newCard: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

//Get card data
router.get('/', (req, res, next) => {
    Card.find()
    .then(result => {
        res.status(200).json({
            cardData: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

//Update card data
router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Card.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            description: req.body.description,
            category: req.body.category
        }
    })
    .then(result => {
        res.status(200).json({
            updated_card: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//Delete card 
router.delete('/:id', (req, res, next) => {
    Card.remove({ _id: req.params.id })
    .then(result => {
        res.status(200).json({
            message: 'Deleted Successfully',
            result: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//Like api
router.put('/likes', (req, res, next) => {
    Card.findByIdAndUpdate(req.params.id, {
        $push:{likes: req.body.likes}
    }, {
        new: true 
    }).exec((err, result) => {
        if(err) {
            return res.status(500).json({
                error: err
            })
        } else{
            res.json(result)
        }
    })
})

//Unlike api
router.put('/unlike', (req, res, next) => {
    Card.findByIdAndUpdate(req.params.id, {
        $pull:{likes: req.body.likes}
    }, {
        new: true 
    }).exec((err, result) => {
        if(err) {
            return res.status(500).json({
                error: err
            })
        } else{
            res.json(result)
        }
    })
})

//Comment api
router.put('/comment', (req, res, next) => {
    const comment = {
        text: req.body.text,
        postedBy: req.use
    }
    Card.findByIdAndUpdate(req.params.id, {
        $push:{likes: req.body.likes}
    }, {
        new: true 
    }).exec((err, result) => {
        if(err) {
            return res.status(500).json({
                error: err
            })
        } else{
            res.json(result)
        }
    })
})

//Delete comment api
// router.delete('/', (req, res, next) => {

// })


module.exports = router;