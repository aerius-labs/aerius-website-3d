import Marquee from 'react-fast-marquee';
import MarqueeComponent from '../MarqueeComponent/marquee';

export default function TrustSection() {
  return (
    <main className='flex min-h-screen w-screen flex-col justify-center py-10 text-white'>
      <div className='flex flex-col items-center gap-4 px-10'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BUILT ON TRUST
        </h1>
        <h3 className='sm:text-1xl text-center text-lg lg:text-2xl'>
          <span>
            At Aerius Labs, we’re honoured to have earned the trust of{' '}
          </span>
          <span>countless of individuals and businesses worldwide</span>
        </h3>
      </div>
      <div className='h-[50vh] overflow-hidden'>
        <div className='translate-y-36 -rotate-6'>
          <Marquee speed={100}>
            <MarqueeComponent />
          </Marquee>
        </div>
        <div className='translate-y-24 rotate-6'>
          <Marquee speed={100}>
            <MarqueeComponent />
          </Marquee>
        </div>
      </div>
    </main>
  );
}
