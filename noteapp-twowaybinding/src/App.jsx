import React from "react";
import image1 from "./assets/gif.gif";

const App = () => {
  return (
    <div
      className="h-screen w-full  flex flex-col  p-5 relative"
      style={{ background: "linear-gradient(lightblue,darkblue) " }}
    >
      <div className="h-[10rem] w-full">
        <marquee behavior="" direction="left">
          <img className="h-[10rem]" src={image1} alt="" />
        </marquee>
      </div>
      <div className="w-[40%] h-[80%]">
        <form className="flex items-start p-5    h-full   flex-col gap-4">
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
    </div>
  );
};

export default App;
