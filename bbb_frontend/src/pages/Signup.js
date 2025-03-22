import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API requests
import "./Signup.css"; // Import styles

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "freelancer", // Default role
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });

      alert(response.data.message); // Show success message
      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up for SkillSync</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Field */}
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Confirm Password Field */}
        <div className="input-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection Dropdown */}
        <div className="input-group">
          <label>Select Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="freelancer">Freelancer</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Submit Button */}
        <button type="submit" className="signup-btn">Sign Up</button>

        {/* Login Redirect */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;






