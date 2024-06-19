import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import AstronautModel from '../3DModels/astronaut';

export default function AstronautScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        far: 1000,
        fov: 32.269,
        near: 0.1,
        position: [27.771, 8.578, 32.226],
        rotation: [0.046, 1.028, -0.039],
      }}
      className='h-full w-full'
    >
      <color attach='background' args={['#000']} />
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Environment preset='studio' />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
    </Canvas>
  );
}
