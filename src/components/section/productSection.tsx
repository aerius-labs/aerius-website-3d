import { Akzidenzgroteskbe, IBMPlexMono } from '@/fonts/fonts';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/scene/satelliteScene'), {
  ssr: false,
});

export default function ProductSection() {
  const products = [
    {
      id: 1,
      imageSrc: '/images/athena_finance.png',
      imageAlt: 'athenaFinance_image',
      title: 'Athena Finance',
      description:
        'On-chain asset management for the Cosmos ecosystem, based on CosmWasm.',
    },
    {
      id: 2,
      imageSrc: '/images/zk_snap.png',
      imageAlt: 'zkSnap_image',
      title: 'Zk Snap',
      description:
        'Off-chain ballot privacy for DAOs, where voting is simple, anonymous, and user friendly.',
    },
  ];

  return (
    <section
      id='Products'
      className={`relative ${Akzidenzgroteskbe.className} flex w-screen flex-col justify-center text-white lg:items-start`}
    >
      {/* Top Line */}
      <div className='relative z-10 flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
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
          <h1 className='text-2xl font-bold sm:text-3xl lg:text-5xl'>
            EMPOWER YOUR EXPERIENCES
          </h1>
          <h3 className='text-lg sm:text-xl lg:text-2xl'>
            <span className='text-white/50'>With our </span>
            <span className='hovering relative'>
              <span className='absolute z-40 h-full w-full bg-transparent'></span>
              Innovative Product Solution
            </span>
          </h3>
        </div>
        <div className='grid gap-4 pt-10 md:grid-rows-2'>
          {products.map((item) => (
            <div
              key={item.id}
              className='border border-white p-5 sm:flex sm:flex-row'
            >
              <div className='basis-1/3'>
                <Image
                  src={item.imageSrc}
                  width={200}
                  height={200}
                  alt={item.imageAlt}
                  className='h-full w-full object-cover pb-5 md:pr-5'
                />
              </div>
              <div className='basis-2/3 border-white md:border-l-[1px] md:pl-5'>
                <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
                  {item.title}
                </h1>
                <p
                  className={`${IBMPlexMono.className} pt-5 text-center text-xl leading-normal sm:text-left`}
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
        className='absolute left-0 right-0 top-0 h-screen w-full brightness-100'
      >
        <Scene />
      </div>

      {/* Bottom Line */}
      <div className='relative z-10 flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute left-[50%] top-0 h-full lg:left-[18%] lg:w-[32%]'>
          <Image
            className='hidden h-full w-[100%] scale-x-[-1] object-cover lg:absolute lg:block'
            width={100}
            height={100}
            src='/lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <div className='absolute h-full w-[2px] bg-white/50 lg:hidden'></div>
          <div className='absolute bottom-[50px] right-[-20px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            04
          </div>
        </div>
      </div>
    </section>
  );
}
