import React from "react";
import { useState } from "react";

const App = () => {
  const [Color, setColor] = useState(["white","black"]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <div>
          <input type="radio" name="male" />
          <label htmlFor="male"> {Color === "white" ? "black" : null}</label>
        </div>
        <div>
          <input type="radio" name="male" />
          <label htmlFor="male"> {Color === "black" ? "white" : null}</label>
        </div>
      </div>
    </div>
  );
};

export default App;
