import Image from 'next/image';

export default function ProductSection() {
  return (
    <main className='flex min-h-screen w-screen flex-col justify-center py-10 text-white lg:items-start'>
      <div className='md:w-[70vw] lg:w-[50vw]'>
        <div className='flex flex-col items-center gap-4 px-10 md:items-start'>
          <h1 className='text-2xl font-bold sm:text-3xl lg:text-5xl'>
            EMPOWER YOUR EXPERIENCES
          </h1>
          <h3 className='sm:text-1xl text-lg lg:text-2xl'>
            <span>With our </span>
            <span className='font-bold'>Innovative Product Solution</span>
          </h3>
        </div>
        <div className='grid gap-4 p-10 md:grid-rows-2'>
          <div className='border-[1px] border-white p-5 sm:flex sm:flex-row'>
            <div className='basis-1/3'>
              <Image
                src='/images/athena_finance.png'
                width={200}
                height={200}
                alt='Zk_Snap'
                className='h-full w-full object-cover pb-5 md:pr-5'
              ></Image>
            </div>
            <div className='basis-2/3 border-white md:border-l-[1px] md:pl-5'>
              <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
                Athena Finance
              </h1>
              <p className='text-1xl pt-5 text-center leading-normal sm:text-left'>
                On-chain asset management for the Cosmos ecosystem, based on
                CosmWasm.
              </p>
            </div>
          </div>
          <div className='border-[1px] border-white p-5 sm:flex sm:flex-row'>
            <div className='basis-1/3'>
              <Image
                src='/images/zk_snap.png'
                width={200}
                height={200}
                alt='Zk_Snap'
                className='h-full w-full object-cover pb-5 md:pr-5'
              ></Image>
            </div>
            <div className='basis-2/3 border-white md:border-l-[1px] md:pl-5'>
              <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
                Zk Snap
              </h1>
              <p className='text-1xl pt-5 text-center leading-normal sm:text-left'>
                Off-chain ballot privacy for DAOs, where voting is simple,
                anonymous, and user friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
