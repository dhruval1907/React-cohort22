import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Maccontaner from "./Maccontaner";

const App = () => {
  return (
    <div className="w-full h-screen ">
      <div className="absolute items-center flex flex-col gap-2 text-center text-white top-32 left-1/2 -translate-x-1/2 ">
        <h3 className="text-7xl font-semibold">macbook pro.</h3>
        <h5>Oh so pro !</h5>
        <p className="w-1/2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda exercitationem provident eaque omnis ab adipisci!</p>
      </div>
      <Canvas camera={{ fov: 35, position: [0, 0, 6] }}>
      <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* CONTROLS */}
        {/* <OrbitControls target={[0, 0, 0]} /> */}

        {/* ENVIRONMENT */}
        <Environment preset="studio" />

        <ScrollControls pages={3}>
          <Maccontaner />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
