import React, { useState } from "react";

// header, stickty, add two button, 


const navItems = [
  { id: 1, text: "Home" },
  { id: 2, text: "Company" },
  { id: 3, text: "Resources" },
  { id: 4, text: "About" },
  { id: 5, text: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="text-2xl font-semibold text-gray-800 dark:text-white">Brand</a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700">
          <span className="sr-only">Toggle menu</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <div className={`w-full md:flex md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-gray-800 dark:text-white">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
