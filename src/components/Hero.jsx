import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className = "flex justify-center items-center flex-col w-full min-h-screen relative bg-hero-banner bg-no-repeat bg-cover" >
            <div className="w-full flex absolute z-10 min-h-screen flex-row justify-center bg-black/50 top-0 left-0">
                <div className = "w-[50%] flex-col  flex justify-center items-center gap-5">
                    <h1 className ="text-[3.9375rem] text-center font-bold" >
                    Your <span className="text-[#096FFD] bg-[#FFFFFF]">Best Movies Data </span>
                    <span className="break-words">to Help You Find Your Mood!</span> 
                    </h1>
                    <h2 className="text-lg md:text-2xl text-center font-thin mb-4">
                        Boost your mood in every moment, find
                        the treasure to pleasure your chill time.
                    </h2>
                    <Link to={'/browse'} className="bg-[#096FFD]">
                        <p className="px-8 py-4 text-md md:text-lg">Explore Now</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
