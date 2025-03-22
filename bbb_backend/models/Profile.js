const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  skills: {
    type: [String], 
  },
  experience: {
    type: String,
  },
  bio: {
    type: String,
  },
  portfolio: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Profile", ProfileSchema);
