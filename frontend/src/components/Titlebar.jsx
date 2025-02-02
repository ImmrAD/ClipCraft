import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Titlebar(){
    const[menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if(menuOpen){
            document.body.style.overflow = "hidden";
        }
        else{
            document.body.style.overflow ="";
        }
        return() => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return(
        <div className="relative z-20 flex justify-between items-center px-4 py-2 bg-orchid bg-opacity-90 backdrop-blur-md shadow-md md:px-8">

            <div className="flex items-center space-x-2 ">
            <Link to="/">
                <img
                src="/CCLogo.png"
                alt="Clip Craft Logo"
                className="h-18 w-auto cursor-pointer"
                />              
            </Link>
            </div>


            <nav className="hidden md:flex space-x-6 items-center text-mauve">
                <a href="/" className="hover:text-midnight">Home</a>
                <a href="/about" className="hover:text-midnight">About Us</a>
                <a href="/work" className="hover:text-midnight">Work</a>
                <a href="/services" className="hover:text-midnight">Services</a>
            </nav>

        {/* Mobile Navigation Toggle */}
        <button
            className="md:hidden flex flex-col gap-2 w-8 h-8 justify-center items-center text-mauve"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
        >
          <div
              className={`h-[3px] w-6 bg-black rounded transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
          ></div>
          <div
              className={`h-[3px] w-6 bg-black rounded transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
              }`}
          ></div>
          <div
              className={`h-[3px] w-6 bg-black rounded transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
          ></div>
        </button>

        {/* Backdrop for the Dropdown Menu */}
        {menuOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={toggleMenu}
            ></div>
        )}

        {/* Dropdown Mobile Menu */}
        {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-full bg-white shadow-lg z-50">
                <div className="flex flex-col items-center space-y-2 py-4 text-mauve ">
                    <a href="/" onClick={handleMenuClose} className=" hover:text-midnight">
                        Home
                    </a>
                    <a href="/about" onClick={handleMenuClose} className=" hover:text-midnight">
                        About us
                    </a>
                    <a href="/workl" onClick={handleMenuClose} className=" hover:text-midnight">
                        Work
                    </a>
                    <a href="/service" onClick={handleMenuClose} className=" hover:text-midnight">
                        Services
                    </a>
                </div>
            </div>
        )}
      </div>
  );
}
