const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const registerSchema=new mongoose.Schema({

    registerId:{
        type:ObjectId,
        required:true
    },

    registerDate:{
        type:String,
        required:true
    },

    studentId:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    payment:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Post',registerSchema)

