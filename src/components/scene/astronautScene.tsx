import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import AstronautModel from '../3dModel/astronaut';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function AstronautScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        far: 1000,
        near: 0.1,
        fov: 32.269,
        position: [27.771, 8.578, 32.226],
        rotation: [-3.096, -1.028, 0.039],
        scale: -1,
      }}
    >
      <color attach='background' args={['#000']} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
