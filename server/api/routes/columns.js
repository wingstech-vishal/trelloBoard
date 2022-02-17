const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mongoose = require('mongoose');
const Column = require('../model/column');

//Post column data
router.post('/', (req, res, next) => {
    const column = new Column({
        _id: new mongoose.Types.ObjectId,
        title: req.body.title,
    })
    Column.isTitleExist()
    // Column.findOne({ title: req.body.title})
    // .then(res => {
    //     if(res.length != 0) {
    //         res.status(200).json({
    //             message: 'Same title exists'
    //         })
    //     }
    //     else {
    //         next();
    //     }
    // })
    column.save()
    // Column.isTitleExist()
    .then(result => {
        res.status(200).json({
            newColumn: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//Get Column data
router.get('/', (req, res, next) => {
    Column.find()
    // .populate("likes", "_id")
    .then(result => {
        res.status(200).json({
            columnData: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

//Update column data
router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Column.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            title: req.body.title,
        }
    })
    .then(result => {
        res.status(200).json({
            updated_column: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Column.remove( { _id: req.params.id })
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

module.exports = router;