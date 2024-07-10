import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import AstronautModel from '../3dModel/astronaut';

export default function AstronautScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <color attach='background' args={['#000']} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
    </Canvas>
  );
}
