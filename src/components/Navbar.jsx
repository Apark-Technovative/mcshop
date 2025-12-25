import React from "react";

const Navbar = () => {
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

        
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <a href="#" className="text-green-600">Home</a>
          <a href="#" className="hover:text-green-600">About</a>
          <a href="#" className="hover:text-green-600">Services</a>
          <a href="#" className="hover:text-green-600">Gallery</a>
          <a href="#" className="hover:text-green-600">Contact Us</a>
        </nav>

        
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Get a Quote
        </button>

      </div>
    </header>
  );
};

export default Navbar;
