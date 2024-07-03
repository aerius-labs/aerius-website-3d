'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';

import Image from 'next/image';
import Loader from '@/components/Loader/loader';

// import aos styles
import 'aos/dist/aos.css';

export default function TopSection() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating the loader completion
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    AOS.init({
      duration: 700,
      once: false,
      offset: 100,
    });

    return () => clearTimeout(loaderTimeout);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center text-white'>
      <div className='absolute top-0 flex justify-center overflow-hidden'>
        <Image
          className='w-10 sm:w-12 lg:w-16'
          data-aos='slide-up'
          data-aos-delay='100'
          src='/images/logo.png'
          alt='aeriusLogo_image'
          width={150}
          height={150}
        />
      </div>
      <div className='flex flex-wrap gap-0 text-7xl font-extrabold lg:gap-10 lg:text-[150px]'>
        <div className='mx-auto flex flex-row flex-nowrap overflow-hidden'>
          <p data-aos='slide-up' data-aos-delay='100'>
            Z
          </p>
          <p data-aos='slide-up' data-aos-delay='150'>
            E
          </p>
          <p data-aos='slide-up' data-aos-delay='200'>
            R
          </p>
          <p data-aos='slide-up' data-aos-delay='250'>
            O
          </p>
        </div>
        <div className='mx-auto flex flex-row flex-nowrap overflow-hidden'>
          <p data-aos='slide-up' data-aos-delay='300'>
            U
          </p>
          <p data-aos='slide-up' data-aos-delay='350'>
            N
          </p>
          <p data-aos='slide-up' data-aos-delay='400'>
            S
          </p>
          <p data-aos='slide-up' data-aos-delay='450'>
            E
          </p>
          <p data-aos='slide-up' data-aos-delay='500'>
            E
          </p>
          <p data-aos='slide-up' data-aos-delay='550'>
            N
          </p>
        </div>
      </div>
      <div className='overflow-hidden'>
        <p
          className='py-4 text-center text-sm sm:text-xl lg:py-8 lg:text-2xl'
          data-aos='slide-up'
          data-aos-delay='1000'
        >
          <span className='text-white/50'>
            Pioneering Invisible Integrity with{' '}
          </span>{' '}
          <span>Zero Knowledge Proofs</span>
        </p>
      </div>
    </section>
  );
}
