import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import MyContext from "./Reducer";

function Home(props) {
  const contextType = useContext(MyContext);
  const history = useHistory();
  console.log(contextType);

  return (
    <div>
      Hello {contextType}
      <button
        onClick={() => {
          history.push("/noob");
        }}
      >
        lets go
      </button>
    </div>
  );
}

export default Home;
