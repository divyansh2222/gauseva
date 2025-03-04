import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F3D4B780] md:px-6 py-4 shadow-md">
      <div className="flex items-center justify-between mx-auto w-full px-4 md:px-0">
        {/* Logo */}
        <Link to="/accomplish"><img src={logo} alt="Logo" className="h-16" /></Link>

        {/* Desktop Menu */}
        <div className="hidden sm:hidden md:flex md:items-center md:space-x-6 flex-grow justify-center gap-4">
          <Link className="md:text-3xl text-lg font-semibold text-[#726253]" to="/">Home</Link>
          <Link className="md:text-3xl text-lg font-semibold text-[#726253]" to="/knownus">Known Us</Link>
          <Link className="md:text-3xl text-lg font-semibold text-[#726253]" to="/contact">Contact Us</Link>
          <Link className="md:text-3xl text-lg font-semibold text-[#726253]" to="/gallery">Gallery</Link>
        </div>

        {/* Right Section (Language Selector + Donate Now) */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <LanguageSelector />
        <Link to="/donate"><button className="bg-[#138F50] text-white px-4 py-2 rounded-md">Donate Now</button></Link>  
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-[#726253] text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden  flex flex-col items-center space-y-4 py-4  w-full">
          <Link className="text-lg font-semibold text-[#726253]" to="/">Home</Link>
          <Link className="text-lg font-semibold text-[#726253]" to="/knowus">Known Us</Link>
          <Link className="text-lg font-semibold text-[#726253]" to="/contact">Contact Us</Link>
          <Link className="text-lg font-semibold text-[#726253]" to="/gallery">Gallery</Link>
          <LanguageSelector />
          <Link to="/donate"><button className="bg-[#138F50] text-white px-4 py-2 rounded-md">Donate Now</button> </Link> 
        </div>
      )}
    </nav>
  );
};

export default Navbar;
