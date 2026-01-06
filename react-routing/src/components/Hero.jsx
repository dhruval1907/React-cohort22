import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  function btnCliked() {
    navigate(-1)
  }
  function next() {
    navigate("/course")
  }

  return (
    <div className="h-[89.5%] w-full bg-zinc-400">
      <h1 className="text-3xl  text-center p-5 font-bold text-white">
        This is a Home page
      </h1>
      <button
        onClick={btnCliked}
        className="px-10 py-3 bg-blue-500 rounded-xl border-none text-white font-semibold"
      >
        Clike me
      </button>
      <button
        onClick={next}
        className="px-10 py-3 bg-blue-500 rounded-xl border-none text-white font-semibold"
      >
        Next page
      </button>
    </div>
  );
};

export default Hero;
