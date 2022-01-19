import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "@react-three/fiber";
// Deai - R3F
import {
  softShadows,
  MeshWobbleMaterial,
  OrbitControls,
} from "@react-three/drei";

// Styles
import "./threeBackground.css";
// React Spring

function Circle() {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  const [arc, setArc] = useState(0);
  //   let arc = 1;
  useFrame((state, delta) => (ref.current.rotation.y += 0.004));

  return (
    <points
      ref={ref}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      position={[1, 0, 0]}
    >
      {/* <torusGeometry args={[4, 0.2, 16, 100]} /> */}
      <torusGeometry args={[5, 0.5, 20, 200]} />
      {/* <meshStandardMaterial color="#ff4a01" /> */}
      <pointsMaterial size={0.015} />
    </points>
  );
}

const ThreeBackground = () => {
  return (
    <div id="three-particles">
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        <Circle />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
