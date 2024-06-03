'use client';

import { useEffect } from 'react';
import AOS from 'aos';

import Image from 'next/image';

// import aos styles
import 'aos/dist/aos.css';

// for reference purposes
const animations = [
  `fade-up`,
  `fade-down`,
  `fade-left`,
  `fade-right`,
  `fade-up-right`,
  `fade-up-left`,
  `fade-down-right`,
  `fade-down-left`,
  `zoom-in`,
  `zoom-in-up`,
  `zoom-in-down`,
  `zoom-in-left`,
  `zoom-in-right`,
  `zoom-out`,
  `zoom-out-up`,
  `zoom-out-down`,
  `zoom-out-left`,
  `zoom-out-right`,
  `slide-up`,
  `slide-down`,
  `slide-right`,
  `slide-left`,
  `flip-left`,
  `flip-right`,
  `flip-up`,
  `flip-down`,
];

export default function TopSection() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <main className='relative flex min-h-screen flex-col items-center justify-center text-white'>
      <div className='absolute top-0 flex justify-center overflow-hidden'>
        <Image
          className='w-16 sm:w-20 lg:w-24'
          data-aos='slide-up'
          data-aos-delay='100'
          src='/images/logo.png'
          alt='logo_image'
          width={150}
          height={150}
        ></Image>
      </div>
      <div className='flex flex-wrap gap-4 text-5xl font-extrabold lg:gap-10 lg:text-9xl'>
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
            K
          </p>
          <p data-aos='slide-up' data-aos-delay='350'>
            N
          </p>
          <p data-aos='slide-up' data-aos-delay='400'>
            O
          </p>
          <p data-aos='slide-up' data-aos-delay='450'>
            W
          </p>
          <p data-aos='slide-up' data-aos-delay='500'>
            L
          </p>
          <p data-aos='slide-up' data-aos-delay='550'>
            E
          </p>
          <p data-aos='slide-up' data-aos-delay='600'>
            D
          </p>
          <p data-aos='slide-up' data-aos-delay='650'>
            G
          </p>
          <p data-aos='slide-up' data-aos-delay='700'>
            E
          </p>
        </div>
      </div>
      <div className='overflow-hidden'>
        <p
          className='sm:text-1xl py-4 text-center text-sm lg:py-8 lg:text-2xl'
          data-aos='slide-up'
          data-aos-delay='1000'
        >
          <span>Pioneering Invisible Integrity with </span>{' '}
          <span className='font-bold'>Zero Knowledge Proofs</span>
        </p>
      </div>
    </main>
  );
}
