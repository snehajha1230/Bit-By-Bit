require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Helper function to validate email format
const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// Helper function to validate password strength
const isValidPassword = (password) => {
  return password.length >= 6; // Ensure a minimum of 6 characters
};

// ✅ Register Route
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    if (!isValidPassword(password)) {
      return res.status(400).json({ message: "Password must be at least 6 characters long." });
    }

    // Check if username or email is already registered
    const existingUser = await User.findOne({ $or: [{ username }, { email }] }).exec();
    if (existingUser) {
      return res.status(400).json({ message: "Username or email already taken." });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save new user
    const user = new User({ username, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("❌ Error in Register:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Find user by username
    const user = await User.findOne({ username }).exec();
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password." });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid username or password." });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      message: "Login successful!",
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }
    });
  } catch (error) {
    console.error("❌ Error in Login:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;


