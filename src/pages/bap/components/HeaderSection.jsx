import React from "react";
import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <div className="space-y-4">
      <h1 className="border-l-4 border-l-secondary pl-2 text-2xl">Popular</h1>
      <div className="flex flex-row  gap-8">
        <Link
          to={"/articles"}
          className="block flex-1 relative h-[800px] hover:brightness-75"
        >
          <img
            src={"https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"}
            alt=""
            className="w-full h-full object-cover object-top rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
          <div className="absolute bottom-0 left-0 px-8 py-12">
            <p className="text-5xl tracking-widest font-bold leading-normal">
              TOP RENTALS
            </p>
            <p className="text-5xl tracking-widest font-bold leading-normal">
              ALL OVER THE WORLD
            </p>
          </div>
        </Link>

        <div className="flex-1 flex flex-col gap-8 h-[800px]">
          <Link
            to={"/articles"}
            className="flex-1 bg-[url('https://image.tmdb.org/t/p/w500//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg')] bg-center bg-no-repeat bg-cover rounded-lg relative block hover:brightness-75"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 px-8 py-4">
              <p className="text-4xl tracking-widest font-bold leading-normal">
                PERIOD PIECES
              </p>
            </div>
          </Link>
          <Link
            to={"/articles"}
            className="flex-1 bg-[url('https://image.tmdb.org/t/p/w500//zEqyD0SBt6HL7W9JQoWwtd5Do1T.jpg')] bg-center bg-no-repeat bg-cover rounded-lg relative block hover:brightness-75"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 px-8 py-4">
              <p className="text-4xl tracking-widest font-bold leading-normal">
                SCARY
              </p>
            </div>
          </Link>
          <Link
            to={"/articles"}
            className="flex-1 bg-[url('https://image.tmdb.org/t/p/w500//fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg')] bg-center bg-no-repeat bg-cover rounded-lg relative block hover:brightness-75"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
            <div className="absolute bottom-0 left-0 px-8 py-4">
              <p className="text-4xl tracking-widest font-bold leading-normal">
                ACTION
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
