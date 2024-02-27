import React, { useState } from "react";
import { loginProvider } from "../../providers/account-provider";
import { useNavigate } from "react-router-dom";
import "./signIn.css";

export const SignIn = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const joinChat = () => {
    if (userName !== "") {
      loginProvider.setToken(userName);
      navigate("/chat");
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="chat">
      <div className="joinChatContainer">
        <h3>login</h3>
        <input type="text" placeholder="login" onChange={handleChangeName} />
        <input
          type="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
        <button onClick={joinChat}>Join Chat</button>
      </div>
    </div>
  );
};
