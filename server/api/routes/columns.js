const express = require('express');
const router = express.Router();
const { createColumn, getAllColumns, updateColumn, deleteColumn } = require('../controller/columnController');

//Post column data
router.post('/', createColumn)

//Get Column data
router.get('/', getAllColumns)

//Update column data
router.put('/:id', updateColumn)

//Delete Column
router.delete('/:id', deleteColumn)



module.exports = router;