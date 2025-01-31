import { partnerLogos } from '@/data/data';
import { Akzidenzgroteskbe } from '@/fonts/fonts';
import Image from 'next/image';

export default function TrustSection() {
  return (
    <section
      id='Trusted'
      className={`flex ${Akzidenzgroteskbe.className} w-screen flex-col justify-center gap-10 pt-10 text-white`}
    >
      {/* Content */}
      <div className='flex flex-col items-center gap-4 px-5'>
        <h1 className='text-2xl font-bold lg:text-5xl'>BUILT ON TRUST</h1>
        <h3 className='text-center text-lg lg:text-2xl'>
          <span className='text-white/50'>
            At Aerius Labs, we&apos;re honoured to have earned the trust of{' '}
          </span>
          <span className='hovering relative'>
            <span className='absolute z-40 h-full w-full bg-transparent'></span>
            countless of individuals and businesses worldwide
          </span>
        </h3>
      </div>
      {/* Logo Grid */}
      <div className='relative z-10 flex w-screen justify-center overflow-hidden'>
        <div className='grid w-[1/2] grid-cols-2 gap-6 sm:grid-cols-3 md:gap-20 lg:grid-cols-4 xl:grid-cols-5'>
          {partnerLogos.map(({ id, src, link }) => (
            <a
              key={id}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative w-full p-4'
            >
              <div className='relative flex h-full w-full items-center justify-center'>
                <Image
                  src={src}
                  alt={`Logo ${id}`}
                  width={120}
                  height={120}
                  quality={90}
                  priority={id < 5}
                  className='ml-6 scale-125 transition-transform duration-300 group-hover:scale-100'
                />
                <div className='absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                  <svg
                    className='absolute left-0 top-0 w-full'
                    viewBox='0 0 200 20'
                    fill='none'
                  >
                    <path
                      d='M0,20 V10 L10,0 H190 L200,10 V20'
                      stroke='#ffffff'
                      strokeWidth='2'
                      className='origin-top translate-y-[-100%] transition-transform duration-500 group-hover:translate-y-0'
                    />
                  </svg>
                  <svg
                    className='absolute bottom-0 left-0 h-4 w-full'
                    viewBox='0 0 200 20'
                    fill='none'
                  >
                    <path
                      d='M0,0 V10 L10,20 H190 L200,10 V0'
                      stroke='#ffffff'
                      strokeWidth='2'
                      className='origin-bottom translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0'
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* className='absolute hidden group-hover:block inset-0 z-10 h-full w-full overflow-visible group-hover:scale-90 transition-transform duration-300' */}
      {/* Bottom Line */}
      <div className='relative flex min-h-[70vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full'>
          <div className='absolute h-full w-[2px] bg-white/50'></div>
          <div className='absolute bottom-[50px] left-[-20px] z-0 bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            05
          </div>
        </div>
      </div>
    </section>
  );
}
