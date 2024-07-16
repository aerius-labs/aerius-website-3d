import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment } from '@react-three/drei';
import SatelliteModel from '../3dModel/satellite';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function SatelliteScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      camera={{
        far: 1000,
        near: 0.1,
        fov: 32.269,
        position: [-28.552, -15.162, 0.847],
        rotation: [-1.888, 0.938, -1.184],
        scale: -1,
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
        intensity={100}
        color='#fefffa'
        position={[-9.122, 20.686, -1.713]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Environment preset='night' />
      <Suspense fallback={null}>
        <SatelliteModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
