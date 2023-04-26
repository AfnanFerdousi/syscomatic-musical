import React from 'react';
import LinearGradBtn from './Reusable/LinearGradBtn';

const Subscription = () => {
    return (
        <div className='lg:md:mx-20 lg:md:mt-32 mx-10 mt-8 lg:md:text-start text-center' style={{ backgroundImage: `url(https://i.ibb.co/QQYP6fr/girl.png)`, backgroundRepeat: 'no-repeat', height: '400px', backgroundPosition: "cover" }}>
           <div className='lg:md:pl-12 pt-[5rem] flex flex-col justify-center '>
           <h2 className='text-2xl text-[#fff]'>Get started</h2>
            <p className='mt-4 mb-6'>Join the growing list of creatives who get<br/> their visions heard today</p>
           <div>
           <LinearGradBtn text="Sign up now" />
           </div>
           </div>
        </div>
    );
};

export default Subscription;
