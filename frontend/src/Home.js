import React, { useContext } from "react";
import MyContext from "./MyContext";

function Home(props) {
  const contextType = useContext(MyContext);
  console.log(contextType);
  //   if (contextType.isAuthe)
  return (
    <div>{contextType}</div>
  );
}

export default Home;
