import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Products from "./pages/Products";
const App = () => {
  return (
    <div className="text-white">
     <Nav/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
