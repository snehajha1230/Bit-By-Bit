import React from "react";
import "../styles/PaymentStatus.css";

const PaymentStatus = () => {
  const projects = [
    {
      name: "Website Development",
      subProjects: [
        { name: "Homepage Design", deadline: "March 10, 2025", status: "Completed" },
        { name: "Backend API", deadline: "March 15, 2025", status: "In Transit" },
        { name: "Final Testing", deadline: "March 25, 2025", status: "Pending" },
      ],
    },
    {
      name: "Mobile App Design",
      subProjects: [
        { name: "UI Mockups", deadline: "April 5, 2025", status: "Completed" },
        { name: "API Integration", deadline: "April 10, 2025", status: "In Transit" },
        { name: "Bug Fixing", deadline: "April 15, 2025", status: "Pending" },
      ],
    },
    {
      name: "Data Analytics Dashboard",
      subProjects: [
        { name: "Data Visualization", deadline: "April 20, 2025", status: "Completed" },
        { name: "Backend Data Processing", deadline: "April 25, 2025", status: "In Transit" },
        { name: "Report Generation", deadline: "April 30, 2025", status: "Pending" },
      ],
    },
    {
      name: "E-commerce Platform",
      subProjects: [
        { name: "Product Listing", deadline: "May 5, 2025", status: "Completed" },
        { name: "Payment Gateway", deadline: "May 10, 2025", status: "In Transit" },
        { name: "User Authentication", deadline: "May 15, 2025", status: "Pending" },
      ],
    },
    {
      name: "Content Management System",
      subProjects: [
        { name: "Admin Dashboard", deadline: "May 20, 2025", status: "Completed" },
        { name: "Media Upload", deadline: "May 25, 2025", status: "In Transit" },
        { name: "User Roles", deadline: "May 30, 2025", status: "Pending" },
      ],
    },
    {
      name: "AI Chatbot Development",
      subProjects: [
        { name: "Chat Interface", deadline: "June 5, 2025", status: "Completed" },
        { name: "NLP Model", deadline: "June 10, 2025", status: "In Transit" },
        { name: "Testing & Deployment", deadline: "June 15, 2025", status: "Pending" },
      ],
    },
    {
      name: "Financial Reporting Tool",
      subProjects: [
        { name: "Data Collection", deadline: "June 20, 2025", status: "Completed" },
        { name: "Analytics Engine", deadline: "June 25, 2025", status: "In Transit" },
        { name: "Report Exporting", deadline: "June 30, 2025", status: "Pending" },
      ],
    },
    {
      name: "Portfolio Website",
      subProjects: [
        { name: "Landing Page", deadline: "July 5, 2025", status: "Completed" },
        { name: "Projects Section", deadline: "July 10, 2025", status: "In Transit" },
        { name: "Contact Form", deadline: "July 15, 2025", status: "Pending" },
      ],
    },
  ];

  return (
    <div className="payment-status-container">
      <h1 className="payment-status-title">Payment Status</h1>
      {projects.map((project, index) => (
        <div key={index} className="project-table-container">
          <h2 className="project-title">{project.name}</h2>
          <table className="payment-table">
            <thead>
              <tr>
                <th>Sub-Project</th>
                <th>Deadline</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {project.subProjects.map((sub, subIndex) => (
                <tr key={subIndex}>
                  <td>{sub.name}</td>
                  <td>{sub.deadline}</td>
                  <td className={sub.status.toLowerCase().replace(" ", "-")}>
                    {sub.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default PaymentStatus;


