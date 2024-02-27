import React, { useEffect, useState } from "react";
import "./messages.css";
import { useMessaging } from "../../hooks/use-messaging";
import { loginProvider } from "../../providers/account-provider";
import { signalingProvider } from "../../providers/signaling-provider";
import { useNavigate } from "react-router-dom";

export const Messages = ({}) => {
  const navigate = useNavigate();

  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, sendMessage] = useMessaging();
  const userName = loginProvider.getUsername();

  useEffect(() => {
    signalingProvider.init();
  }, []);

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (currentMessage !== "") {
      const messageData = {
        author: userName,
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };
      sendMessage(messageData);
      setCurrentMessage("");
    }
  };

  const handleLogout = () => {
    loginProvider.removeToken();
    navigate("/");
  };

  return (
    <div className="chat-window">
      <button onClick={handleLogout}>Logout</button>
      <div className="chat-header">
        <p>Chat</p>
      </div>
      <div className="chat-body">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <div>
              <div className="message-content">
                <p>{message?.message}</p>
              </div>
              <div className="message-meta">
                <p id="time">{message.time}</p>
                <p id="author">{message.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="say hello..."
          onChange={handleMessageChange}
        />
        <button onClick={handleSendMessage}>send</button>
      </div>
    </div>
  );
};
