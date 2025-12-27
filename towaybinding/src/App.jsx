import React, { useState } from "react";

const App = () => {
  const [user, setuser] = useState("harsh");
  
  const formHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          value={user}
          placeholder="entre your name"
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
