import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
  
      <div className="flex justify-center mb-4">
        <img
          src="/images/logo.png" 
          alt="My Computer Shop Logo"
          className="h-16 object-contain"
        />
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <hr className="border-t border-gray-400 mb-6" />
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        
        <div>
          <h3 className="font-semibold mb-2 text-black">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:text-green-500">Term Of Use</a></li>
            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2 text-black">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> <span>+977-9812345678</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>mcshopnepal@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> <span>Dybalo Marga, Galkopakha, Kathmandu</span>
            </li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-2 text-black">Map</h3>
          <img 
            src="/images/map.png" 
            alt="Map Location"
            className="w-36 h-24 object-cover rounded"
          />
        </div>

        
        <div>
          <h3 className="font-semibold mb-2 text-black">Social Media</h3>
          <div className="flex gap-3 text-gray-600">
            <a href="#" className="hover:text-green-500"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-500"><FaYoutube /></a>
            <a href="#" className="hover:text-green-500"><FaTwitter /></a>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-8">
        <hr className="border-t border-gray-400 mb-4" />
        <p className="text-center text-sm text-gray-500">
          &copy; mcshop@2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
