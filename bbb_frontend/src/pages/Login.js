import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; // Import styles

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Login Data:", formData);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: formData.email,
        password: formData.password,
      });

      alert(response.data.message);
      navigate("/"); // Show success message
    } catch (err) {
      setError(err.response?.data?.message || "Invalid Credentials. Try again.");
      alert(error);
    }
  };
    const [error, setError] = useState("");
    const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h1 className="logo">SkillSync</h1>
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;



