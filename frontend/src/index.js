import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { AuthProvider, useAuthDispatch, useAuthState } from "./Context/Context";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
