"use client";
import React, { Suspense, useRef, useLayoutEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import model from '../../../../model/model.glb';

interface IDimensions {
  width: number;
  height: number;
}

const Model: React.FC = () => {
  const { scene } = useGLTF(model);
  return (
    <primitive
      object={scene}
      scale={[4, 4, 4]}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 1.5, 0]}
    />
  );
};

const LoadingFallback: React.FC = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="blue" wireframe />
  </mesh>
);

const ThreeDModel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<IDimensions>({ width: 300, height: 320 });

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const aspectRatio = 4 / 3;
        const height = containerWidth / aspectRatio;
        setDimensions({
          width: containerWidth,
          height: Math.min(height, 400)
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', minHeight: '25px', position: 'relative' }}
    >
      <Canvas
        style={{
          width: dimensions.width,
          height: dimensions.height,
          borderRadius: '12px'
        }}
      >
        <ambientLight intensity={3} />
        <directionalLight position={[0, 10, 0]} intensity={1} />
        <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} />
        <Suspense fallback={<LoadingFallback />}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
