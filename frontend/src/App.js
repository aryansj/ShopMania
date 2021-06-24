import { useState } from "react";
import React from "react";
import Login from "./Login";
import Home from "./Home";
import MyContext from "./MyContext";
import Noob from "./Noob";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/noob" component={Noob}></Route>
        </Switch>{" "}
      </Router>
    </div>
  );
}

export default App;
