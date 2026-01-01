import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">

      
      <div className="flex justify-center mb-6">
        <img
          src="/images/logo.png"
          alt="My Computer Shop Logo"
          className="h-16 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <hr className="border-t border-gray-400 mb-8" />
      </div>

      
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 items-start">

       
        <div className="space-y-3">
          <h3 className="font-semibold text-black mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-500">Term Of Use</a></li>
            <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div className="space-y-3">
          <h3 className="font-semibold text-black mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaPhone /> <span>+977-9812345678</span></li>
            <li className="flex items-center gap-2"><FaEnvelope /> <span>mcshopnepal@gmail.com</span></li>
<<<<<<< HEAD
             <li className="flex items-center gap-2"><FaMapMarkerAlt />  <span>Dybalo Marga, Galkopakha, Kathmandu</span></li>
=======
            <li className="flex items-center gap-2"><FaMapMarkerAlt />  <span>Dybalo Marga, Galkopakha, Kathmandu</span></li>
>>>>>>> 85a94ca (Completed Service Detail page)
          </ul>
        </div>

       
        <div className="space-y-3">
          <h3 className="font-semibold text-black mb-2">Map</h3>
          <div className="w-full h-36 rounded overflow-hidden">
           <iframe
            className="h-[500px] w-full"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=My%20Computer%20Shop%20(Naksha%20Printing%20&amp;%20Photocopy%20Shop)%20Color%20&amp;%20B/W+(My%20Computer%20Shop)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            loading="lazy"
          ></iframe>
          </div>
        </div>

        
        <div className="space-y-3 mt-8 md:mt-0 flex flex-col justify-start">
          <h3 className="font-semibold text-black mb-2">Social Media</h3>
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="#" className="hover:text-green-500"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-500"><FaYoutube /></a>
            <a href="#" className="hover:text-green-500"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 mt-10">
        <hr className="border-t border-gray-400 mb-4" />
        <p className="text-center text-sm text-gray-500">
          &copy; mcshop@2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
