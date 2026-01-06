import React from "react";

const Nav = () => {
  return (
      <div className="h-20 w-full text-white flex items-center justify-between p-5  bg-gray-400">
        <h2 className="font-semibold text-2xl ">Sheryians</h2>  
        <div className="flex items-center gap-10 px-5">
          <a className="font-semibold text-2xl cursor-pointer" href="">Home</a>
          <a className="font-semibold text-2xl cursor-pointer" href="">About</a>
          <a className="font-semibold text-2xl cursor-pointer" href="">Courses</a>
          <a className="font-semibold text-2xl cursor-pointer" href="">Login</a>
        </div>
      </div>
  );
};

export default Nav;
