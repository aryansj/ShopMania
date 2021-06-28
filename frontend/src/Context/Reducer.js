import React, { useReducer } from "react";
import axios from "axios";
const ROOT_URL = "http://127.0.0.1:5000/";
// let user = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser")).user
//   : "";
let userToken = localStorage.getItem("currentUserToken")
  ? localStorage.getItem("currentUserToken")
  : "";
// backend call for getting user details

export const initialState = {
  userToken: "" || userToken,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        userToken: action.payload,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        userToken: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
