import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/real.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    <header className="bg-green-500 text-white w-full py-4 md:px-8    fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex    justify-between  items-center">
        <a href="" className="flex  font-bold text-2xl ">
          GharDekho
        </a>

        {/* Navigation Menu */}
        <nav
          className={`absolute top-16 left-0 w-full transition-transform transform ${menuOpen ? "translate-x-0 bg-white text-black" : "-translate-x-full bg-transparent"
            } md:static md:flex md:w-auto md:translate-x-0 md:bg-transparent`}
        >
          <ul className="flex font-semibold    flex-col md:flex-row md:space-x-6 items-center text-lg md:text-base">
            <li>
              <Link to="/" className="block py-2 px-4 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-4 hover:text-blue-400" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/propertylistings"
                className="block py-2 px-4 "
                onClick={() => setMenuOpen(false)}
              >
                Listing
              </Link>
            </li>
            <li>
              <Link
                to="/blogPage"
                className="block py-2 px-4    "
                onClick={() => setMenuOpen(false)}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-3xl cursor-pointer" onClick={menuToggleHandler}>
          {menuOpen ? <AiOutlineClose /> : <BiMenuAltRight />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
