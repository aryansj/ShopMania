import { useState } from "react";
import React from "react";
import Login from "./Login";
import Home from "./Home";
import MyContext from "./MyContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [isAuthenticated, handleisAuthenticated] = useState(false);
  return (
    <MyContext.Provider value={isAuthenticated}>

    <div>
    <Router> 
        <Switch>
          <Route path="/Home" component={Home}>
          </Route>
      </Switch> </Router>
     
    </div>
    </MyContext.Provider>
  );
}

export default App;