import React from 'react';
import Navbar from './Navbar';
import GradientBorderBtn from './Reusable/GradientBorderBtn';
import LinearGradBtn from './Reusable/LinearGradBtn';
import banner1 from '../public/assets/banner1.png'
import banner2 from '../public/assets/banner2.png'
import Image from 'next/image';

const Banner = () => {
    return (
        <div className=''>
            <div className='circle'></div>
            <Navbar />
            <div className='px-20 pt-16 flex justify-between'>
               <div>
               <span className='text-[3.5rem] font-bold leading-[4rem]'>The one tool you <br /> need to <span className=' bg-gradient-to-b from-teal-300 to-purple-600 text-transparent bg-clip-text'>make</span><br /> any demo</span>
                <p className='text-[16px] text-[#989898] mt-8'>Upload your song idea, license a voice and <br/>
                let our AI turn it into a hit</p>

               <div className='flex items-center gap-x-6 mt-12'>
               <GradientBorderBtn btnText="Try for free"/>
                <LinearGradBtn text="Create music"/>
               </div>
               </div>

               
               <div className='flex items-center gap-x-6'>
                <Image
                src={banner1}
                alt="banner1"
                />
                <Image
               style={{width: "260px", height: "320px"}}
                src={banner2}
                alt="banner2"
                />
               </div>
            </div>

        </div>

    );
};

export default Banner;