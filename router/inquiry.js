const express = require("express");
const router = express.Router();
const Inquiry = require("../module/inquiryModule");

router.post("/", async (req, res) => {
  try {
    const re = await Inquiry.findOne({ studentId: req.body.studentId });
    if (re == null) {
      const inquiry = new Inquiry({
        inquiryId: req.body.inquiryId,
        studentId: req.body.studentId,
        description: req.body.description,
        email: req.body.email,
      });
      const response = await inquiry.save();
      response != null
        ? res.json({
            code: "200",
            message: "Inquiry is  successfull",
            data: null,
          })
        : res.json({ code: "500", message: "Inquiry is Fail", data: null });
    } else {
      res.json({
        code: "500",
        message: "Inquiry is AllreadyExists",
        data: null,
      });
    }
  } catch (error) {
    res.send("err" + error);
  }
});

router.put("//:inquiryId", async (req, res) => {
  try {
    const response = await Inquiry.findOneAndUpdate(
      { inquiryId: req.params.inquiryId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Inquiry update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "Inquiry update faild", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("//:inquiryId", async (req, res) => {
  try {
    const response = await Inquiry.findOneAndDelete(
      { inquiryId: req.params.inquiryId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Inquiry update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "Inquiry update faild", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/", async (req, res) => {
  try {
    const re = await Inquiry.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Inquiry getAll successfull",
          data: re,
        })
      : res.json({
          code: "500",
          message: "Inquiry getall delete Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

module.exports = router;
