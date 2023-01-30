const express = require("express");
const router = express.Router();
const Admin = require("../module/adminModule");

router.post("/createAdmin", async (req, res) => {
  try {
    const admin = new Admin({
      adminId: req.body.admin,
      userName: req.body.userName,
      passWord: req.body.passWord,
    });
    const response = await admin.save();
    response != null
      ? res.json({
          code: "200",
          message: "Account create successfull",
          data: null,
        })
      : res.json({
          code: "500",
          message: "User Account Create Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.put("/updateAdmin/:userName", async (req, res) => {
  try {
    const response = await Admin.findOneAndUpdate(
      { userName: req.params.userName },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "profile update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "profile update failed", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("/deleteAdmin/:userName", async (req, res) => {
  try {
    const re = await Admin.findOneAndDelete({ userName: req.params.userName });
    re != null
      ? res.json({
          code: "200",
          message: "Account delete successful",
          data: null,
        })
      : res.json({
          code: "500",
          message: "User Account delete fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/getAllAdmin", async (req, res) => {
  try {
    const re = await Admin.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Account getAll successful",
          data: re,
        })
      : res.json({
          code: "500",
          message: "User Getall delete Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

module.exports = router;
