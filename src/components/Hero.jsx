import hero from '../../public/hero.png';
import React from 'react';

const Hero = () => {
    return (
        <div className="relative w-full">
            <img src={hero} alt="" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-full md:w-[35%] flex-col flex justify-center items-center text-white p-4">
                    <h1 className="text-2xl md:text-4xl text-center font-bold mb-4">
                        Your <span className="text-[#096FFD] bg-[#FFFFFF]">Best Movies Data </span>
                        <span className="break-words">to Help You Find Your Mood!</span>
                    </h1>
                    <h2 className="text-lg md:text-2xl text-center font-thin mb-4">
                        Boost your mood in every moment, find
                        the treasure to pleasure your chill time.
                    </h2>
                    <div className="bg-[#096FFD]">
                        <p className="px-4 py-2 text-md md:text-lg">Explore Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
