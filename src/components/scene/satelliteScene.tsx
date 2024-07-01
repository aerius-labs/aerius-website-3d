'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import SatelliteModel from '../3dModel/satellite';

export default function SatelliteScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        far: 1000,
        fov: 32.269,
        near: 0.1,
        position: [-28.552, -15.162, 0.847],
        rotation: [1.253, -0.938, 1.184],
      }}
    >
      <color attach='background' args={['#000']} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <SatelliteModel />
      </Suspense>
    </Canvas>
  );
}
