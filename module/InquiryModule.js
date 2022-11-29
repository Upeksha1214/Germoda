const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const inquirySchema=new mongoose.Schema({

    inquiryId:{
        type:String,
        required:true
    },

    studentId:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },



})

module.exports=mongoose.model('Inquiry',inquirySchema)