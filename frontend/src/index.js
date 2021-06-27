import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyContext from "./Reducer";
import Login from "./Login";
import { AuthProvider, useAuthDispatch, useAuthState } from './Context';
 
ReactDOM.render(
  <AuthProvider>
    <App/>
  </AuthProvider>
   ,
  document.getElementById("root")
);
