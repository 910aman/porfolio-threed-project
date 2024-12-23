/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/threeDScene.glb");

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='black' />
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
        scale={isMobile ? 0.55 : isTablet ? 0.7 : 0.75}  // Scale for mobile, tablet, and desktop
        position={isMobile ? [0, -4, 0] : isTablet ? [0, -3.4, 0] : [0, -3.25, -1]} // Adjust position based on screen size
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Define media queries for mobile and tablet
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial values of the `isMobile` and `isTablet` state variables
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define a callback function to handle changes to the media queries
    const handleMediaQueryChange = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    // Add the callback function as a listener for changes to the media queries
    mobileQuery.addEventListener("change", handleMediaQueryChange);
    tabletQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mobileQuery.removeEventListener("change", handleMediaQueryChange);
      tabletQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }} // Adjust camera for better zoom on smaller screens
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
