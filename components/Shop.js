import React from 'react';
import singer from '../public/assets/singer.png'
import song1 from '../public/assets/song1.png'
import song3 from '../public/assets/song3.png'
import song2 from '../public/assets/song2.png'
import SongCard from './Reusable/SongCard';
import LinearGradBtn from './Reusable/LinearGradBtn';

const Shop = () => {
    const songs = [
        {
            title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
            singer: "John Williams",
            banner: song1,
            singerPic: singer,
            genre: "Jazz",
            date: "Mar 23"
        },
        {
            title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
            singer: "John Williams",
            banner: song2,
            singerPic: singer,
            genre: "Pop",
            date: "Mar 23"
        },
        {
            title: "Holly Herndon & Jlin (feat. Spawn) – Godmother",
            singer: "John Williams",
            banner: song3,
            singerPic: singer,
            genre: "Rock",
            date: "Mar 23"
        },
    ]
    return (
        <div className='lg:md:px-20 px-10  pt-8 lg:md:pt-32 text-center'>
            <h2 className='lg:md:text-[40px] text-[2.5rem] font-bold text-[#fff] mb-4'>Shop</h2>
            <p className='text-[16px] text-[#989898]'>Upload your song idea, license any voice in our catalog and let a<br /> professional perform your next hit.</p>

            <div className='grid lg:md:grid-cols-3 gap-x-8 lg:md:gap-y-0 gap-y-8 mt-24 mb-8'>
                {songs.map((song) => (
                    <SongCard key={song?.genre} song={song} />
                ))}

            </div>
            <button className="w-[135px] h-[45px] rounded-md bg-gradient-to-br from-[#2DF1E6] to-[#A660C3] hover:bg-[#190F33] transition-all duration-300 px-[10px] hover:from-[#169AA4] hover:to-[#23AFB7] ">
                Try now
            </button>

        </div>
    );
};

export default Shop;