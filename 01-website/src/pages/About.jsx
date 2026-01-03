import React from "react";

const About = () => {
  return (
    <div className="h-[80%] w-full flex flex-col gap-10 items-center justify-center ">
      <h1 className="text-6xl text-red-900 nav h-30 nav2">About us </h1>
      <div className="flex w-[55%] h-[30%]  items-start justify-evenly font-sans">
        <div className="w-1/2 h-full flex flex-col gap-5 ">
          <p className="mt-2 text-white/70 w-[70%]">
           We are a contemporary fashion brand inspired by darkness, mystery, and self-expression. Our collections are crafted for individuals who reject the ordinary and embrace bold identity through design.
          </p>
          <p className="mt-2 text-white/70 w-[70%]">
            Every piece is created with attention to detail, premium materials, and a strong visual narrative ensuring your style speaks even before you do.
          </p>
        </div>
        <div className="w-1/2 h-full  ">
          <p className=" text-white/70 w-[80%]">
            Born from the spirit of the night, our brand is dedicated to creating fashion that thrives in the shadows. We design statement pieces inspired by gothic culture, modern streetwear, and the timeless allure of darkness. Each collection is thoughtfully crafted to balance bold visuals with everyday wearability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
