import React from 'react';

const LinearGradBtn = ({ text }) => {
  return (
    <button className="w-[135px] h-[45px] rounded-md bg-gradient-to-b from-[#23AFB7] to-[#169AA4] hover:bg-[#190F33] transition-all duration-300 px-[10px] hover:from-[#169AA4] hover:to-[#23AFB7] ">
      {text}
    </button>
  );
};

export default LinearGradBtn;
