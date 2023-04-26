import React from 'react';
import vidSqr from '../public/assets/vidSqr.png';
import borderSqr from '../public/assets/borderSqr.png';
import Image from 'next/image';
import GradientBorderBtn from './Reusable/GradientBorderBtn';
import LinearGradBtn from './Reusable/LinearGradBtn';

const Stream = () => {
    return (
        <div className='lg:md:px-20 px-10  pt-8 lg:md:pt-32 relative grid lg:md:grid-cols-2 items-center'>
            <div className="relative rounded-md " style={{ paddingTop: '56.25%' }}>
                <Image src={vidSqr} className="lg:md:block hidden absolute top-[-15px] left-[-15px]" style={{ width: '10%' }} />
                <Image src={borderSqr} className="lg:md:block hidden absolute bottom-[-1rem] right-[3.5rem] " style={{ width: '10%' }} />
                <iframe
                    className="absolute top-[.4rem] left-[.4rem] lg:md:w-[85%] w-full lg:md:h-[95%] h-full z-10"
                    src="https://www.youtube.com/embed/QjMJsQx_O7o"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="lg:md:block hidden before:absolute before:top-0 before:left-0 before:w-[87%] before:h-[98%] before:rounded-md before:bg-gradient-to-br from-[#2DF1E6] to-[#A660C3] z-[-2]"></div>
            </div>

            <div>
                <h2 className='lg:md:text-[40px] text-[2.5rem] font-bold text-[#fff] mb-4 lg:md:mt-0 mt-4'>Share your <span className='bg-gradient-to-br from-[#2DF1E6] to-[#A660C3] text-transparent bg-clip-text'>Stream</span></h2>
                <p className='text-[16px] text-[#fff] mt-4'>What if you could have a team of highly skilled artificial intelligent music composers at your disposal to write a smash hit song?
                    <br />
                    <br />
                    Upload your song idea, license any voice in our catalog and let a professional perform your next hit.</p>

                <div className='flex gap-x-6 items-center mt-8'>
                    <GradientBorderBtn btnText="Learn more" />
                    <LinearGradBtn text="Try now" />

                </div>
            </div>
        </div>
    );
};

export default Stream;
