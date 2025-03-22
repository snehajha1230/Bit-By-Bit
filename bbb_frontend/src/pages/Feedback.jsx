import React from "react";
import "../styles/Feedback.css";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h1 className="feedback-title">Your Valuable Feedback Matters</h1>
      <textarea className="feedback-textarea" placeholder="Write your feedback here..."></textarea>
      <button className="feedback-button">Post Feedback</button>
    </div>
  );
};

export default Feedback;

