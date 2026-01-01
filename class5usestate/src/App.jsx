import React, { useState } from "react";

const App = () => {
  const [val, setval] = useState({ username: "harsh", isBlocked: "Blocked" });
  return (
    <div className="bg-red-300 h-screen w-full text-white font-semibold p-10">
      <p>username : {val.username}</p>
      <p>isBanned : {val.isBlocked}</p>
      <button onClick={()=>setval({...val,isBlocked : ""})} className={`px-3 py-2 rounded-full ${val.isBlocked ? "bg-blue-500" : "bg-red-500"}`}>Unblock</button>
    </div>
  );
};

export default App;
