import React, { useState } from 'react';
import logo1 from '../../assets/logo1.png';
import { Link } from "react-router-dom"; 

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className=" fixed w-full bg-green-500 top-0 z-50  left-0 px-3">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={logo1} alt="Logo" className="w-20 md:w-24" />
        </div>

        {/* Hamburger menu button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <span className="text-white text-3xl">×</span>
          ) : (
            <span className="text-white text-3xl">☰</span>
          )}
        </div>

        {/* Navigation links */}
        <ul className={`md:flex ${isMobile ? "flex-col absolute bg-green-500 top-full  h-64 right-0 w-56 p-4 text-base" : "hidden"} md:static md:w-auto md:p-0`}>


          <li className="md:ml-8 my-4 md:my-0 text-center" onClick={() => setIsMobile(false)}>
            <Link to="/" className="text-white text-lg font-semibold hover:text-teal-400 transition duration-300">
              Home
            </Link>
          </li>
          <li className="md:ml-8 my-4 md:my-0 text-center" onClick={() => setIsMobile(false)} >
            <Link to="/about" className="text-white text-lg font-semibold hover:text-teal-400 transition duration-300">
              About
            </Link>
          </li>
          <li className="md:ml-8 my-4 md:my-0 text-center" onClick={() => setIsMobile(false)} >
            <Link to="/propertylistings" className="text-white text-lg font-semibold hover:text-teal-400 transition duration-300">
            Listing
            </Link>
          </li>
          <li className="md:ml-8 my-4 md:my-0 text-center" onClick={() => setIsMobile (false)} >
            <Link to="/blogPage" className="text-white text-lg font-semibold hover:text-teal-400 transition duration-300">
            Blog
            </Link>
          </li>
        </ul>
         
      </div>
    </nav>
  );
};

export default Navbar;
