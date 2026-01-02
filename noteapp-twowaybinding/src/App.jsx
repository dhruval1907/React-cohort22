import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full  flex justify-between p-10" style={{background:"linear-gradient(lightblue,darkblue)"}}>
      <div className="w-[40%]">
        <form className="flex items-start p-5   h-full   flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Task "
            className="px-4 py-2 border-2 rounded  w-full outline-none  border-white "
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Details"
            className="px-4 h-32 py-3  border-2 w-full rounded border-white outline-none"
          ></textarea>
          <button className="px-3 py-2   w-full bg-white outline-none  text-black font-semibold rounded">
            add note
          </button>
        </form>
      </div>
      <img
        className="h-80 "
        src="https://imgs.search.brave.com/E93sTD9x14xuueBPoi0-6jmK7koxZdDK0NYLSrIYmr8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naWZk/Yi5jb20vaW1hZ2Vz/L2hpZ2gvYW5pbWF0/ZWQtd2ludGVyLWRh/eXMtd2Fsa2luZy14/aXpkbjQyeGk5NXky/NjJlLmdpZg.gif"
        alt=""
      />
    </div>
  );
};

export default App;
