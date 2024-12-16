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
      <hemisphereLight intensity={0.75} groundColor='#ffffff' color="#ffffff" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight
        intensity={1}
        position={[0, 5, 0]}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [0, -3, -1] : [0, -2.85, -1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Mobile detection function
    const checkMobileSize = () => {
      // More comprehensive mobile detection
      const mobileWidth = window.innerWidth <= 768;
      const mobileHeight = window.innerHeight <= 600;
      setIsMobile(mobileWidth || mobileHeight);
    };

    // Initial check
    checkMobileSize();

    // Add event listener
    window.addEventListener('resize', checkMobileSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkMobileSize);
  }, []);

  return (
    <div className="w-full h-full relative">
      <Canvas
        className="w-full h-full"
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{
          position: isMobile ? [0, 3, 8] : [20, 3, 5],
          fov: isMobile ? 45 : 25,
          near: 0.1,
          far: 1000
        }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true
        }}
      >
        {/* Error Boundary and Loader */}
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
