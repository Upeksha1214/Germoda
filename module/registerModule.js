const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    registerId: {
      type: String,
      required: true,
    },

    registerDate: {
      type: String,
      required: true,
    },

    studentId: {
      type: String,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    payment: {
      type: String,
      required: true,
    },
  },
  { collection: "germoda-registrations" }
);

module.exports = mongoose.model("Registration", registerSchema);
