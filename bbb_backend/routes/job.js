const express = require("express");
const Job = require("../models/Job");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Employers can post jobs
router.post("/create", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "employee") {
      return res.status(403).json({ message: "Only employees can post jobs" });
    }

    const { title, description, salary } = req.body;
    if (!title || !description || !salary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const job = new Job({ ...req.body, employerId: req.user.id });
    await job.save();
    res.status(201).json({ message: "Job posted successfully", job });
  } catch (error) {
    console.error("Error posting job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Freelancers can apply for jobs
router.post("/apply/:jobId", authMiddleware, async (req, res) => {
  try {
    if (req.user.role !== "freelancer") {
      return res.status(403).json({ message: "Only freelancers can apply for jobs" });
    }

    const job = await Job.findById(req.params.jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Prevent duplicate applications
    if (job.applicants.includes(req.user.id)) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }

    job.applicants.push(req.user.id);
    await job.save();

    res.status(200).json({ message: "Applied successfully", job });
  } catch (error) {
    console.error("Error applying for job:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().populate("employerId", "username email");
    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;

