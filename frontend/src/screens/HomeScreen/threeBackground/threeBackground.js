import React, { useRef, useState, useEffect } from "react";
//R3F
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
// Deai - R3F
// import { OrbitControls } from "@react-three/drei";

// Styles
import "./threeBackground.css";
// React Spring

// const CameraController = () => {
//   const { camera, gl } = useThree();
//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement);

//     controls.minDistance = 3;
//     controls.maxDistance = 20;
//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
//   return null;
// };

function Circle() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += 0.004));

  return (
    <points ref={ref} position={[1, 0, 0]}>
      <torusGeometry args={[5, 0.5, 20, 200]} />
      <pointsMaterial size={0.015} />
    </points>
  );
}

const ThreeBackground = () => {
  return (
    <div id="three-particles">
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        {/* <CameraController /> */}
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Circle />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
