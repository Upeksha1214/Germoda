const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const marksSchema=new mongoose.Schema({
    examId:{
        type:ObjectId,
        required:true,
    },

    marks:{
        type:String,
        required:true
    },
    
    className:{
        type:String,
        required:true
    },

    grade:{
        type:String,
        required:true
    },

    studentId:{
        type:ObjectId,
        required:true,
    },

    status:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Post',marksSchema)