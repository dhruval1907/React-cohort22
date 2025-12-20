import React from "react";
import Logo from "./Logo";
import Links from "./Links";
import Button from "./Button";
const Navbar = () => {
  return (
    <div className="nav">
      <Logo />
      <Links />
      <Button />
    </div>
  );
};

export default Navbar;
