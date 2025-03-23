import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import model from '../../../../model/model.glb';

const Model = () => {
  const { scene } = useGLTF(model);
  return <primitive object={scene} scale={[4, 4, 4]} position={[0, 0, 0]} rotation={[0, Math.PI / -1.5, 0]} />;
};

const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshStandardMaterial color="blue" wireframe />
  </mesh>
);

const ThreeDModel = () => (
  <Canvas style={{ width: '100%', height: '20rem' }}>
    <ambientLight intensity={3} />
    <directionalLight position={[0, 10, 0]} intensity={1} />
    <Suspense fallback={<LoadingFallback />}>
      <Model />
    </Suspense>
    <OrbitControls />
  </Canvas>
);

export default ThreeDModel;
