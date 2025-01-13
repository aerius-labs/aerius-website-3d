import { Canvas } from '@react-three/fiber';
import { Environment, Lightformer } from '@react-three/drei';
import AeriusLogoModel from '../3dModel/aeriusLogo';
import AdjustCamera from '@/helpers/handleCameraFOV';

export default function AeriusScene() {
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
      <pointLight intensity={400} color="#fff" position={[5, 10, 0]} />
      <pointLight intensity={200} color="#b0a2ff" position={[-5, -10, 0]} />
      <spotLight
        intensity={300}
        angle={0.5}
        penumbra={1}
        position={[10, 10, 10]}
        castShadow
      />
      <Environment files={'./images/env.hdr'}>
        <Lightformer
          position={[-5, 2, -1]}
          scale={[10, 2, 1]}
          intensity={4}
          color="#ff9f50"
        />
        <Lightformer
          position={[5, 0, -5]}
          scale={[10, 2, 1]}
          intensity={4}
          color="#9f50ff"
        />
      </Environment>
      <AeriusLogoModel />
      <AdjustCamera mobileFov={50} desktopFov={32} aspectRatio={16 / 9} />
    </Canvas>
  );
}