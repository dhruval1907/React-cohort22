import React from "react";

const App = () => {
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
          <label htmlFor="male"> Black</label>
        </div>
        <div>
          <input type="radio" name="male" />
          <label htmlFor="male"> White</label>
        </div>
      </div>
    </div>
  );
};

export default App;
