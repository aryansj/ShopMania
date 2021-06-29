import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import MyContext from "./Context/Reducer";

function Noob(props) {
  const contextType = useContext(MyContext);
  const history = useHistory();
  console.log(contextType);
  if (contextType === false) {
    history.push("/");
  }
  return <div>buff{contextType}</div>;
}

export default Noob;
