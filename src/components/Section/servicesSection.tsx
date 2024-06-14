import Image from 'next/image';

export default function ServicesSection() {
  return (
    <section className='flex w-screen flex-col justify-center py-6 text-white'>
      {/* Heading */}
      <div className='flex flex-col items-center gap-4 px-5'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BOOST YOUR PRODUCTS
        </h1>
        <h3 className='text-center text-lg sm:text-xl lg:text-2xl'>
          <span className='text-grey'>
            Enhance Your Brand&apos;s Potential with{' '}
          </span>
          <span>Our Range of Product-Boosting Services</span>
        </h3>
      </div>

      {/* Grid */}
      <div className='grid gap-4 px-5 py-10 md:grid-cols-3 lg:p-20'>
        <div className='border-[1px] border-white p-5'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
            R&D
          </h1>
          <p className='pt-5 text-center text-xl leading-normal'>
            Whether it is leveraging an anonymous network, ZKPs, MPC or any
            other privacy technique, we can assist your team in integrating
            these tools into your product&apos;s initial prototyping phase.
          </p>
        </div>
        <div className='border-[1px] border-white p-5'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
            Consulting
          </h1>
          <p className='pt-5 text-center text-xl leading-normal'>
            We provide expert consulting by creating catered implementations for
            clients who want to integrate ZK or cryptography into their
            solutions, guiding organizations to unlock the potential of secure
            digital solutions.
          </p>
        </div>
        <div className='border-[1px] border-white p-5'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
            Auditing
          </h1>
          <p className='pt-5 text-center text-xl leading-normal'>
            We offer thorough analysis and verification of zero-knowledge
            circuits and smart contracts for enhanced security and reliability.
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className='relative flex min-h-[150vh] w-screen items-center justify-center overflow-hidden'>
        <div className='absolute bottom-0 left-[50%] top-0 h-full w-[32%] lg:left-[18%]'>
          <Image
            className='hidden h-full w-[100%] object-cover lg:absolute lg:block'
            width={100}
            height={100}
            src='/Lines/gMobileB01Line.svg'
            alt='sds'
          />
          <div className='absolute z-[5] h-full w-[2px] bg-grey lg:hidden'></div>
          <div className='absolute bottom-[50px] left-[-20px] z-10 bg-black py-2 text-3xl font-bold text-grey md:text-4xl'>
            03
          </div>
        </div>
      </div>
    </section>
  );
}
