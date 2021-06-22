import { useState } from "react";
import React from "react";

function App() {
  const [noOfTimes, change] = useState(0);
  function doChange() {
    change(noOfTimes + 1);
  }
  return (
    <div>
      <p onClick={doChange}>CHup hoja {noOfTimes}</p>
    </div>
  );
}

export default App;
