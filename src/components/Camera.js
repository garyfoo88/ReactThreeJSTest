import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

const Camera = (props) => {
  const cameraRef = useRef();
  const { set } = useThree();

  useEffect(() => {
    set({ camera: cameraRef.current });
  }, []);

  return <perspectiveCamera ref={cameraRef} {...props} />;
};

export default Camera;
