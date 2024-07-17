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
      <directionalLight
        position={[30, 10, -30]}
        intensity={10}
        color={'#900193'}
      />
      <pointLight intensity={3000} color='#b8b6ff' position={[20, 30, -20]} />
      <pointLight intensity={2000} color='#fefffa' position={[10, 10, -20]} />
      <pointLight intensity={2000} color='#800080' position={[10, 10, -20]} />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
