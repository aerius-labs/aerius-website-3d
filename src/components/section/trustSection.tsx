import { Akzidenzgroteskbe } from '@/fonts/fonts';
import Image from 'next/image';

const partnerLogos = [
  {
    id: 1,
    src: '/img1.png',
    link: 'https://partner1.com',
  },
  {
    id: 2,
    src: '/img2.png',
    link: 'https://partner2.com',
  },
  {
    id: 3,
    src: '/img3.png',
    link: 'https://partner3.com',
  },
  {
    id: 4,
    src: '/img4.png',
    link: 'https://partner4.com',
  },
  {
    id: 5,
    src: '/img5.png',
    link: 'https://partner5.com',
  },
  {
    id: 6,
    src: '/img6.png',
    link: 'https://partner6.com',
  },
  {
    id: 7,
    src: '/img7.png',
    link: 'https://partner7.com',
  },
  {
    id: 8,
    src: '/img8.png',
    link: 'https://partner8.com',
  },
  {
    id: 9,
    src: '/img9.png',
    link: 'https://partner9.com',
  },
  {
    id: 10,
    src: '/img5.png',
    link: 'https://partner5.com',
  },
  {
    id: 11,
    src: '/img6.png',
    link: 'https://partner6.com',
  },
  {
    id: 12,
    src: '/img7.png',
    link: 'https://partner7.com',
  },
  {
    id: 13,
    src: '/img8.png',
    link: 'https://partner8.com',
  },
  {
    id: 14,
    src: '/img9.png',
    link: 'https://partner9.com',
  },
  {
    id: 15,
    src: '/img9.png',
    link: 'https://partner9.com',
  },
];

export default function TrustSection() {
  return (
    <section
      id='Trusted'
      className={`flex ${Akzidenzgroteskbe.className} w-screen flex-col justify-center pt-10 text-white`}
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
          <span className='hovering relative'>
            <span className='absolute z-40 h-full w-full bg-transparent'></span>
            countless of individuals and businesses worldwide
          </span>
        </h3>
      </div>
      {/* Logo Grid */}
      <div className='relative z-10 flex min-h-[55vh] w-screen items-center justify-center overflow-hidden'>
        <div className='grid w-1/2 grid-cols-2 gap-20 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
          {partnerLogos.map(({ id, src, link }) => (
            <a
              key={id}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative w-full'
            >
              <div className='relative flex h-full w-full items-center justify-center'>
                <Image
                  src={
                    'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg'
                  }
                  alt={`Logo ${id}`}
                  width={100}
                  height={100}
                  className='scale-125 transition-transform duration-300 group-hover:scale-100'
                />
                {/* className='absolute hidden group-hover:block inset-0 z-10 h-full w-full overflow-visible group-hover:scale-90 transition-transform duration-300' */}
                <div className='absolute inset-0 z-10 hidden h-full w-full overflow-visible transition-transform duration-300 group-hover:block group-hover:scale-90'>
                  <svg
                    className='absolute left-0 top-0 h-full w-full'
                    viewBox='0 0 300 71'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.16797 71.0061V32.2932L32.4363 1.0249H150.061H267.689L298.957 32.2932V71.0061'
                      stroke='white'
                      strokeWidth='2'
                      className='translate-y-full transition-transform duration-500 group-hover:translate-y-0'
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className='relative z-10 flex min-h-[70vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full'>
          <div className='absolute h-full w-[2px] bg-white/50'></div>
          <div className='absolute bottom-[50px] left-[-20px] bg-black py-2 text-3xl font-bold text-white/50 md:text-4xl'>
            {partnerLogos.length}
          </div>
        </div>
      </div>
    </section>
  );
}
