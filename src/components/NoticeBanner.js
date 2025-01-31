import React from 'react';

function NoticeBanner() {
  const handleButtonClick = () => {
    window.open('/NoticeForm', '_blank');
  
  };

  return (
  
    <div className='flex flex-col md:flex-row justify-center items-center md:gap-20 bg-[#74613C] bg-opacity-50'>
      
          <h2 className='text-xl md:text-2xl lg:text-3xl font-merriweather text-balance font-semibold text-white p-1'>
       For Complimentary Site Stay* <span className='text-lg font-thin text-black font-merriweather'>(T&C apply)</span>
      </h2>
      <button
        onClick={handleButtonClick}
        className='w-fit bg-white text-[#74613C] border-2 border-[#74613C] font-semibold md:text-xl font-merriweather m-3 py-1  md:p-2 md:px-14  px-8  rounded-2xl hover:bg-[#626462] hover:text-[#F5F3EF] hover:border-[#F5F3EF] hover:font-bold focus:outline-none'
      >
        Press
      </button>
      </div>
      
    
    
  );
}

export default NoticeBanner;
