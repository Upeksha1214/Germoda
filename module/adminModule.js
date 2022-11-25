// const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const adminSchema=new mongoose.Schema({
    userName :{
        type:String,
        required:true
    },

    passWord :{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Post',adminSchema)