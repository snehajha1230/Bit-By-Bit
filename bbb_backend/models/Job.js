const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: Number,
  employerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
}, { timestamps: true });

module.exports = mongoose.model("Job", JobSchema);
