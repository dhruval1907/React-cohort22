import React from "react";
import image1 from "./assets/gif.gif";

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault();
    console.log("form submitted");
    
  }

  return (
    <div
      className="h-screen w-full  flex flex-col  p-5 relative"
      style={{ background: "linear-gradient(lightblue,darkblue) " }}
    >
      <div className="h-[10rem] w-full">
        <marquee behavior="scroll" direction="right">
          <img className="h-[10rem]" src={image1} alt="" />
        </marquee>
      </div>
      <div className="w-[40%] h-[80%]">
        <form onSubmit={(e)=>{
          // console.log(e);
          submitHandler(e)
          
        }} className="flex items-start p-5    h-full   flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Task "
            className="px-4 py-2 font-bold text-sm border-black  border-2 rounded  w-full outline-none   "
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Details"
            className="px-4 h-32 font-bold text-sm border-black  py-3  border-2 w-full rounded outline-none"
          ></textarea>
          <button className="px-3 py-2   w-full bg-blue-500 outline-none  text-black font-bold rounded">
            add note
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
