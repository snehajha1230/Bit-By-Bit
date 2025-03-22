import React from "react";
import "../styles/WorkStatus.css";

const projects = [
  {
    title: "Website Development",
    assignedDate: "March 10, 2025",
    submissionDate: "March 25, 2025",
    progress: "60% Completed",
    blocks: "API Integration Issues",
    submitted: "Home & Login Page",
    missed: "None"
  },
  {
    title: "E-commerce Platform",
    assignedDate: "March 12, 2025",
    submissionDate: "March 28, 2025",
    progress: "45% Completed",
    blocks: "Payment Gateway Integration",
    submitted: "Product Listing & Cart Page",
    missed: "None"
  },
  {
    title: "Mobile App UI Design",
    assignedDate: "March 15, 2025",
    submissionDate: "April 5, 2025",
    progress: "70% Completed",
    blocks: "Responsive Layout Bugs",
    submitted: "Dashboard & Settings Page",
    missed: "Contact Page"
  },
  {
    title: "API Development",
    assignedDate: "March 18, 2025",
    submissionDate: "April 1, 2025",
    progress: "50% Completed",
    blocks: "Database Connectivity Issues",
    submitted: "User Authentication",
    missed: "Data Fetching Module"
  },
  {
    title: "CMS Integration",
    assignedDate: "March 20, 2025",
    submissionDate: "April 10, 2025",
    progress: "40% Completed",
    blocks: "Custom Plugin Errors",
    submitted: "Admin Panel & Blog Section",
    missed: "Image Gallery"
  },
  {
    title: "Dashboard Analytics",
    assignedDate: "March 22, 2025",
    submissionDate: "April 15, 2025",
    progress: "65% Completed",
    blocks: "Chart Rendering Delays",
    submitted: "User Metrics & Reports",
    missed: "Real-Time Data Display"
  },
  {
    title: "Social Media App",
    assignedDate: "March 25, 2025",
    submissionDate: "April 20, 2025",
    progress: "55% Completed",
    blocks: "Notifications Bug",
    submitted: "Feed & Profile Page",
    missed: "Messaging Module"
  },
  {
    title: "Portfolio Website",
    assignedDate: "March 28, 2025",
    submissionDate: "April 25, 2025",
    progress: "80% Completed",
    blocks: "SEO Optimization Pending",
    submitted: "Home, About & Projects Page",
    missed: "Contact Form"
  }
];

const WorkStatus = () => {
  return (
    <div className="work-status-container">
      <h1 className="work-status-title">Work Status</h1>
      <div className="work-status-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-status-card">
            <h2>Project: {project.title}</h2>
            <p><strong>Assigned Date:</strong> {project.assignedDate}</p>
            <p><strong>Submission Date:</strong> {project.submissionDate}</p>
            <p><strong>Work Progress:</strong> {project.progress}</p>
            <p><strong>Work Blocks:</strong> {project.blocks}</p>
            <p><strong>Work Submitted:</strong> {project.submitted}</p>
            <p><strong>Work Missed:</strong> {project.missed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkStatus;


