const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const onlineClassSchema=new mongoose.Schema({
    
    classId:{
         type:String,
         required:true
    },

    className:{
        type:String,
        required:true
    },

    duration:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true
    },

    fee:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('OnlineClass',onlineClassSchema)