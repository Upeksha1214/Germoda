const express=require('express')
const { Model } = require('mongoose')
const router=express.Router()
const Admin=require('../module/adminModule')


router.post('/createAdmin',async(req,res)=>{
    
   const admin =new Model({
    adminId:req.body.adminId,
    userName:req.body.userName,
    passWord:req.body.passWord
   })

   try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
    console.log(res);
}
catch (error) {
    res.status(400).json({message: error.message})
    
}
})

module.exports=router