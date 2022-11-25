// const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({

    adminId:{
        type:String,
        require:true
    },

    userName :{
        type:String,
        required:true
    },

    passWord :{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Admin',adminSchema)