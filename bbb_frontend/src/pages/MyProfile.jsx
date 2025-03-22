import React, { useState } from 'react';
import '../styles/MyProfile.css';

const MyProfile = () => {
  const [user] = useState({
    name: "Sneha Jha",
    username: "sneha_1230",
    bio: "Creative freelancer specializing in web development, MERN stack. Passionate about technology and bringing ideas to life.",
    email: "snehajha1230@gmail.com",
    location: "New Delhi, India",
    joined: "2019-09-12",
    skills: ["Web Development", "MERN stack", "C++ Programming", "HTML/CSS", "JavaScript", "React", "Communication Skills"],
    portfolio: "https://snehaportfolio.com",
    social: {
      linkedin: "https://www.linkedin.com",
      github: "https://github.com",
      instagram: "https://www.instagram.com",
    },
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          {/* Placeholder for profile picture */}
        </div>
        <h1 className="name">{user.name}</h1>
        <p className="username">@{user.username}</p>
      </div>

      <div className="bio-section">
        <h2>About Me</h2>
        <p>{user.bio}</p>
      </div>

      <div className="info-section">
        <h2>Contact & Info</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Location:</strong> {user.location}</p>
        <p><strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}</p>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          {user.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="portfolio-section">
        <h2>Portfolio</h2>
        <p><a href={user.portfolio} target="_blank" rel="noopener noreferrer">View my portfolio</a></p>
      </div>

      <div className="social-media-section">
        <h2>Social Media</h2>
        <div className="social-links">
          <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={user.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={user.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>

      <button className="edit-profile-btn">Edit Profile</button>
    </div>
  );
};

export default MyProfile;
