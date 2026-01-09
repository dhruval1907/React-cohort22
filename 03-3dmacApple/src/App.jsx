import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Maccontaner from "./Maccontaner";

const App = () => {
  return (
    <Canvas camera={{ fov: 35, position: [0, 0, 6] }}>
      {/* LIGHTS */}
      {/* <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} /> */}

      {/* CONTROLS */}
      <OrbitControls target={[0, 0, 0]} />

      {/* ENVIRONMENT */}
      <Environment preset="studio" />

      <ScrollControls pages={3}>
        <Maccontaner />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
