export default function ServicesSection() {
  return (
    <main className='flex min-h-screen w-screen flex-col justify-center py-10 text-white'>
      <div className='flex flex-col items-center gap-4 px-10'>
        <h1 className='text-2xl font-bold sm:text-4xl lg:text-6xl'>
          BOOST YOUR PRODUCTS
        </h1>
        <h3 className='sm:text-1xl text-center text-lg lg:text-2xl'>
          <span>Enhance Your Brand&apos;s Potential with Our </span>
          <span>Range of Product-Boosting Services</span>
        </h3>
      </div>
      <div className='grid gap-4 px-10 py-10 md:grid-cols-3 lg:p-20'>
        <div className='border-[1px] border-white p-5'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
            R&D
          </h1>
          <p className='text-1xl pt-5 text-center leading-normal'>
            Whether it is leveraging an anonymous network, ZKPs, MPC or any
            other privacy technique, we can assist your team in integrating
            these tools into your product&apos;s initial prototyping phase.
          </p>
        </div>
        <div className='border-[1px] border-white p-5'>
          <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold lg:text-3xl'>
            Consulting
          </h1>
          <p className='text-1xl pt-5 text-center leading-normal'>
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
          <p className='text-1xl pt-5 text-center leading-normal'>
            We offer thorough analysis and verification of zero-knowledge
            circuits and smart contracts for enhanced security and reliability.
          </p>
        </div>
      </div>
    </main>
  );
}
