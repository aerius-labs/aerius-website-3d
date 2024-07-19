import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import AeriusLogoModel from '../3dModel/aeriusLogo';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function AstronautScene() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.4]}
      camera={{
        far: 1000,
        near: 0.1,
        fov: 32.269,
        position: [-0.078, 0.935, 11.351],
      }}
    >
      <pointLight intensity={800} color='#fff' position={[5, 10, 0]} />
      <Environment files={'./images/env.hdr'} />
      <AeriusLogoModel />
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}
