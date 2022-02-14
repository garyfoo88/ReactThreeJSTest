import { useSpring } from "@react-spring/three";
import { softShadows, Loader, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Model from "../components/Three/chest";
import Floor from "../components/Three/floor";
import Lights from "../components/Three/lights";

softShadows();

// on load zoom effect
const ZoomWithOrbital = () => {
  const { gl, camera } = useThree();
  // camera moves from z:30 to z:4
  useSpring({
    from: {
      z: 30,
    },
    x: -5,
    y: 4,
    z: 4,
    // onFrame has been replaced with onChange
    onChange: (props) => {
      camera.position.x = props.value.x;
      camera.position.y = props.value.y;
      camera.position.z = props.value.z;
    },
  });
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
};

function Project3() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Canvas shadows camera={{ position: [-5, 4, 4], fov: 40 }}>
        <Lights />
        <Suspense fallback={null}>
          <Model open={open} setOpen={setOpen} />
          <Floor />
          <ZoomWithOrbital />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
}

export default Project3;
