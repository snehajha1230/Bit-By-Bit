import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css"; // Import CSS for styling
import { FaBars } from "react-icons/fa"; // Import hamburger icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <div 
        className="menu-icon" 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
      >
        <FaBars size={24} />
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? "open" : ""}`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <ul>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/work-status">Work Status</Link></li>
          <li><Link to="/payment-status">Payment Status</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li className="support"><Link to="/support">Support</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
