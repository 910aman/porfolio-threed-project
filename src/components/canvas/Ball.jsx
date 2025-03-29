/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props?.imgUrl || "fallback-image-url"]); // Use fallback URL

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.5]} // Adjusted position
          rotation={[0, 0, 0]} // No unnecessary rotation
          scale={[0.8, 0.8, 0.8]} // Adjusted scale
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 5}} // Increased camera size
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
