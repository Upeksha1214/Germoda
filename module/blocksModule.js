const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    blockId: {
      type: String,
      required: true,
    },

    blockName: {
      type: String,
      required: true,
    },

    blockSize: {
      type: String,
      required: true,
    },

    
  },
  { collection: "germoda-blocks", autoCreate: true }
);

module.exports = mongoose.model("Blocks", userSchema);
