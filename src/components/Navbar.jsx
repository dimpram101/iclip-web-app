import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  }; 

  return (
    <nav className="h-[112px] fixed top-0 left-0 w-full bg-primary text-white z-50">
      <div className="max-w-screen-2xl mx-auto h-full flex items-center justify-between">
        <Link to={"/"} className="font-bold text-4xl border-4 p-1 border-secondary">
          ICLIP
        </Link>

        <div className="flex-1 flex h-12 justify-center items-center">
          <form onSubmit={formSubmitHandler} className="w-1/2 h-12 relative">
            <FaSearch size={20} className="absolute top-3 left-4" />
            <input
              type="text"
              onChange = {(e)=> setSearch (e.target.value)}  
              className="w-full h-full bg-transparent border border-opacity-50 border-white pl-12 rounded-md focus:outline-none text-lg"
              placeholder="Search..."
            />
            <button type="submit" className="hidden">Submit</button>
          </form>
        </div>

        <div className="flex gap-6 h-full justify-end items-center">
          <Link
            to={'/browse'}
            className={`text-xl text-secondary text-white ${
              location.pathname === '/browse' ? 'underline underline-offset-4' : ''
            }`}
          >
            Browse All
          </Link>

          <Link
            to={'/articles'}
            className={`text-xl text-secondary text-white ${
              location.pathname === '/articles' ? 'underline underline-offset-4' : ''
            }`}
          >
            Articles
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
