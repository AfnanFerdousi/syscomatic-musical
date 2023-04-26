import Image from 'next/image';
import React from 'react';

const SongCard = ({song}) => {
    return (
        <div className='rounded-lg bg-[#1D1F27]'>
            <Image
            src={song?.banner}
            alt={song.title}
            />
            <div className='px-2 py-4'>
                <h2 className='text-xl text-[#fff] text-start'>{song?.title}</h2>

                <div className='flex gap-x-4 mt-4'>
                    <Image
                    className='w-[40px] h-[40px]'
                     src={song?.singerPic}/>
                    <div>
                        <h4>{song?.singer}</h4>
                        <span className='flex text-[12px] text-[#FFFFFD] gap-x-4'>{song.date} <span>{song?.genre}</span></span>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SongCard;