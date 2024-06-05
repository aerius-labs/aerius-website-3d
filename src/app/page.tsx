'use client';

import ServicesSection from '@/components/Section/servicesSection';
import TrustSection from '@/components/Section/trustSection';
import ProductSection from '@/components/Section/productSection';
import AboutUsSection from '@/components/Section/aboutUsSection';
import OurWritingsSection from '@/components/Section/ourWritingsSection';
import TopSection from '@/components/Section/topSection';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import { Aerius3DModel } from '@/components/3DModels/aeriusLogo';

export default function Home() {
  return (
    <main className='overflow-x flex flex-col items-center justify-between bg-black'>
      <TopSection />
      <div className='h-[100vh] w-[100vw]'>
        <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
          <ScrollControls pages={2}>
            <Aerius3DModel />
            <Environment preset='studio' />
          </ScrollControls>
          <ambientLight intensity={0.5} />
        </Canvas>
      </div>
      <AboutUsSection />
      <ServicesSection />
      <ProductSection />
      <TrustSection />
      <OurWritingsSection />
    </main>
  );
}
