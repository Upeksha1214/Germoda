const express=require('express')
const router=express.Router()
const Register=require('../module/registerModule')

router.post('/registerStudent',async(req,res)=>{
    try{
        const re=await Register.findOne({studentId:req.body.studentId});
        if(re==null){
            const register=new Register({
                registerId:req.body.registerId,
                registerDate:req.body.registerDate,
                studentId:req.body.studentId,
                time:req.body.time,
                payment:req.body.payment
            })
            const response=await register.save();
            response != null ? res.json({code:'200',message:'register is  successfull',data:null}) : 
                               res.json({code:'500',message:'register is Fail',data:null});
        }else{
            res.json({code:'500',message:'student is AllreadyExists',data:null});
        }
    }catch (error) {
        res.send('Err'+error)
    }
})

router.put('/registerUpdate/:registerId',async(req,res)=>{
    try{
        const response=await Register.findOneAndUpdate({registerId:req.params.registerId},req.body)
        response!=null ? res.json({code:'200',message:'Register update successfull',data:null}) : 
                   res.json({code:'500',message:'Register update faild',data:null})
    }catch(error){
        res.send('Err'+error)
    }
})

router.delete('/registerDelete/:registerId',async(req,res)=>{
    try{
        const response=await Register.findOneAndDelete({registerId:req.params.registerId},req.body)
        response!=null ? res.json({code:'200',message:'Register update successfull',data:null}) : 
                   res.json({code:'500',message:'Register update faild',data:null})
    }catch(error){
        res.send('Err'+error)
    }
})

router.get('/getAllResgister',async(req,res)=>{
    try{
        const re=await Register.find({});
        re != null ? res.json({code:'200',message:'Register getAll successfull',data:re}) : 
                       res.json({code:'500',message:'Register getall delete Fail',data:null});
                       
    }catch(error){
        res.send('Err'+error)
    }
})

module.exports=router