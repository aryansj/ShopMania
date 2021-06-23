import { useState } from "react";
import React from "react";
import Login from "./Login";
import Home from "./Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router> 
        <Switch>
          <Route path="/Login" component={Login}>
          </Route>
          <Route path="/Home" component={Home}>
          </Route>
      </Switch> </Router>
     
    </div>
  );
}

export default App;