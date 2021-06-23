import React, { useContext } from "react";
import { MyContextConsumer } from "./MyContext";

function Home(props) {
  //const contextType = usecontext();
  //   if (contextType.isAuthe)
  return (
    <MyContextConsumer>
      {(context) => <div>{context.isAuthenticated}</div>}
    </MyContextConsumer>
  );
}

export default Home;
