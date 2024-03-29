const express = require("express");
const router = express.Router();
const Student = require("../module/studentModule");

router.post("/", async (req, res) => {
  try {
    const student = new Student({
      studentId: req.body.studentId,
      name: req.body.name,
      email: req.body.email,
      password:req.body.password,
      address: req.body.address,
      nic: req.body.nic,
      gender: req.body.gender,
      birthday: req.body.birthday,
      courseName: req.body.courseName,
      courseDuration: req.body.courseDuration,
      olResult: req.body.olResult,
      alResult: req.body.alResult,
      country:req.body.country,
      state:req.body.state,
    });

    const response = await student.save();

    console.log(response);

    if (response != null) {
      res.json({
        code: "200",
        message: "Student create successfull",
        data: response,
      });
    } else {
      res.json({ code: "500", message: "Student Create Fail", data: null });
    }
  } catch (error) {
    res.send("Err" + error);
  }
});

router.post('/login',async(req,res)=>{
  const response= await Student.findOne({email : req.body.email , password : req.body.password});
  response!=null ? res.json({code:'200',message:'login  successfull',data:response}) : 
                  res.json({code:'500',message:'login faild',data:null})

})

router.put("//:studentId", async (req, res) => {
  try {
    const response = await Student.findOneAndUpdate(
      { studentId: req.params.studentId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Student update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "Student update faild", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("/deleteStudent/:studentId", async (req, res) => {
  try {
    const response = await Student.findOneAndDelete(
      { studentId: req.params.studentId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Student update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "Student update faild", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/", async (req, res) => {
  try {
    const re = await Student.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Student getAll successfull",
          data: re,
        })
      : res.json({
          code: "500",
          message: "Student Getall delete Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.post('/login',async(req,res)=>{
  const response= await Student.findOne({email : req.body.email , password : req.body.password});
  response!=null ? res.json({code:'200',message:'login  successfull',data:response.surname}) : 
                  res.json({code:'500',message:'login faild',data:null})

});

module.exports = router;
