import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-10 bg-blue-500  p-10 text-white font-semibold text-xl flex justify-between items-center ">
      <h2>Sheriyans</h2>
      <div className="flex items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/course">Course</Link>
      </div>
    </div>
  );
};

export default Nav;
