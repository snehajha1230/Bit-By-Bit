const express = require("express");
const Profile = require("../models/Profile");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Create or Update Profile
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { fullName, skills, experience, bio, portfolio } = req.body;
    const userId = req.user.id;

    let profile = await Profile.findOne({ userId });
    if (profile) {
      profile.fullName = fullName;
      profile.skills = skills;
      profile.experience = experience;
      profile.bio = bio;
      profile.portfolio = portfolio;
      await profile.save();
      return res.status(200).json({ message: "Profile updated successfully", profile });
    }

    profile = new Profile({ userId, fullName, skills, experience, bio, portfolio });
    await profile.save();
    res.status(201).json({ message: "Profile created successfully", profile });
  } catch (error) {
    console.error("Error in Profile:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// Get Profile
router.get("/", async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.params.userId }).populate("userId", "username email role");
    console.log(profile);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error in Getting Profile:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;
