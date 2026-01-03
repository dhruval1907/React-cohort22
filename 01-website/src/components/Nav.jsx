import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav  text-white p-10 h-30 w-full flex items-center justify-center gap-10">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
