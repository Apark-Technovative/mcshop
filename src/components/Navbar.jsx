import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 cursor-pointer"
      : "text-gray-700 hover:text-green-600 cursor-pointer";

  return (
    <header className="bg-[#f4f3fb]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="My Computer Shop Logo"
            className="h-12 w-auto object-contain"
          />
        </div>


        <nav className="hidden md:flex items-center gap-8 font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/gallery" className={navLinkClass}>
            Gallery
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        
        <Link
          to="/quote"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
        >
          Get a Quote
        </Link>

      </div>
    </header>
  );
};

export default Navbar;
