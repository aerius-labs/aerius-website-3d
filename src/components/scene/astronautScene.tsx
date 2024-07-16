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
      {/* <directionalLight position={[30, 10, -30]} intensity={15} color={'#900193'}/> */}
      <pointLight
        decay={2}
        intensity={10000}
        color='#b8b6ff'
        position={[17.563, 23.175, 7.499]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        decay={2}
        intensity={100}
        color='#fefffa'
        position={[-9.122, 20.686, -1.713]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <AstronautModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
