import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import SatelliteModel from '../3dModel/satellite';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function SatelliteScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[0.7, 0.9]}
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
        intensity={2000}
        decay={2.1}
        color='#E5E4E2'
        position={[10, 20, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />

      <pointLight
        intensity={100}
        decay={2}
        color='#E5E4E2'
        position={[0, 10, -10]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Environment files={'/images/env.hdr'} />
      <SatelliteModel />
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
