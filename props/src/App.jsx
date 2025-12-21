import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="parent h-screen w-full bg-black flex flex-wrap gap-4">
        <Cards com="amazon" day="5 day left"  />
        <Cards com="Google" day="30 day left />
    </div>
  );
};

export default App;
