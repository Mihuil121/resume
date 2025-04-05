"use client";
import React, { Suspense, useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei';
import model from '../../../../model/model.glb';

interface IDimensions {
  width: number;
  height: number;
}

interface ModelProps {
  onLoad?: () => void;
}

const Model: React.FC<ModelProps> = ({ onLoad }) => {
  const { scene } = useGLTF(model);
  
  useEffect(() => {
    if (onLoad) {
      onLoad();
    }
  }, [onLoad]);
  
  return (
    <primitive
      object={scene}
      scale={[2.7, 2.7, 2.7]}
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    />
  );
};

const LoadingFallback: React.FC = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="blue" wireframe />
  </mesh>
);

interface ThreeDModelProps {
  onLoad?: () => void;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({ onLoad }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<IDimensions>({ width: 0, height: 0 });
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const aspectRatio = 1;
        const height = containerWidth / aspectRatio;
        
        setDimensions({
          width: containerWidth,
          height: Math.min(height, 280)
        });
        
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleModelLoad = () => {
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '200px',
        maxHeight: '280px',
        position: 'relative' 
      }}
    >
      {isReady && dimensions.width > 50 && dimensions.height > 50 ? (
        <Canvas
          style={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: '12px'
          }}
          camera={{ position: [0, 0, 5], fov: 50 }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
          <ambientLight intensity={3} />
          <directionalLight position={[0, 5, 5]} intensity={1.5} />
          <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1.5} />
          <Suspense fallback={<LoadingFallback />}>
            <Model onLoad={handleModelLoad} />
          </Suspense>
          <OrbitControls 
            enableZoom={true}
            enablePan={true}
            autoRotate={true}
            autoRotateSpeed={2}
            minDistance={3}
            maxDistance={10}
          />
        </Canvas>
      ) : (
        <div style={{ width: '100%', height: '220px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <LoadingFallback />
        </div>
      )}
    </div>
  );
};

export default ThreeDModel;