import React from "react";

const About = () => {
  return (
    <div className="h-[80%] w-full flex flex-col gap-10 items-center justify-center ">
      <h1 className="text-6xl text-red-900 nav h-30">About us </h1>
      <div className="flex w-[55%] h-[30%]  items-start justify-evenly">
        <div className="w-1/2 h-full flex flex-col gap-5 ">
          <p className="mt-2 text-white/70 w-[70%]">
            Lorem ipsum dolor sit amet, conse etsi ctetur adip- isicing elit,
            sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
            amet.
          </p>
          <p className="mt-2 text-white/70 w-[70%]">
            Lorem ipsum dolor sit amet, conse etsi ctetur adipisicing elit, sed
            do ei-sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
            sit amet.
          </p>
        </div>
        <div className="w-1/2 h-full  ">
          <p className=" text-white/70 w-[80%]">
            Lorem ipsum dolor sit amet, conse etsi ctetur adip- isicing elit,
            sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit, sed do. Lorem ipsum dolor sit
            amet, conse etsi ctetur adipisicing elit, sed do ei- usmod tempor
            incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit, sed do..
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
