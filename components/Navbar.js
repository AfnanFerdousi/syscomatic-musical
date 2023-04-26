import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/logo.png'
import GradientBorderBtn from './Reusable/GradientBorderBtn';
import { BsChevronDown } from 'react-icons/bs';

const Navbar = () => {
    const navitems = [
        {
            label: "Create",
            child: ["Pop"]
        },
        {
            label: "Stream",
            child: []
        },
        {
            label: "Shop",
            child: []
        },
        {
            label: "Pricing",
            child: []
        },
        {
            label: "Join",
            child: []
        },
        {
            label: "Contact",
            child: []
        }
    ];

    return (
        <div className='flex justify-around items-center pt-5'>
            <Image
                src={logo}
                alt="logo"
            />
            <div className='flex items-center'>
                {navitems.map((item) => (
                    <span key={item.label} className='text-lg font-normal text-[#fff] hover:text-[#32E5EB] mx-2 cursor-pointer duration-300'>
                        {item.child.length > 0 ? (
                            <>
                                <div className='flex items-center gap-x-2 '>{item.label}
                                <BsChevronDown /></div>
                            </>
                        ) : (
                            item.label
                        )}
                    </span>
                ))}
            </div>
            <GradientBorderBtn btnText="Sign In/Sign Up" />
        </div>
    );
};

export default Navbar;
