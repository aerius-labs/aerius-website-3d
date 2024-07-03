'use client';

import TopSection from './topSection';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { useProgress, Html, Environment, Center } from '@react-three/drei';
import Aerius3DModel from '@/components/3DModels/aeriusLogo';

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function HeroSection() {
  return (
    <>
      <TopSection />
      <div className='relative flex h-screen w-screen items-center justify-center'>
        <Canvas
          gl={{ antialias: true }}
          dpr={[1, 1.5]}
          camera={{ fov: 70, position: [0, 0, 5] }}
          className='h-screen w-screen'
        >
          <color attach='background' args={['#000']} />
          <directionalLight position={[-5, -5, 5]} intensity={4} />
          <Environment preset='studio' />
          <Suspense fallback={<Loader />}>
            <Center>
              <Aerius3DModel />
            </Center>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}