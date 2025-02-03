import { HankenGrotesk, IBMPlexMono } from '@/fonts/fonts';
import { serviceItem } from '@/data/data';

export default function ServicesSection() {
  return (
    <section
      id='Services'
      className={`${HankenGrotesk.className} flex w-screen flex-col justify-center pt-6 text-white`}
    >
      {/* Heading */}
      <div className='flex flex-col items-center gap-4 px-5'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BOOST YOUR PRODUCTS
        </h1>
        <h3 className='text-center text-lg sm:text-xl lg:text-2xl'>
          <span className='text-white/50'>
            Enhance Your Brand&apos;s Potential with{' '}
          </span>
          <span className='hovering relative'>
            <span className='absolute z-40 h-full w-full bg-transparent'></span>
            Our Range of Product-Boosting Services
          </span>
        </h3>
      </div>

      {/* Grid */}
      <div className='grid gap-4 px-5 pt-10 lg:grid-cols-3 lg:px-20'>
        {serviceItem.map((item, index) => (
          <div key={index} className='border border-white p-5'>
            <h1 className='border-b-[1px] border-white pb-5 text-center text-3xl font-bold lg:text-3xl'>
              {item.title}
            </h1>
            <p
              className={`pt-5 ${IBMPlexMono.className} text-center text-xl leading-normal`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
