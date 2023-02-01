const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    nic: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    birthday: {
      type: String,
      required: true,
    },

    courseName: {
      type: String,
      required: true,
    },

    courseDuration: {
      type: String,
      required: true,
    },

    olResult: {
      type: String,
      required: true,
    },

    alResult: {
      type: String,
      required: true,
    },
  },
  { collection: "germoda-students", autoCreate: true }
);

module.exports = mongoose.model("Student", userSchema);
