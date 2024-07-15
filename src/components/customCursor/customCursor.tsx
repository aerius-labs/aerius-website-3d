const CustomCursor = () => {
  return (
    <>
      <div className='cursor fixed top-0 z-50 h-3 w-3 rounded-[50%] border-2 border-black'></div>
      <div className='cursorFollower fixed top-0 z-40 h-4 w-4 rounded-[50%] bg-white'></div>
    </>
  );
};

export default CustomCursor;
