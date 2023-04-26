import Image from 'next/image';
import React from 'react';

const ActionCards = ({ action }) => {
  return (
    <div className='bg-[#1E1E1E] rounded-md text-white font-normal text-[16px] relative
    before:w-full before:h-full before:scale-x-[1.01] before:scale-y-[1.04] before:absolute before:top-[50%] before:left-[50%] 
    before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
    before:from-[#2DF1E6] before:to-[#A660C3] before:bg-gradient-to-br
    before:rounded-md transition-all duration-300 px-[10px] text-center grid grid-rows-2 justify-center'>
      <div className='relative'>
        <Image
          src={action?.img}
          alt={action.title}
          className='mx-auto -mt-16'
        />
      </div>
      <h3 className='text-xl pt-2 pb-10'>{action.title}</h3>
    </div>
  );
};

export default ActionCards;
