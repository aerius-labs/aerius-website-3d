const MarqueeComponent = () => {
  const companies = [
    'Company1',
    'Company2',
    'Company3',
    'Company4',
    'Company5',
    'Company6',
  ];

  return (
    <div className='flex w-screen justify-around border-b-2 border-t-2 border-white bg-black'>
      {companies.map((company, index) => (
        <div key={index} className='p-4'>
          {company}
        </div>
      ))}
    </div>
  );
};

export default MarqueeComponent;
