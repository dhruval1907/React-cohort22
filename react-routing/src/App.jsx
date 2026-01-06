import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Coursedetails from "./components/Coursedetails";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    <div className="h-screen w-full bg-zinc-500">
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />}>
          <Route path="/course/:id" element={<Coursedetails />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
