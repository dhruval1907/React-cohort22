import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Courses from "./pages/Courses";
import {Home} from "./pages/Home";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<Courses />} />
      </Routes>
    </div>
  );
};

export default App;
