import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Productdetails from "./components/Productdetails";
import Men from "./components/Men";
import Women from "./components/Women";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Products />}></Route>
        <Route path="/men" element={<Men />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </div>
  );
};

export default App;
