import React, { useState } from "react";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
      
      // Simulating a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: "Thank you for reaching out!", sender: "bot" }]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Messaging</div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="chat-textbox"
        />
        <button className="chat-send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
