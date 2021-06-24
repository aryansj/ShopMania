import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyContext from "./MyContext";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
function Login() {
  const history = useHistory();
  const [isAuthenticated, handleisAuthenticated] = useState(false);
  return (
    <MyContext.Provider value={isAuthenticated}>
      {isAuthenticated === false ? (
        <div>
          <button
            onClick={() => {
              handleisAuthenticated(true);
            }}
          >
            lets go
          </button>
        </div>
      ) : (
        <App />
      )}
    </MyContext.Provider>
  );
}

export default Login;
