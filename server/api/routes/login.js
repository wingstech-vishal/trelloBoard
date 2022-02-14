const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Login get request'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Login post request'
    })
})

module.exports = router;