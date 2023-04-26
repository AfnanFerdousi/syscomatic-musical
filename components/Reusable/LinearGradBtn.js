import React from 'react';

const LinearGradBtn = ({ btnText }) => {
  return (
    <button className="w-[135px] h-[45px] rounded-md before:content-'' before:absolute before:inset-0 before:rounded-md bg-gradient-to-b from-[#23AFB7] to-[#169AA4] hover:bg-[#190F33] transition-all duration-300 px-[10px]">
      {btnText}
    </button>
  );
};

export default LinearGradBtn;
