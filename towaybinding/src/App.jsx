import React, { useState } from "react";

const App = () => {

  const [user,setUser] = useState([""])

  const formHandle = (e) => {
    e.preventDefault();
    // console.log("hello ji");
    console.log(user);
    
    setUser("")
  };

  return (
    <div className="h-screen w-full p-10 bg-black text-white">
      <form
        onSubmit={(e) => {
          formHandle(e);
        }}
      >
        <input
          onChange={(e)=>{
            setUser(e.target.value)
          }}
          type="text"
          placeholder="enter ur name"
          className="border-1 border-white rounded-sm "
        />
        <button className="px-3 py-1 bg-amber-600 rounded-xl ml-2">
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
