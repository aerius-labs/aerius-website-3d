import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import AeriusLogoModel from '../3dModel/aeriusLogo';

export default function AstronautScene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <color attach='background' args={['#000']} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AeriusLogoModel />
      </Suspense>
    </Canvas>
  );
}
