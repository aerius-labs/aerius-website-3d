import Image from 'next/image';

export default function ProductSection() {
  return (
    <section
      id='Products'
      className='flex w-screen flex-col justify-center pt-6 text-white lg:items-start'
    >
      {/* Content */}
      <div className='px-5 md:w-[70vw] lg:w-[50vw] lg:px-20'>
        <div className='flex flex-col gap-4 text-center md:text-left'>
          <h1 className='text-2xl font-bold sm:text-3xl lg:text-5xl'>
            EMPOWER YOUR EXPERIENCES
          </h1>
          <h3 className='text-lg sm:text-xl lg:text-2xl'>
            <span className='text-white/50'>With our </span>
            <span>Innovative Product Solution</span>
          </h3>
        </div>
        <div className='grid gap-4 pt-10 md:grid-rows-2'>
          <div className='border border-white p-5 sm:flex sm:flex-row'>
            <div className='basis-1/3'>
              <Image
                src='/Images/athena_finance.png'
                width={200}
                height={200}
                alt='athenaFinance_image'
                className='h-full w-full object-cover pb-5 md:pr-5'
              />
            </div>
            <div className='basis-2/3 border-white md:border-l-[1px] md:pl-5'>
              <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
                Athena Finance
              </h1>
              <p className='pt-5 text-center text-xl leading-normal sm:text-left'>
                On-chain asset management for the Cosmos ecosystem, based on
                CosmWasm.
              </p>
            </div>
          </div>
          <div className='border border-white p-5 sm:flex sm:flex-row'>
            <div className='basis-1/3'>
              <Image
                src='/Images/zk_snap.png'
                width={200}
                height={200}
                alt='zkSnap_image'
                className='h-full w-full object-cover pb-5 md:pr-5'
              />
            </div>
            <div className='basis-2/3 border-white md:border-l-[1px] md:pl-5'>
              <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
                Zk Snap
              </h1>
              <p className='pt-5 text-center text-xl leading-normal sm:text-left'>
                Off-chain ballot privacy for DAOs, where voting is simple,
                anonymous, and user friendly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='relative flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute left-[50%] top-0 h-full lg:left-[18%] lg:w-[32%]'>
          <Image
            className='hidden h-full w-[100%] scale-x-[-1] object-cover lg:absolute lg:block'
            width={100}
            height={100}
            src='/Lines/bottomLineForLargeS.svg'
            alt='bottomLineForLargeS_image'
          />
          <div className='absolute z-[5] h-full w-[2px] bg-white/50 lg:hidden'></div>
          <div className='absolute bottom-[50px] right-[-20px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            04
          </div>
        </div>
      </div>
    </section>
  );
}
