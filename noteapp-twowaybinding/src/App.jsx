import React from "react";
import image1 from "./assets/gif.gif";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div
      className="h-screen w-full  flex justify-between  p-5 relative"
      style={{ background: "linear-gradient(lightblue,darkblue) " }}
    >
      <div className="w-[40%] h-[80%] ">
        <div className="h-[10rem] w-full">
          <marquee behavior="scroll" direction="right">
            <img className="h-[15rem]" src={image1} alt="" />
          </marquee>
        </div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex  p-15  items-center   h-full   flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Enter Task "
            className="px-4 py-4 font-bold text-lg border-blue-200   border-2 rounded  w-full outline-none   "
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Details"
            className="px-4 h-32 font-bold text-lg border-blue-200   py-3  border-2 w-full rounded outline-none"
          ></textarea>
          <button className="px-10 py-2  bg-blue-500 outline-none  text-black font-bold rounded text-lg">
            add note
          </button>
        </form>
      </div>
      <div className="h-full p-5  w-1/2 bg-blue-400/20 rounded-2xl">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold ">Your Notes :</h1>
          
        </div>
      </div>
    </div>
  );
};

export default App;
