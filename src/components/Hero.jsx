import hero from '../../public/hero.png'
const Hero = () => {
    return (
        <div className = "flex justify-center items-center flex-col bg-contain w-full min-h-screen" >
            <img src={hero} alt="" className="w-full"/>
            <div className="w-full  flex absolute z-10 h-full flex-row justify-center bg-black/50">
                <div className = "w-[35%] flex-col  flex justify-center items-center  gap-5">
                    <h1 className ="text-[3.9375rem] text-center font-bold" >
                    Your <span className="text-[#096FFD] bg-[#FFFFFF]">Best Movies Data </span>
                    <span className="break-words">to Help You Find Your Mood!</span> 
                    </h1>
                    <h2 className = "text-[2.25rem] text-center font-thin">
                    Boost your mood in every moment find 
                    the treasure to pleasure your chill time.
                    </h2>
                    <div className = "bg-[#096FFD]" >
                        <p className = "px-[7.44rem] py-[1.5rem] text-lg"  >Explore Now</p>
                    </div>
                </div>
            </div>
        </div>
    )

}
 export default Hero