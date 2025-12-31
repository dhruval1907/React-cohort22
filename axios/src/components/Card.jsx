import React from "react";

const Card = () => {
  return (
    <div className="h-120 w-100 bg-red-500 rounded-2xl">
      <div className="h-full w-full overflow-hidden relative z-[2]">
        <img
          className="absolute  h-full w-full object-cover object-left rounded-2xl"
          src="https://images.unsplash.com/3/man-fishing.JPG?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="text-white p-5 absolute z-[3] bg-black/10 h-full w-full">
          <h1 className="font-semibold text-5xl">01.</h1>
          <h4 className="font-bold text-5xl mt-4 leading-[3rem]">
            Dhruval <br /> Dalwadi
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
