import React from "react";

const Lights = () => {
  return (
    <>
      {/* Add fog of white color, nearest distance 0 and furthest distance 22 */}
      <fog attach="fog" args={["#fff", 0, 22]} />
      {/*
       * This light globally illuminates all objects in the scene equally.
       * This light cannot be used to cast shadows as it does not have a direction.
       */}
      <ambientLight intensity={0.4} />
      {/* 
        A light that gets emitted in a specific direction. 
        This light will behave as though it is infinitely far away and the rays produced from it are all parallel. 
        The common use case for this is to simulate daylight; 
        the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel. 
      */}
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-Width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* 
        A light that gets emitted from a single point in all directions. 
        A common use case for this is to replicate the light emitted from a bare lightbulb. 
      */}
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
};

export default Lights;
