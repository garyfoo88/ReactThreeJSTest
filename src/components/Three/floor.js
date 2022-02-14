import React from "react";

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      {/* geometry vs buffer geometry https://stackoverflow.com/questions/27198525/three-js-what-is-planebuffergeometry */}
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      {/* This material can receive shadows, but otherwise is completely transparent. */}
      <shadowMaterial attach="material" opacity={0.5} />
    </mesh>
  );
};

export default Floor;
