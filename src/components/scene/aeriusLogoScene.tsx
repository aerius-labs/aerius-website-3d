import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import AeriusLogoModel from '../3dModel/aeriusLogo';
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
        position: [-0.078, 0.935, 11.351],
      }}
    >
      <color attach='background' args={['#000']} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AeriusLogoModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
