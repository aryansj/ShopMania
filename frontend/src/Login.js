import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { MyContextConsumer } from "./MyContext";

function Login() {
  const history = useHistory();
  return (
    <MyContextConsumer>
      {(context) => (
        <div>
          <button
            onClick={() => {
              if (context.isAuthenticated) history.push("/home");
            }}
          >
            lets go
          </button>
        </div>
      )}
    </MyContextConsumer>
  );
}

export default Login;
