import React from "react";
import "../styles/Support.css";

const Support = () => {
  return (
    <div className="support-container">
      <h1 className="support-title">How may I help you?</h1>
      <textarea 
        className="support-textbox" 
        placeholder="Raise your query here..."
      />
      <button className="support-button">Submit Query</button>
    </div>
  );
};

export default Support;