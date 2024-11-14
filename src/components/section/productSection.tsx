import { Akzidenzgroteskbe, IBMPlexMono } from '@/fonts/fonts';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { productItem } from '@/data/data';

const Scene = dynamic(() => import('@/components/scene/satelliteScene'), {
  ssr: false,
});

export default function productItemection() {
  return (
    <section
      id='Products'
      className={`relative ${Akzidenzgroteskbe.className} flex w-screen flex-col justify-center text-white lg:items-start`}
    >
      {/* Top Line */}
      <div className='relative flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full w-[32%] lg:left-[18%]'>
          <Image
            className='hidden h-full w-[100%] object-cover lg:absolute lg:block'
            width={100}
            height={100}
            src='/lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <div className='absolute h-full w-[2px] bg-white/50 lg:hidden'></div>
          <div className='absolute bottom-[50px] left-[-20px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
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
        <div className='grid gap-4 pt-10 md:grid-rows-2'>
          {productItem.map((item, index) => (
            <div
              key={index}
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
                className={`${Akzidenzgroteskbe.className} basis-2/3 border-white md:border-l-[1px] md:pl-5`}
              >
                <h1 className='border-b-[1px] border-white pb-3 text-2xl font-extrabold uppercase'>
                  {item.title}
                </h1>
                <p
                  className={`${IBMPlexMono.className} pt-3 text-center text-base leading-normal sm:text-left`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Satellite Scene */}
      <div
        id='satelliteContainer'
        className='absolute left-0 right-0 top-0 -z-10 h-screen w-full brightness-100'
      >
        <Scene />
      </div>

      {/* Bottom Line */}
      <div className='relative flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute left-[50%] top-0 h-full lg:left-[19%] lg:w-[32%] 2xl:left-[20%]'>
          <Image
            className='hidden h-full w-[100%] scale-x-[-1] lg:absolute lg:block'
            width={100}
            height={100}
            src='/lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <div className='absolute h-full w-[2px] bg-white/50 lg:hidden'></div>
          <div className='absolute bottom-[50px] left-[90%] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            04
          </div>
        </div>
      </div>
    </section>
  );
}
