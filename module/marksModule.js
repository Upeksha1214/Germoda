const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  examId: {
    type: String,
    required: true,
  },

  marks: {
    type: String,
    required: true,
  },

  className: {
    type: String,
    required: true,
  },

  grade: {
    type: String,
    required: true,
  },

  studentId: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },
},
{ collection: "germoda-marks" });

module.exports = mongoose.model("Marks", marksSchema);
