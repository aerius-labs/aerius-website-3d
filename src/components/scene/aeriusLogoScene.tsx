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
      <pointLight
        decay={2}
        intensity={1000}
        color='#b8b6ff'
        position={[17.563, 23.175, 7.499]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        decay={2}
        intensity={1000}
        color='#fefffa'
        position={[-9.122, 20.686, -1.713]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AeriusLogoModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
