const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');
const { findById } = require('../model/student');
const checkToken = require('../middleware/check-auth');

router.get('/', (req, res, next) => {
    // res.status(200).json({
    //     message: 'Student get request'
    // })
    Student.find()
    .then(result => {
        res.status(200).json({
            studentData: result
        });
        // console.log(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
})

//Post request
router.post('/', (req, res, next) => {
    const student = new Student({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone
    })

    student.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            newStudent: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
    // console.log(req.body);
});

//Get request by id
router.get('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            student: result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

//Delete request
router.delete('/:id', (req, res, next) => {
    Student.remove( {_id: req.params.id} )
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Deleted Succesfully',
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

//Update request
router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    Student.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            phone: req.body.phone
        }
    })
    .then(result => {
        res.status(200).json({
            updated_result: result
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