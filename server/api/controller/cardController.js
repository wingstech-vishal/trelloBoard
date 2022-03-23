const Card = require('../model/card')
const mongoose = require('mongoose');
const CustomErrorHandler = require('../services/CustomErrorHandler');

//Create Card Controller
const createCard = async(req,res,next) =>{
    try {
        const card = new Card({
            _id: new mongoose.Types.ObjectId,
            text: req.body.text,
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime,
            description: req.body.description,
            priority: req.body.priority,
            columnId : req.body.columnId
    
        })
        await card.save()
        res.status(200).json({
            newCard: card
        })
    } catch (error) {
        console.log(error)
       next(error)
    }
}

//Get All Card Controller
 const getAllCards = async(req,res,next) =>{
    try {
        const result = await Card.find()
        res.status(200).json({
            cardData: result
        })
    } catch (error) {
        next(error)
    }
}

//Update And Drag-Drop Card Controller
const updateCard = async(req,res,next) =>{
    try {
        const _id = req.params.id
        const result = await Card.findByIdAndUpdate(_id,req.body)
        if(!result){
            next(CustomErrorHandler.notExist('This Card is not exist'))
        }
        res.status(200).json({
            updated_card: result
        })
    } catch (error) {
        next(error)
    }
}

//Delete Card Controller
 const deleteCard = async(req,res,next) =>{
    try {
        const _id = req.params.id
        const card = await Card.findByIdAndRemove(_id)
        if(!card){
            next(CustomErrorHandler.notExist('This Card is not exist'))
        }
        res.status(200).json({
            message: 'Deleted Successfully',
        })
    } catch (error) {
        next(error)
    }
}


module.exports ={createCard,getAllCards,updateCard,deleteCard}