import Marquee from 'react-fast-marquee';
import MarqueeComponent from '../MarqueeComponent/marquee';

export default function TrustSection() {
  return (
    <section className='flex min-h-screen w-screen flex-col justify-center py-10 text-white'>
      <div className='flex flex-col items-center gap-4 px-5'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BUILT ON TRUST
        </h1>
        <h3 className='text-center text-lg sm:text-xl lg:text-2xl'>
          <span className='text-grey'>
            At Aerius Labs, we&apos;re honoured to have earned the trust of{' '}
          </span>
          <span>countless of individuals and businesses worldwide</span>
        </h3>
      </div>
      <div className='h-[300px] overflow-hidden'>
        <div className='translate-y-28 -rotate-6'>
          <Marquee speed={100}>
            <MarqueeComponent />
          </Marquee>
        </div>
        <div className='translate-y-14 rotate-6'>
          <Marquee speed={100}>
            <MarqueeComponent />
          </Marquee>
        </div>
      </div>
    </section>
  );
}
