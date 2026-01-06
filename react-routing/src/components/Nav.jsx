import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <div className="h-20 w-full text-white flex items-center justify-between p-5  bg-gray-400">
        <h2 className="font-semibold text-2xl ">Sheryians</h2>  
        <div className="flex items-center gap-10 px-5">
          <Link className="font-semibold text-2xl cursor-pointer" to="/">Home</Link>
          <Link className="font-semibold text-2xl cursor-pointer" to="/about">About</Link>
          <Link className="font-semibold text-2xl cursor-pointer" to="/courses">Courses</Link>
          <Link className="font-semibold text-2xl cursor-pointer" to="/">Login</Link>
        </div>
      </div>
  );
};

export default Nav;
