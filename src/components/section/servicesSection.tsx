'use client';
import Image from 'next/image';
import { Akzidenzgroteskbe, IBMPlexMono } from '@/fonts/fonts';

export default function ServicesSection() {
  const serviceItem = [
    {
      title: 'R&D',
      description: `Whether it is leveraging an anonymous network, ZKPs, MPC or any other privacy technique, we can assist your team in integrating these tools into your product's initial prototyping phase.`,
    },
    {
      title: 'Consulting',
      description: `We provide expert consulting by creating catered implementations for clients who want to integrate ZK or cryptography into their solutions, guiding organizations to unlock the potential of secure digital solutions.`,
    },
    {
      title: 'Auditing',
      description: `We offer thorough analysis and verification of zero-knowledge circuits and smart contracts for enhanced security and reliability.`,
    },
  ];

  return (
    <section
      id='Services'
      className={`${Akzidenzgroteskbe.className} flex w-screen flex-col justify-center pt-6 text-white`}
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
      <div className='grid gap-4 px-5 py-10 md:grid-cols-3 lg:px-20'>
        {serviceItem.map((item, index) => (
          <div key={index} className='border border-white p-5'>
            <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
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
