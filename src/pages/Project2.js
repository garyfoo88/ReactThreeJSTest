import { useSpring, a } from "@react-spring/three";
import {
  MeshWobbleMaterial,
  OrbitControls,
  softShadows,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";

softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  const [expand, setExpand] = useState(false);
  //use ref to target the mesh
  const mesh = useRef();
  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  //React spring expand animation
  const props = useSpring({ scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1] });
  const look = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <a.mesh
      castShadow
      scale={props.scale}
      onClick={() => setExpand(!expand)}
      position={position}
      ref={mesh}
    >
      {console.log(look)}
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach="material"
        factor={0.5}
      />
    </a.mesh>
  );
};

function Project2() {
  return (
    <Canvas
      linear
      shadows
      camera={{ position: [-5, 2, 10], fov: 60 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-10, 0, -20]} intensity={0.5} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <group>
        <mesh
          receiveShadow
          position={[0, -3, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeBufferGeometry attach="geometry" args={[100, 100]} />
          <shadowMaterial attach="material" opacity={0.5} />
        </mesh>
        <SpinningMesh
          position={[0, 1, 0]}
          color="red"
          args={[3, 2, 1]}
          speed={2}
        />
        <SpinningMesh position={[-2, 1, -5]} color="green" speed={6} />
        <SpinningMesh position={[5, 1, -2]} color="blue" speed={6} />
      </group>

      <OrbitControls />
    </Canvas>
  );
}

export default Project2;
