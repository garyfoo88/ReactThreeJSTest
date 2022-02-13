import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Model from "../components/Three/chest";
function Project3() {
  return (
    <Canvas shadows camera={{ position: [-5, 4, 4], fov: 40 }}>
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default Project3;
