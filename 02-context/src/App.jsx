import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetails from "./pages/Productdetails";

const App = () => {
 
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/product/:id" element={<Productdetails/>}/>
    </Routes>
  );
};

export default App;
