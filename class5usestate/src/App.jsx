import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState({ username: "harsh", isBlocked: false });
  return (
    <div className="bg-red-300 h-screen w-full text-white font-semibold p-10">
      <p>username : {val.username}</p>
      <p>Login : {val.isBlocked ? "Logged in" : "Logged out" }</p>
      <button
        onClick={() =>
          setval({ ...val, isBlocked: !val.isBlocked })
        }
        className={`px-3 py-2 rounded-full ${
          val.isBlocked ? "bg-blue-500" : "bg-red-500"
        }`}
      >
        Unblock
      </button>
    </div>
  );
};

export default App;
