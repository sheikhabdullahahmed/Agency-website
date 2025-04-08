import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../../Logo/loo';

function Navbar({ darkMode, darkModeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [windowWidth, menuOpen]);

  const menuToggleHandler = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`w-full py-4 fixed top-0 left-0 z-50 shadow-lg transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-600 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between  items-center">
        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <nav
          className={`absolute top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out md:static md:flex md:space-x-10 md:items-center md:p-0 ${
            menuOpen
              ? "translate-x-0 bg-white text-gray-800 shadow-md md:bg-transparent md:text-white"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 items-center text-lg font-semibold p-4 md:p-0">
            <li>
              <Link
                to="/"
                className="relative block py-2 px-4 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-4 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/propertylistings"
                className="block py-2 px-4 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Listings
              </Link>
            </li>
            <li>
              <Link
                to="/blogPage"
                className="block py-2 px-4 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Right Section: Button and Dark Mode Toggle */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={darkModeToggle}
            className={`md:w-16 w-4  mr-2 md:h-16 md:mr-9 rounded-full text-3xl transition-colors duration-200 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Toggle Button */}
          <div
            className="md:hidden text-3xl cursor-pointer p-2"
            onClick={menuToggleHandler}
          >
            {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
