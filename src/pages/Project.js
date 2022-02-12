import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

function Box() {
  //   add gravity and physics
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 10, 0],
    args: [10, 10, 10],
  }));
  return (
    <mesh
      // move box up when clicked
      onClick={() => {
        api.velocity.set(0, 10, 0);
      }}
      ref={ref}
      position={[0, 10, 0]}
    >
      {/* 3D cube */}
      <boxBufferGeometry attach="geometry" args={[10, 10, 10]} />
      {/* Material of the cube */}
      <meshLambertMaterial attach="material" color="pink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    // rotate 90 degrees
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

function Project() {
  return (
    <Canvas>
      <Stars
        radius={200}
        depth={50}
        count={4000}
        factor={4}
        saturation={0}
        fade
      />
      <ambientLight intensiry={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      {/* Mouse controls (allows rotation, zoom in/out) */}
      <OrbitControls />
      <Physics>
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  );
}

export default Project;
