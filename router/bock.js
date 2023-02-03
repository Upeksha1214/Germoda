const express = require("express");
const router = express.Router();
const Blocks = require("../module/blocksModule");

router.post("/", async (req, res) => {
  try {
    const blocks = new Blocks({
      blockId: req.body.blockId,
      blockName: req.body.blockName,
      blockSize: req.body.blockSize,
    });
    const response = await blocks.save();
    response != null
      ? res.json({
          code: "200", 
          message: "Block upload successfull",
          data: null,
        })
      : res.json({
          code: "500",
          message: "Block upload Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.put("//:blockId", async (req, res) => {
  try {
    const response = await Blocks.findOneAndUpdate(
      { blockId: req.params.blockId },
      req.body
    );
    response != null
      ? res.json({
          code: "200",
          message: "block update successfull",
          data: null,
        })
      : res.json({ code: "500", message: "block update failed", data: null });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.delete("//:blockId", async (req, res) => {
  try {
    const re = await Blocks.findOneAndDelete({ blockId: req.params.blockId });
    re != null
      ? res.json({
          code: "200",
          message: "block delete successful",
          data: null,
        })
      : res.json({
          code: "500",
          message: "block delete fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

router.get("/", async (req, res) => {
  try {
    const re = await Blocks.find({});
    re != null
      ? res.json({
          code: "200",
          message: "Blocks getAll successful",
          data: re,
        })
      : res.json({
          code: "500",
          message: "Blockd getall  Fail",
          data: null,
        });
  } catch (error) {
    res.send("Err" + error);
  }
});

module.exports = router;
