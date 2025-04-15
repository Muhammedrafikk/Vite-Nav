import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import { Link } from 'react-router-dom'

// npm install react-icons

const navItems = [
  { id: 1, text: "Home", path: "/" },
  { id: 2, text: "About", path: "/about" },
  { id: 3, text: "Service", path: "/service" },
  { id: 4, text: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="bg-white shadow-md">
      
      {/* 🔹 1. Top Header (Contact & Socials) */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
          <p className="hidden sm:block">📞 Contact: +91 98765 43210</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* 🔹 2. Sticky Navbar (Below Header) */}
      <nav className={`w-full z-100 border-b border-gray-200 transition-all duration-300 
        ${isSticky ? "fixed top-0 bg-white shadow-lg py-3" : "relative bg-gray-100 py-4"}`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6">
          
          {/* Brand Name */}
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Brand
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="py-2 px-4 max-lg:px-1 text-gray-800 hover:bg-gray-200 rounded-lg"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Login & Sign Up Buttons (Desktop) */}
          <div className="hidden md:flex space-x-2 max-lg:whitespace-nowrap">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-500 hover:bg-gray-200 rounded-lg">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden shadow-md p-4 bg-gray-50 text-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="block py-2 px-4 text-gray-800 hover:bg-gray-200 rounded-lg"
              >
                {item.text}
              </Link>
            ))}
            <div className="mt-4 max-w-md sm:max-w-lg mx-auto">
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
              <button className="w-full mt-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Sign Up</button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Extra Space to Prevent Overlapping */}
      {isSticky && <div className="h-16"></div>}

    </header>
  );
};

export default Navbar;
