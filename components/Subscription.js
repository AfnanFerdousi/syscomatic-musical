import React from 'react';
import girl from "../public/assets/girl.png"
import LinearGradBtn from './Reusable/LinearGradBtn';

const Subscription = () => {
    return (
        <div className='px-20 mt-32 mx-auto' style={{ backgroundImage: `url(https://i.ibb.co/QQYP6fr/girl.png)`, backgroundRepeat: 'no-repeat', height: '400px', backgroundPosition: "cover" }}>
           <div className='p-5 pt-[5rem] flex flex-col justify-center'>
           <h2 className='text-2xl text-[#fff]'>Get started</h2>
            <p className='mt-4 mb-6'>Join the growing list of creatives who get<br/> their visions heard today</p>
            <LinearGradBtn text="Sign up now" />
           </div>
        </div>
    );
};

export default Subscription;
