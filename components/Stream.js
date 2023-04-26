import React from 'react';
import vidSqr from '../public/assets/vidSqr.png';
import borderSqr from '../public/assets/borderSqr.png';
import Image from 'next/image';
import GradientBorderBtn from './Reusable/GradientBorderBtn';
import LinearGradBtn from './Reusable/LinearGradBtn';

const Stream = () => {
    return (
        <div className='px-20 pt-32 relative grid grid-cols-2 items-center'>
            <div className="relative rounded-md " style={{ paddingTop: '56.25%' }}>
                <Image src={vidSqr} className="absolute top-[-15px] left-[-15px]" style={{ width: '10%' }} />
                <Image src={borderSqr} className="absolute bottom-[-1rem] right-[3.5rem] " style={{ width: '10%' }} />
                <iframe
                    className="absolute top-[.4rem] left-[.4rem] w-[85%] h-[95%] z-10"
                    src="https://www.youtube.com/embed/QjMJsQx_O7o"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <div className="before:absolute before:top-0 before:left-0 before:w-[87%] before:h-[98%] before:rounded-md before:bg-gradient-to-br from-[#2DF1E6] to-[#A660C3] z-[-2]"></div>
            </div>

            <div>
                <h2 className='text-[40px] font-bold text-[#fff] mb-4'>Share your <span className='bg-gradient-to-br from-[#2DF1E6] to-[#A660C3] text-transparent bg-clip-text'>Stream</span></h2>
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
