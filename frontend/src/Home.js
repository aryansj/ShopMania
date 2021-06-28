import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthProvider, useAuthDispatch, useAuthState } from "./Context/Context";

function Home(props) {
  const authState = useAuthState();
  console.log(authState);
  const history = useHistory();
  if (authState.userToken === "") {
    history.push("/login");
  }
  return (
    <div>
      Hello
      <button>lets go</button>
    </div>
  );
}

export default Home;
