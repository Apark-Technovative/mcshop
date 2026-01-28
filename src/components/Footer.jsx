import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-gray-100 text-gray-700 py-12 sm:py-16">

      <div className="flex justify-center mb-6">
        <img
          src="/images/logo.png"
          alt="My Computer Shop Logo"
          className="h-14 sm:h-16 object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <hr className="border-t border-gray-400 mb-8" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8">

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 col-span-1 md:col-span-2">

          <div className="space-y-3 text-center sm:text-left flex-1">
            <h3 className="font-semibold text-black mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-500 cursor-pointer">
                  Term Of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link to="/faq" className="hover:text-green-500 cursor-pointer">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 text-center sm:text-left flex-1">
            <h3 className="font-semibold text-black mb-2">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:+9779851082739"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-green-500 cursor-pointer"
                >
                  <FaPhone />
                  <span>+977-9851082739</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mcshopnepal@gmail.com"
                  className="flex items-center justify-center sm:justify-start gap-2 hover:text-green-500 cursor-pointer"
                >
                  <FaEnvelope />
                  <span>mcshopnepal@gmail.com</span>
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaMapMarkerAlt />
                <span>Dyabu Marga, Galkopakha, Kathmandu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3 flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-black mb-2 text-center md:text-left">Map</h3>
          <div className="w-full sm:w-[300px] md:w-full h-36 sm:h-48 md:h-36 rounded overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=My%20Computer%20Shop%20(Naksha%20Printing%20&amp;%20Photocopy%20Shop)%20Color%20&amp;%20B/W+(My%20Computer%20Shop)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="space-y-3 flex flex-col items-center sm:items-start mt-8 md:mt-0">
          <h3 className="font-semibold text-black mb-2 text-center sm:text-left">Social Media</h3>
          <div className="flex gap-4 text-gray-600 text-lg justify-center sm:justify-start">
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
          &copy; mcshop@2026 All rights reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;
