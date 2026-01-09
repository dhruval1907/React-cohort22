import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Maccontaner from "./Maccontaner";


const App = () => {
  return (
    <div className="app">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li>iPhone</li>
          <li>iPad</li>
          <li>Services</li>
          <li>iOS</li>
          <li>Mac</li>
          <li>Products</li>
        </ul>
      </nav>

      {/* HERO TEXT */}
      <div className="hero-text">
        <h1 className="gradient-text">macbook pro.</h1>
        <h3>Oh so pro !</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quo sit recusandae pariatur laborum.
        </p>
      </div>
;
      <Canvas camera={{ fov: 35, position: [0, 0, 6] }}>
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="studio" />

      {/* <OrbitControls target={[0, 0, 0]} /> */}

        <ScrollControls pages={3}>
          <Maccontaner />
        </ScrollControls>
      </Canvas>

    </div>
  );
};

export default App;
