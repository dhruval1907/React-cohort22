import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import Maccontaner from './Maccontaner';
const App = () => {
  return (
    <Canvas camera={{fov :20 ,position :[0,-2,120]}}>
      <OrbitControls />
      <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr"]} />
      <mesh>
        <boxGeometry />
        <Maccontaner/>
      </mesh>
    </Canvas>
  )
}

export default App
