import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Card from "./components/cards/Card";
import Info from "./components/numbers/Info";
import Sec3part1 from "./components/section3/Sec3part1";
import Secmain from "./components/section3/Secmain";
import Sec4main from "./components/section4/Sec4main";

const App = () => {
  return (
    <div class="h-screen w-full bg-black font-[verdana] text-white">
      <Navbar />
      <Hero />
      <Card />
      <Info />
      <Secmain/>
      <Sec4main/>
    </div>
  );
};

export default App;
