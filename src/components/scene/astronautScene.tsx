import { Canvas, useLoader } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import AstronautModel from '../3dModel/astronaut';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function AstronautScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1.0, 1.2]}
      camera={{
        far: 1000,
        near: 0.1,
        fov: 32.269,
        position: [27.771, 8.578, 32.226],
        rotation: [-3.096, -1.028, 0.039],
        scale: -1,
      }}
    >
      {/* Focused beam light */}
      <spotLight
        intensity={800}
        position={[15, 25, 10]}
        angle={0.6}
        penumbra={0.5}
        distance={200}
        decay={2}
        color='#FFFFFF'
        castShadow
      />

      {/* Purple accent light */}
      <spotLight
        intensity={400}
        position={[-5, 15, 0]}
        angle={0.6}
        penumbra={0.8}
        distance={100}
        decay={2}
        color='#FFFFFF'
      />

      <ambientLight intensity={4} color='#FFFFFF' />

      <Environment
        files='/images/env.hdr'
        resolution={256}
        background={false}
      />
      <AstronautModel />
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
