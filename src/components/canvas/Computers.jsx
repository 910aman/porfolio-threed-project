/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/threeDScene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.75} groundColor='#fff' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, 0] : [0, -2.85, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size and set mobile state
    const checkMobileSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Initial check
    checkMobileSize();

    // Add event listener
    window.addEventListener('resize', checkMobileSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobileSize);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{
          position: isMobile ? [0, 3, 8] : [20, 3, 5],
          fov: isMobile ? 45 : 25
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
