import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MyContext from "./MyContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
function Login() {
  const history = useHistory();
  const [isClicked, handleisClicked] = useState(false);
  return (
    <MyContext.Provider value={isClicked}>
        <div>
        
          <button
            onClick={() => {
             handleisClicked(true); 
             history.push("/Home");
            }}
          >
            lets go
          </button>
        </div>
    </MyContext.Provider>
  );
}

export default Login;
