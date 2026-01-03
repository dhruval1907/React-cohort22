import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="p-5 flex items-center justify-between bg-black">
        <h2 className="bg-black">Sheriyans</h2>
        <div className="flex gap-10 px-5">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Contact</Link>
            <Link to="/product">product</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
