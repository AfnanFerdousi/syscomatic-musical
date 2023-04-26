import React from 'react';
import cloud from "../public/assets/cloud.png"
import music from "../public/assets/music.png"
import sound from "../public/assets/sound.png"
import ActionCards from './Reusable/ActionCards';

const CreateMusic = () => {
    const actions = [
        {
            title: "Upload Song",
            img: cloud
        },
        {
            title: "License Voice",
            img: music
        },
        {
            title: "Create Music",
            img: sound
        }
    ]
    return (
        <div className='px-20 pt-16 text-center'>
            <h2 className='text-[40px] font-bold text-[#fff] mb-4'>Create Music</h2>
            <p className='text-[16px] text-[#989898]'>Upload your song idea, license any voice in our catalog and let a<br/> professional perform your next hit.</p>

            <div className='grid grid-cols-3 gap-x-8 mt-28'>
                {actions.map((action) => (
                        <ActionCards action={action}/>                    
                ))}
            </div>
        </div>
    );
};

export default CreateMusic;