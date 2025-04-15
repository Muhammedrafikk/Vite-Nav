import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <nav className={`fixed w-full top-0 z-20 border-b border-gray-200 transition-all duration-300 ${isSticky ? "bg-white shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Links to="/" className="text-2xl font-semibold text-gray-800 dark:text-black flex items-center space-x-2">
            <span>Brand</span>
          </Links>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
             <Link
             key={item.id}
             to={item.path} // Use the 'path' property directly
             className="py-2 max-lg:px-1 px-4 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
           >
             {item.text}
           </Link>
           
            ))}
          </div>
          <div className="hidden md:flex space-x-2 max-lg:whitespace-nowrap">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white">Sign Up</button>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200">
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden shadow-md p-4 bg-amber-50 max-lg:text-center">
            {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path} // Use the 'path' property directly
              className="block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded-lg"
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
    </header>
  );
};

export default Navbar;
