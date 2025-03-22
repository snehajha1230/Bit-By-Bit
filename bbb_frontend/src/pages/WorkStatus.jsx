import React from "react";
import "../styles/WorkStatus.css";

const WorkStatus = () => {
  return (
    <div className="work-status-container">
      <h1 className="work-status-title">Work Status</h1>
      <div className="work-status-content">
        <div className="work-status-card">
          <h2>Project: Website Development</h2>
          <p><strong>Assigned Date:</strong> March 10, 2025</p>
          <p><strong>Submission Date:</strong> March 25, 2025</p>
          <p><strong>Work Progress:</strong> 60% Completed</p>
          <p><strong>Work Blocks:</strong> API Integration Issues</p>
          <p><strong>Work Submitted:</strong> Home & Login Page</p>
          <p><strong>Work Missed:</strong> None</p>
        </div>
      </div>
    </div>
  );
};

export default WorkStatus;

