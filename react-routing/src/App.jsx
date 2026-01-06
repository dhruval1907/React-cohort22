import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Courses from "./components/Courses";
import Notfound from "./pages/Notfound";
import Coursedetails from "./components/Coursedetails";

const App = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Nav />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="/courses/:id" element={<Coursedetails />} />
        </Route>
      </Routes>

      {/* <Hero /> */}
      <Footer />
    </div>
  );
};

export default App;
