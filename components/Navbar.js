import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../public/assets/logo.png';
import GradientBorderBtn from './Reusable/GradientBorderBtn';
import { BsChevronDown, BsList } from 'react-icons/bs';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const navitems = [
    {
      label: 'Create',
      child: ['Pop'],
    },
    {
      label: 'Stream',
      child: [],
    },
    {
      label: 'Shop',
      child: [],
    },
    {
      label: 'Pricing',
      child: [],
    },
    {
      label: 'Join',
      child: [],
    },
    {
      label: 'Contact',
      child: [],
    },
  ];

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='flex justify-around items-center pt-5'>
      <Image
        src={logo}
        alt='logo'
        className='w-[50px] h-[50px]'
      />
      <div className='hidden md:flex items-center'>
        {navitems.map((item) => (
          <span
            key={item.label}
            className='text-lg font-normal text-[#fff] hover:text-[#32E5EB] mx-2 cursor-pointer duration-300'>
            {item.child.length > 0 ? (
              <>
                <div className='flex items-center gap-x-2 '>
                  {item.label}
                  <BsChevronDown />
                </div>
              </>
            ) : (
              item.label
            )}
          </span>
        ))}
       
      </div>
      <div className='md:hidden'>
        <button
          onClick={handleMenuClick}
          className='flex items-center text-xl font-normal text-[#fff] hover:text-[#32E5EB] mx-2 cursor-pointer duration-300'>
          <BsList/>
        </button>
      </div>
      <div
        className={`${
          showMenu ? 'block' : 'hidden'
        } md:hidden absolute top-20 right-0 bg-[#1D1D1D] py-2 px-4 w-[80%] z-10`}>
        {navitems.map((item) => (
          <span
            key={item.label}
            className='block text-lg font-normal text-[#fff] hover:text-[#32E5EB] my-2 cursor-pointer duration-300'>
            {item.child.length > 0 ? (
              <>
                <div className='flex items-center gap-x-2 '>
                  {item.label}
                  <BsChevronDown />
                </div>
              </>
            ) : (
              item.label
            )}
          </span>
        ))}
        <div className='py-4'>
        <GradientBorderBtn btnText='Sign In/Sign Up' />
        </div>
      </div>
      <div className="lg:md:block hidden" >
      <GradientBorderBtn btnText='Sign In/Sign Up' />
      </div>
     
    </div>
  );
};

export default Navbar;
