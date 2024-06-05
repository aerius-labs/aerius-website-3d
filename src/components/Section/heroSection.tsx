'use client';

import TopSection from './topSection';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import { Aerius3DModel } from '@/components/3DModels/aeriusLogo';

export default function HeroSection() {
  return (
    <>
      <TopSection />
      <div className='canvasContainer h-[100vh] w-[100vw]'>
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
          <ScrollControls pages={2} damping={0.5}>
            <Aerius3DModel scale={1} />
            <Environment preset='studio' />
          </ScrollControls>
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
    </>
  );
}
