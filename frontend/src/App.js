import { useState } from "react";
import React from "react";
import Login from "./Login";
import Home from "./Home";
import Authenticate from "./Authenticate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
          <Route path="/Login" component={Login} onEnter={Authenticate}>
          </Route>
          <Route path="/Home" component={Home} onEnter={Authenticate}>
          </Route>
      </Switch> 
    </div>
  );
}

export default App;
