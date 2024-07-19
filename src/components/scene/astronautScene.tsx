import { Canvas } from '@react-three/fiber';
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
      <pointLight
        intensity={1500.653}
        decay={2}
        color='#b8b6ff'
        position={[-15, 22, 7.499]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <pointLight
        intensity={25}
        decay={2}
        color='#fefffa'
        position={[-9.122, 20.686, -1.713]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <ambientLight intensity={3} />
      <Environment files={'./images/env.hdr'} />
      <AstronautModel />
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
