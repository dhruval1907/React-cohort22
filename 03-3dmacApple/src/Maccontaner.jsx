import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
const Maccontaner = () => {
  let model = useGLTF("./mac.glb");
  let meshes = {};
  let tex = useTexture("./red.jpg")

  model.scene.traverse((e) => {
    meshes[e.name] = e;
  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  let data = useScroll();

  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90));
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default Maccontaner;
