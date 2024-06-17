import Link from 'next/link';

export default function OurWritingsSection() {
  return (
    <section className='relative flex w-screen flex-col items-center justify-center px-5 pb-40 pt-10 text-white lg:px-20'>
      {/* Content */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold sm:text-3xl lg:text-5xl'>
          Ready to Geek Out?
        </h1>
        <h3 className='pt-5 text-xl lg:text-2xl'>
          <span className='text-grey'>
            Discover tomorrow&apos;s trends today, explore our insights on{' '}
          </span>
          <span>Pioneering Technologies and Future Topics</span>
        </h3>
      </div>

      <div className='grid gap-5 pt-10 md:grid-cols-4 lg:pt-20'>
        <div className='flex flex-col items-center justify-center'>
          <div className='group flex cursor-pointer flex-col justify-between gap-20 border-[1px] p-5 md:gap-40'>
            <h1 className='text-xl font-bold lg:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              distinctio quo
            </h1>
            <div className='flex items-end justify-between gap-5'>
              <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='text-grey'>May 5, 2024</p>
              </div>
              <div className='flex h-[20px] w-[20px] items-center justify-center rounded-[50%] p-4 font-bold group-hover:-rotate-45 group-hover:bg-white group-hover:text-black'>
                →
              </div>
            </div>
          </div>
          {/* Bottom Line */}
          <div className='hidden h-[40vh] max-h-[400px] min-h-[250px] w-[2px] bg-grey md:block'></div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='group flex cursor-pointer flex-col justify-between gap-20 border-[1px] p-5 md:gap-40'>
            <h1 className='text-xl font-bold lg:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              distinctio quo
            </h1>
            <div className='flex items-end justify-between gap-5'>
              <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='text-grey'>May 5, 2024</p>
              </div>
              <div className='flex h-[20px] w-[20px] items-center justify-center rounded-[50%] p-4 font-bold group-hover:-rotate-45 group-hover:bg-white group-hover:text-black'>
                →
              </div>
            </div>
          </div>
          {/* Bottom Line */}
          <div className='hidden h-[40vh] max-h-[400px] min-h-[250px] w-[2px] bg-grey md:block'></div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='group flex cursor-pointer flex-col justify-between gap-20 border-[1px] p-5 md:gap-40'>
            <h1 className='text-xl font-bold lg:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              distinctio quo
            </h1>
            <div className='flex items-end justify-between gap-5'>
              <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='text-grey'>May 5, 2024</p>
              </div>
              <div className='flex h-[20px] w-[20px] items-center justify-center rounded-[50%] p-4 font-bold group-hover:-rotate-45 group-hover:bg-white group-hover:text-black'>
                →
              </div>
            </div>
          </div>
          {/* Bottom Line */}
          <div className='hidden h-[40vh] max-h-[400px] min-h-[250px] w-[2px] bg-grey md:block'></div>
        </div>

        <div className='flex flex-col items-center justify-center'>
          <div className='group flex cursor-pointer flex-col justify-between gap-20 border-[1px] p-5 md:gap-40'>
            <h1 className='text-xl font-bold lg:text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              distinctio quo
            </h1>
            <div className='flex items-end justify-between gap-5'>
              <div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='text-grey'>May 5, 2024</p>
              </div>
              <div className='flex h-[20px] w-[20px] items-center justify-center rounded-[50%] p-4 font-bold group-hover:-rotate-45 group-hover:bg-white group-hover:text-black'>
                →
              </div>
            </div>
          </div>
          {/* Bottom Line */}
          <div className='hidden h-[40vh] max-h-[400px] min-h-[250px] w-[2px] bg-grey md:block'></div>
        </div>
      </div>

      <Link
        href='#'
        className='group absolute bottom-[80px] z-[10] flex items-center justify-center gap-3 md:bottom-[240px] lg:bottom-[350px]'
      >
        <div className='flex h-[10px] w-[10px] items-center justify-center rounded-[50%] p-3 font-bold group-hover:-rotate-45 group-hover:bg-white group-hover:text-black'>
          →
        </div>
        <span className='text-base font-bold md:text-lg'>Explore more</span>
      </Link>
    </section>
  );
}
