import React from "react";
import "../styles/Inbox.css";

const Inbox = () => {
  return (
    <div className="inbox-container">
      <h2 className="inbox-title">Inbox</h2>
      <div className="message-list">
        <div className="message-item unread">
          <h4>John Doe</h4>
          <p>Hey! Are you available for a quick chat?</p>
          <span className="timestamp">10 mins ago</span>
        </div>
        <div className="message-item">
          <h4>Jane Smith</h4>
          <p>Project deadline is approaching. Let’s discuss.</p>
          <span className="timestamp">1 hour ago</span>
        </div>
        <div className="message-item">
          <h4>Client X</h4>
          <p>Payment has been processed. Thanks!</p>
          <span className="timestamp">Yesterday</span>
        </div>
      </div>
    </div>
  );
};

export default Inbox;

