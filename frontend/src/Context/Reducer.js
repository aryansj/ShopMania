
import React, { useReducer } from "react";
import axios from "axios";
// let user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";
let userToken = localStorage.getItem("currentUserToken")
  ? localStorage.getItem("currentUserToken")
  : "";
// backend call for getting user details
let user = "";
axios
      .post(URL + "getUser", {
        userToken: userToken 
      })
      .then((response) => {
        console.log(response.data);
        user = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
export const initialState = {
  userName: "" || user,
  userToken: "" || userToken,
  loading: false,
  errorMessage: null
};
 
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        token: action.payload,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: ""
      };
 
    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };
 
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};