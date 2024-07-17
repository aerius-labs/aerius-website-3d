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
      <pointLight
        intensity={1500}
        decay={2}
        color='#b8b6ff'
        position={[10, 20, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        intensity={100}
        decay={2}
        color='#fefffa'
        position={[0, 10, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight intensity={0.5} />
      <Environment files={'./images/env.hdr'} />
      <Suspense fallback={null}>
        <SatelliteModel />
      </Suspense>
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
