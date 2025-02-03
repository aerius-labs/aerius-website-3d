import { Akzidenzgroteskbe, IBMPlexMono } from '@/fonts/fonts';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { productItem } from '@/data/data';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Scene = dynamic(() => import('@/components/scene/satelliteScene'), {
  ssr: false,
});

export default function ProductItemSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id='Products'
      className={`relative ${Akzidenzgroteskbe.className} flex w-screen flex-col justify-center text-white lg:items-start`}
    >
      {/* Top Line */}
      <div className='relative flex min-h-[150vh] w-screen items-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full w-[35%] md:left-[20%]'>
          <Image
            className='hidden h-full w-[100%] object-cover lg:absolute xl:block'
            width={100}
            height={100}
            src='/lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <div className='absolute h-full w-[2px] bg-white/50 xl:hidden'></div>
          <div className='absolute bottom-[50px] left-[-20px] z-0 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            03
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='px-5 pt-6 md:w-[70vw] lg:w-[50vw] lg:px-20'>
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-2xl font-bold lg:text-5xl'>
            EMPOWER YOUR EXPERIENCES
          </h1>
          <h3 className='text-lg lg:text-2xl'>
            <span className='text-white/50'>With our </span>
            <span className='hovering relative'>
              <span className='absolute z-40 h-full w-full bg-transparent'></span>
              Innovative Product Solution
            </span>
          </h3>
        </div>
        <div className='grid gap-4 pt-10 md:grid-rows-2 cursor-pointer'>
          {productItem.map((item, index) => (
            <div
              key={item.id}
              className='border border-white p-4 backdrop-blur-sm sm:flex sm:flex-row'
            >
              <div className='basis-1/3'>
                <Image
                  src={item.imageSrc}
                  width={200}
                  height={200}
                  alt={item.imageAlt}
                  className='h-full w-full object-contain pb-5 md:pr-5'
                />
              </div>
              <div
                className={`${Akzidenzgroteskbe.className} mt-2 basis-2/3 border-white md:border-l-[1px] md:pl-5`}
              >
                <h1 className='flex justify-center border-b-[1px] border-white pb-3 text-2xl font-extrabold uppercase md:justify-start'>
                  {item.title}
                </h1>
                <p
                  className={`${IBMPlexMono.className} pt-3 text-center text-base leading-normal sm:text-left`}
                >
                  {item.description}
                </p>
                <div className='flex items-center gap-4 py-3'>
                  {item.links.map((linkItem, index) => (
                    <div key={index} className='flex items-center gap-4'>
                      <Link 
                        href={linkItem.link} 
                        className='text-white hover:text-white/80 underline'
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={linkItem.icon}
                          className='w-5 h-5'
                          width={5}
                          height={5}
                          alt='social-icon'                    
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Satellite Scene */}
      <div
        id='satelliteContainer'
        className='absolute left-0 right-0 top-0 -z-10 hidden h-screen w-full brightness-100 md:block'
      >
        <Scene />
      </div>

      {/* Bottom Line */}
      <div className='relative flex min-h-[100vh] w-screen items-center justify-center overflow-hidden xl:min-h-[140vh]'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full w-[32%] lg:left-[18%]'>
          <div className='absolute h-full w-[2px] bg-white/30 lg:hidden'></div>
          <div className='hidden h-full w-full lg:block'>
            <Image
              className='hidden h-full w-[100%] scale-x-[-1] object-cover lg:block'
              width={100}
              height={100}
              src='/lines/bottomLineForLargeS.svg'
              alt='bottomLineForLargeS_image'
            />
          </div>
          <div
            className={`absolute bottom-[50px] z-0 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl
            ${!isMobile ? 'right-[-20px]' : 'left-[-20px]'}`}
          >
            04
          </div>
        </div>
      </div>
    </section>
  );
}
