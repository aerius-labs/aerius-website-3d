export default function AboutUsSection() {
  return (
    <section className='flex min-h-screen w-screen flex-col items-end justify-center px-5 py-10 text-white lg:p-20'>
      <div className='gap-4 border-[1px] border-white p-5 md:w-[70vw] lg:w-[50vw]'>
        <h1 className='border-b-[1px] border-white pb-5 text-center text-2xl font-bold sm:text-left lg:text-3xl'>
          <span className='text-grey'>FUTURE OF</span>{' '}
          <span>SECURE SYSTEMS</span>
        </h1>
        <p className='flex flex-col gap-5 pt-5 text-center text-xl leading-normal sm:text-left'>
          <span>
            Aerius Labs is where cryptography, blockchain, and zero-knowledge
            proofs (ZK) converge to shape the future of secure systems.
          </span>
          <span>
            Our team of experts specializes in cutting-edge technologies like
            Plonky2, Halo2, and Nova, bringing expertise to the realm of ZK
            proofs.
          </span>
          <span>
            With a relentless pursuit of innovation, we strive to build trust,
            privacy, and efficiency into every solution we create.
          </span>
        </p>
      </div>
    </section>
  );
}
