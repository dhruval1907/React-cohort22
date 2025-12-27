import React, { useState } from "react";

const App = () => {
  const [user, setuser] = useState("");
  const [allusers,setallusers] = useState([])
  const formHandler = (e) => {
    e.preventDefault();
    // setallusers(...allusers,user)
    const olduser = [...allusers]
    const newUsers = [olduser,user]
    setallusers(newUsers)
    console.log(allusers);
    
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
            setuser(e.target.value)
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
