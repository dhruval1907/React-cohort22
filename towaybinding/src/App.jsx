import React, { useState } from "react";

const App = () => {
  const [user, setuser] = useState("");
  const [allusers, setallusers] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();

    setallusers([...allusers, user]);
    setuser("");
    console.log(allusers);
  };
  return (
    <div style={{color:"white"}}>
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
      >
        <input
          onChange={(e) => {
            setuser(e.target.value);
          }}
          type="text"
          value={user}
          placeholder="entre your name"
          style={{ padding: "20px 20px" }}
        />
        <button style={{ padding: "20px 20px" }}>submit</button>
      </form>
      {allusers.map(function (elem) {
        return <h1>{elem}</h1>
      })}
    </div>
  );
};

export default App;
