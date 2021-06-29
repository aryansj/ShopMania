import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const ROOT_URL = "http://127.0.0.1:5000/";
function Register() {
    const history = useHistory();
    const [currentUsername, handlecurrentUsername] = useState("");
    const [currentPassword, handlecurrentPassword] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        await axios
      .post(ROOT_URL + "register", {
        userID: currentUsername,
        password: currentPassword,
      })
      .then((response) => {
        console.log(response.data);
        history.push("/");
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <button onClick={handleRegister}>Register</button>
        </div>
      );
}

export default Register;