import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import styles
import { FaBars, FaFacebookMessenger } from "react-icons/fa"; // Import hamburger menu & messenger icon
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInboxOpen, setIsInboxOpen] = useState(false);

  const data = [
    { name: "Jan", work: 5, payment: 1000 },
    { name: "Feb", work: 8, payment: 1500 },
    { name: "Mar", work: 12, payment: 2000 },
    { name: "Apr", work: 6, payment: 1200 },
    { name: "May", work: 10, payment: 1800 },
  ];

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <div 
        className="menu-icon"
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <FaBars size={24} />
      </div>

      {/* Sidebar Menu */}
      <div 
        className={`sidebar ${isSidebarOpen ? "open" : ""}`} 
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <ul>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/work-status">Work Status</Link></li>
          <li><Link to="/payment-status">Payment Status</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li className="support"><Link to="/support">Support</Link></li>
        </ul>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">SkillSync</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        {/* Modified Inbox Section */}
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>

        {/* Inbox Icon */}
        <div className="inbox-container" onClick={() => setIsInboxOpen(!isInboxOpen)}>
          <FaFacebookMessenger size={28} className="inbox-icon" />
          <p className="inbox-text">Inbox</p>
        </div>
      </nav>

      {/* Inbox Popup */}
      {isInboxOpen && (
        <div className="inbox-popup">
          <h3>Messages</h3>
          <p>No new messages</p>
        </div>
      )}

      {/* Hero Section */}
      <header className="hero">
        <h2>Enhance Your Skills & Connect with Opportunities</h2>
        <p>Join SkillSync and take your career to the next level.</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature-box">
          <h3>Find Freelance Gigs</h3>
          <p>Connect with clients and get hired for projects that match your skills.</p>
        </div>
        <div className="feature-box">
          <h3>Enhance Your Skills</h3>
          <p>Access top-notch learning resources to level up your career.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Your Dream Job</h3>
          <p>Build your resume and apply for the best job opportunities.</p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="dashboard-section">
        <h2>Dashboard Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="work" stroke="#8884d8" />
            <Line type="monotone" dataKey="payment" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 SkillSync. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
