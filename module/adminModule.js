const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    adminId: {
      type: String,
      require: true,
    },

    userName: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { collection: "germoda-admin", autoCreate: true }
);

module.exports = mongoose.model("Admin", adminSchema);
