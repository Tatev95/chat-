import React, { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/login-slice";
import { LoginConstants } from "../../constants/LoginConstants";
import { setCurrentUser } from "../../store/user-slice";
import { signalingProvider } from "../../providers/signaling-provider";
import { useAppDispatch } from "../../store";

export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userData, userData2 } = LoginConstants;

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handChange =
    (setState: any) => (event: ChangeEvent<HTMLInputElement>) => {
      setState(event.target.value);
    };

  const handleLogin = () => {
    const user = {
      login,
      password,
    };

    if (
      (login == userData.login && password == userData.password) ||
      (login == userData2.login && password == userData2.password)
    ) {
      console.log(user.login, "user.login");

      dispatch(setUser(user));
      // dispatch(setCurrentUser(user.login));
      // dispatch(setCurrentUser({ name: user.login }));

      const tokenText = Math.random().toString(36).substring(7);
      localStorage.setItem("token", tokenText);

      navigate("/chat");
      return;
    } else {
      alert("enter valid login or password");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <div className="login_form">
        <input
          className="input_field"
          type="text"
          value={login}
          onChange={handChange(setLogin)}
        />
        <input
          className="input_field"
          type="password"
          value={password}
          onChange={handChange(setPassword)}
        />
      </div>
      <button className="login_button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
};
