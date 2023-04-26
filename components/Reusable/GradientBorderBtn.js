import React from 'react';

const GradientBorderBtn = ({btnText}) => {
    return (
        <button className='w-[135px] h-[40px] bg-[#1E1E1E] rounded-md text-white font-normal text-[16px] relative
        before:w-full before:h-full before:scale-x-[1.05] before:scale-y-[1.1] before:absolute before:top-[50%] before:left-[50%] 
        before:-z-10 before:translate-x-[-50%] before:translate-y-[-50%] 
        before:from-[#2DF1E6] before:to-[#A660C3] before:bg-gradient-to-br
        before:rounded-md hover:bg-[#190F33] transition-all duration-300 px-[10px]
    '>
        {btnText}
    </button>
    
    );
};

export default GradientBorderBtn;