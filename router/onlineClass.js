const express = require("express");
const router = express.Router();
const OnlineClass = require("../module/onlineClassesmodule");

router.post("/", async (req, res) => {
  try {
    const onlineClass = new OnlineClass({
      classId: req.body.classId,
      className: req.body.className,
      duration: req.body.duration,
      date: req.body.date,
      fee: req.body.fee,
      time: req.body.time,
    });
    const response = await onlineClass.save();
    response != null
      ? res.json({
          code: "200",
          message: "Online Class Add successfull",
          data: null,
        })
      : res.json({ code: "500", message: "Online Class Add Fail", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.put("//:classId", async (req, res) => {
  try {
    const response = await OnlineClass.findOneAndUpdate(
      { classId: req.params.classId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Online Class update successfull",
          data: null,
        })
      : res.json({
          code: "500",
          message: "Online Class update faild",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("//:classId", async (req, res) => {
  try {
    const response = await OnlineClass.findOneAndDelete(
      { classId: req.params.classId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "Online Class update successfull",
          data: null,
        })
      : res.json({
          code: "500",
          message: "On;ine Class update faild",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/", async (req, res) => {
  try {
    const re = await OnlineClass.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Online Class getAll successfull",
          data: re,
        })
      : res.json({
          code: "500",
          message: "Online Class getall delete Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

module.exports = router;
