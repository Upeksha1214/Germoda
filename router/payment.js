const express=require('express')
const router=express.Router()
const Payment=require('../module/paymentModule')

router.post('/paymentAdd',async(req,res)=>{
    try{
        const payment=new Payment({
            paymentId:req.body.paymentId,
            payDate:req.body.payDate,
            paymentTime:req.body.paymentTime,
            amount:req.body.amount,
            balance:req.body.balance
        })
        const response = await payment.save();
        response != null ? res.json({code:'200',message:'Payment successfull',data:null}) : 
                       res.json({code:'500',message:'Payment Fail',data:null});
    }catch(error){
        res.send('Err'+error)
    }
})

router.put('/paymentUpdate/:paymentId',async(req,res)=>{
    try{
        const response=await Payment.findOneAndUpdate({paymentId:req.params.paymentId},req.body)
        response!=null ? res.json({code:'200',message:'Payment update successfull',data:null}) : 
                   res.json({code:'500',message:'Payment update faild',data:null})
    }catch(error){
        res.send('Err'+error)
    }
})

router.delete('/paymentDelete/:paymentId',async(req,res)=>{
    const response=await Payment.findOneAndDelete({paymentId:req.params.paymentId},req.body)
        response!=null ? res.json({code:'200',message:'Payment delete successfull',data:null}) : 
                   res.json({code:'500',message:'Payment delete faild',data:null})
})
 
router.get('/paymentAll',async(req,res)=>{
    try{
        const re=await Payment.find({});
        re != null ? res.json({code:'200',message:'Payment getAll successfull',data:re}) : 
                       res.json({code:'500',message:'Payment getall delete Fail',data:null});
                       
    }catch(error){
        res.send('Err'+error)
    }
 })

module.exports=router