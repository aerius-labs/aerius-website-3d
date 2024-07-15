import Marquee from 'react-fast-marquee';
import MarqueeComponent from '../marqueeComponent/marquee';
import { Akzidenzgroteskbe } from '@/fonts/fonts';

export default function TrustSection() {
  return (
    <section
      id='Trusted'
      className={`z-10 flex ${Akzidenzgroteskbe.className} w-screen flex-col justify-center pt-10 text-white`}
    >
      {/* Content */}
      <div className='flex flex-col items-center gap-4 px-5'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BUILT ON TRUST
        </h1>
        <h3 className='text-center text-lg sm:text-xl lg:text-2xl'>
          <span className='text-white/50'>
            At Aerius Labs, we&apos;re honoured to have earned the trust of{' '}
          </span>
          <span className='hovering'>
            countless of individuals and businesses worldwide
          </span>
        </h3>
      </div>
      <div className='h-[250px]  overflow-hidden 2xl:h-[350px]'>
        <div className='translate-y-28 -rotate-6 2xl:translate-y-36'>
          <Marquee speed={100}>
            <MarqueeComponent />
          </Marquee>
        </div>
        <div className='translate-y-10 rotate-6 2xl:translate-y-20'>
          <Marquee speed={150}>
            <MarqueeComponent />
          </Marquee>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='relative z-10 flex min-h-[70vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full'>
          <div className='absolute h-full w-[2px] bg-white/50'></div>
          <div className='absolute bottom-[50px] left-[-20px] z-10 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            05
          </div>
        </div>
      </div>
    </section>
  );
}
