import React from "react";
import "../styles/Dashboard.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const workData = [
  { name: "Completed", value: 60, color: "#28a745" },
  { name: "In Progress", value: 30, color: "#ffc107" },
  { name: "Pending", value: 10, color: "#dc3545" },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>
      
      <div className="dashboard-section">
        <h2>Work Progress</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={workData}
            cx={150}
            cy={150}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {workData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <div className="dashboard-section">
        <h2>Payment Status</h2>
        <p>Last Payment: <strong>₹5,000 (Received)</strong></p>
        <p>Next Payment Due: <strong>₹3,500 (Pending)</strong></p>
      </div>

      <div className="dashboard-section">
        <h2>Upcoming Deadlines</h2>
        <ul>
          <li>Website UI Redesign - <strong>March 25, 2025</strong></li>
          <li>API Integration Task - <strong>April 5, 2025</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
