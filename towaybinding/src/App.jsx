import React from "react";

const App = () => {
  const formHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div>
      <form onSubmit={(e)=>{ 
        formHandler(e)
      }}>
        <input type="text" placeholder="entre your name" />
        <button>submit</button>
      </form>
    </div>
  );
};

export default App;
