const mongoose = require('mongoose');
const Column = require('../model/column');
const CustomErrorHandler = require('../services/CustomErrorHandler');

//Create Column Controlller
const createColumn = async (req,res,next) =>{
    try {
        const column = new Column({
            _id: new mongoose.Types.ObjectId,
            title: req.body.title,
            color: req.body.color
        })
        // Column.isTitleExist()
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
        const result = await column.save()
        res.status(200).json({
            newColumn: result
        })
    } catch (error) {
        next(error)
    }
}

//Get All Columns
const getAllColumns = async (req,res,next) =>{
    try {
       const result= await Column
        // .find()
        .aggregate([
            { 
                $lookup: {
                    from: 'card',
                    as: "list",
                    let: {list: "$_id"},
                    pipeline: [
                        {
                            $match: {
                                $expr: { $and: [
                                    { $eq: ["$list", "$$list"]}
                                ]}
                            }
                        }
                    ]
                }
            }
        ])
        // .populate( {path: 'cardId', select: ['text', 'startDateTime', 'endDateTime']} )
        res.status(200).json({
            columnData: result
        })
    } catch (error) {
        next(error)
    }
}

//update column controller
const updateColumn = async (req,res,next) =>{
    console.log(req.params);
    try {
        const _id = req.params.id
        const result = await Column.findOneAndUpdate(_id,req.body,{
            new:true
        })
        if(!result){
            if(!result){
                next(CustomErrorHandler.notExist('This Column is not exist'))
            }
        }
        res.status(200).json({
            updated_column: result
        })
    } catch (error) {
        next(error)
    }
}

//Delete column controller
const deleteColumn = async (req,res,next) =>{
    try {
        const _id = req.params.id
        const result = await Column.findOneAndRemove(_id,req.body)
        if(!result){
            if(!result){
                next(CustomErrorHandler.notExist('This Column is not exist'))
            }
        }
        res.status(200).json({
            message: 'Deleted Successfully',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {createColumn, getAllColumns, updateColumn, deleteColumn}