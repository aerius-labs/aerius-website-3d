'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/Scene/AstronautScene'), {
  ssr: false,
});

export default function AboutUsSection() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const vh50 = window.innerHeight * 0.5;
      observer.disconnect();
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          canvasRef.current!.style.position = 'fixed';
        } else {
          canvasRef.current!.style.position = 'absolute';
        }
      },
      {
        root: null,
        rootMargin: `0px 0px -${window.innerHeight}px 0px`,
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='relative flex w-screen flex-col items-end justify-center overflow-hidden text-white'
    >
      {/* Top line */}
      <div className='relative z-10 min-h-[110vh] w-screen overflow-hidden text-center'>
        <div className='absolute left-[15%] flex h-full justify-center md:left-[55%]'>
          <div className='absolute z-[5] h-full w-[2px] bg-white/50'></div>
          <div className='absolute bottom-[50px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            01
          </div>
        </div>
      </div>

      {/* Content */}
      <div id='About' className='z-10 px-5 lg:px-20'>
        <div className='gap-4 border border-white p-5 md:w-[60vw] lg:w-[50vw]'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold sm:text-left lg:text-3xl'>
            <span className='text-white/50'>FUTURE OF</span>{' '}
            <span>SECURE SYSTEMS</span>
          </h1>
          <p className='flex flex-col gap-5 pt-5 text-center text-xl leading-normal sm:text-left'>
            <span>
              Aerius Labs is where cryptography, blockchain, and zero-knowledge
              proofs (ZK) converge to shape the future of secure systems.
            </span>
            <span>
              Our team of experts specializes in cutting-edge technologies like
              Plonky2, Halo2, and Nova, bringing expertise to the realm of ZK
              proofs.
            </span>
            <span>
              With a relentless pursuit of innovation, we strive to build trust,
              privacy, and efficiency into every solution we create.
            </span>
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className='relative z-10 flex min-h-[130vh] w-screen overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full w-[35%]'>
          <Image
            className='hidden h-full w-[100%] object-cover lg:absolute lg:block'
            width={100}
            height={100}
            src='/Lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <Image
            className='absolute h-full w-[100%] scale-x-[-1] object-cover lg:hidden'
            width={100}
            height={100}
            src='/Lines/bottomLineForSmallS.svg'
            alt='bottomLineForSmallS_image'
          />
          <div className='absolute bottom-[50px] left-[-20px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            02
          </div>
        </div>
      </div>

      <div ref={canvasRef} className='left-0 right-0 top-0 h-screen w-full'>
        <Scene />
      </div>
    </section>
  );
}
