const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    videoId: {
      type: String,
      required: true,
    },

    videoName: {
      type: String,
      required: true,
    },

    videoSize: {
      type: String,
      required: true,
    },

    
  },
  { collection: "germoda-video", autoCreate: true }
);

module.exports = mongoose.model("Video", userSchema);
