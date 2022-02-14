import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Vector3 } from "three";
import Camera from "../components/Camera";

const Project4 = () => {
  return (
    <Canvas>
      <Camera fov={50} />
      <Sky sunPosition={new Vector3(100, 10, 100)} />
      <ambientLight intensity={0.3} />
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
      <Physics></Physics>
    </Canvas>
  );
};

export default Project4;
