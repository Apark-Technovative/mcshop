import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600"
      : "text-gray-700 hover:text-green-600";

  return (
    <header className="bg-[#f4f3fb]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

       
        <Link to="/" className="flex items-center cursor-pointer">
          <img
           src="/images/logo.png"
           alt="My Computer Shop Logo"
           className="h-12 w-auto object-contain hover:opacity-90 transition"
          />
       </Link>

       
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
        </nav>

        
        <Link
          to="/quote"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Get a Quote
        </Link>

       
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-[#f4f3fb] px-6 pb-6">
          <div className="flex flex-col gap-4 font-medium">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>Services</NavLink>
            <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact Us</NavLink>

            
            <Link
              to="/quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-blue-600 text-white text-center px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
