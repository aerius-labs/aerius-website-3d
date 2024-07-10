'use client';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import SatelliteModel from '../3dModel/satellite';

export default function SatelliteScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <color attach='background' args={['#000']} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <SatelliteModel />
      </Suspense>
    </Canvas>
  );
}
