const { ObjectId } = require('mongodb')
const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    paymentId:{
        type:String,
        required:true
    },

    payDate:{
        type:String,
        required:true
    },

    paymentTime:{
        type:String,
        required:true
    },

    amount:{
        type:String,
        required:true
    },
    
    balance:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model('Payment',paymentSchema)