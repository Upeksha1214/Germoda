const express=require('express')
const router=express.Router()
const Marks=require('../module/marksModule')

router.post('/marksAdd',async(req,res)=>{
    try{
        const re=await Marks.findOne({className:req.body.className,studentId:req.body.studentId,examId:req.body.examId});
        if(re==null){
        const marks =new Marks({
            examId:req.body.examId,
            marks:req.body.marks,
            className:req.body.className,
            grade:req.body.grade,
            studentId:req.body.studentId,
            status:req.body.status
            })
            const response=await marks.save();
            response != null ? res.json({code:'200',message:'Marks add is  successfull',data:null}) : 
                               res.json({code:'500',message:'Marks add is Fail',data:null});
        }else{
            res.json({code:'500',message:'Class name or student is AllreadyExists',data:null});
        }
    }catch (error) {
        res.send('Err'+error)
    }

})

router.put('/marksUpdate/:examId',async(req,res)=>{
    try{
        const response=await Marks.findOneAndUpdate({examId:req.params.examId},req.body)
        response!=null ? res.json({code:'200',message:'Marks update successfull',data:null}) : 
                   res.json({code:'500',message:'Marks update faild',data:null})
    }catch(error){
        res.send('Err'+error)
    }
})

router.delete('/marksDelete/:examId',async(req,res)=>{
    try{
        const response=await Marks.findOneAndDelete({examId:req.params.examId},req.body)
        response!=null ? res.json({code:'200',message:'Marks delete successfull',data:null}) : 
                   res.json({code:'500',message:'Marks delete faild',data:null})
    }catch(error){
        res.send('Err'+error)
    }
})

router.get('/marksAll',async(req,res)=>{
    try{
        const re=await Marks.find({});
        re != null ? res.json({code:'200',message:'Marks getAll successfull',data:re}) : 
                       res.json({code:'500',message:'Marks getall delete Fail',data:null});
                       
    }catch(error){
        res.send('Err'+error)
    }
})

module.exports=router
