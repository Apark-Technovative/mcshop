import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Quote from "./Quote";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-600"
      : "text-gray-700 hover:text-green-600 cursor-pointer";

  return (
    <>
      <header className="bg-[#f4f3fb] sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/" className="flex items-center cursor-pointer">
            <img
              src="/images/logo.png"
              alt="My Computer Shop Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 font-medium">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </nav>

          <button
            onClick={() => setQuoteOpen(true)}
            className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Get a Quote
          </button>

          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#f4f3fb] z-50 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-6 py-6 font-medium">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>Services</NavLink>
          <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact Us</NavLink>

          <button
            onClick={() => {
              setMenuOpen(false);
              setQuoteOpen(true);
            }}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Get a Quote
          </button>
        </nav>
      </aside>

      <Quote isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </>
  );
};

export default Navbar;
