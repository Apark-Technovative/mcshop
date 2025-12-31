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
            <li className="flex items-center gap-2"><FaMapMarkerAlt /> <span>P897+575, Near Navodit College, Dyabu Marga, Kathmandu 44600, Nepal</span></li>
          </ul>
        </div>

       
        <div className="space-y-3">
          <h3 className="font-semibold text-black mb-2">Map</h3>
          <div className="w-full h-36 rounded overflow-hidden">
            <iframe
              title="My Computer Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.567891234567!2d85.328479!3d27.700765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1923abcdef12%3A0xabcdef1234567890!2sMy%20Computer%20Shop%20(Naksha%20Printing%20%26%20Photocopy%20Shop)!5e0!3m2!1sen!2snp!4v1767180601472!5m2!1sen!2snp"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
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
