import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="h-[112px] fixed top-0 left-0 w-full bg-primary text-white z-50">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        <h1 className="font-bold text-4xl border-4 p-1 border-secondary">
          ICLIP
        </h1>

        <div className="flex-1 flex h-12 justify-center items-center">
          <div className="w-1/2 h-12 relative">
            <FaSearch size={20} className="absolute top-3 left-4" />
            <input
              type="text"
              className="w-full h-full bg-transparent border border-opacity-50 border-white pl-12 rounded-md focus:outline-none text-lg"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex gap-6 h-full justify-end items-center">
          <h1 className="text-xl text-secondary underline underline-offset-4 ">
            Browse All
          </h1>
          <h1 className="text-xl">Articles</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
