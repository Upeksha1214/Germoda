const express = require("express");
const router = express.Router();
const Video = require("../module/videoModule");

router.post("/", async (req, res) => {
  try {
    const video = new Video({
      videoId: req.body.videoId,
      videoName: req.body.videoName,
      videoSize: req.body.videoSize,
    });
    const response = await video.save();
    response != null
      ? res.json({
          code: "200", 
          message: "Video upload successfull",
          data: null,
        })
      : res.json({
          code: "500",
          message: "Video upload Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.put("//:videoId", async (req, res) => {
  try {
    const response = await Video.findOneAndUpdate(
      { videoId: req.params.videoId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "video update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "video update failed", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("//:videoId", async (req, res) => {
  try {
    const re = await Video.findOneAndDelete({ videoId: req.params.videoId });
    re != null
      ? res.json({
          code: "200",
          message: "Video delete successful",
          data: null,
        })
      : res.json({
          code: "500",
          message: "Video Account delete fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/", async (req, res) => {
  try {
    const re = await Video.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Video getAll successful",
          data: re,
        })
      : res.json({
          code: "500",
          message: "video getall  Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

module.exports = router;
