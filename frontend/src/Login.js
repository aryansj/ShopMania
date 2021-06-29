import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { loginUser, logout } from "./Context/Actions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./Context/Context";

function Login() {
  const history = useHistory();
  const [currentUsername, handlecurrentUsername] = useState("");
  const [currentPassword, handlecurrentPassword] = useState("");
  const dispatch = useAuthDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    let loginData = {
      userID: currentUsername,
      password: currentPassword,
    };
    let response = await loginUser(dispatch, loginData);
    if (response.type === 1) {
      history.push("/home");
    } else {
      console.log("Fail");
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    history.push("/register");
  }
  return (
    <div>
      <input
        value={currentUsername}
        onChange={(e) => {
          handlecurrentUsername(e.target.value);
        }}
      ></input>
      <input
        value={currentPassword}
        onChange={(e) => {
          handlecurrentPassword(e.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Login;
