import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'products' },
    { id: 3, link: 'about' },
    { id: 4, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-50 shadow-lg">
      <div>
        <h1 className="text-4xl font-signature font-bold text-primary ml-2 cursor-pointer hover:scale-105 transition-all">
          ShopVerse
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:text-primary hover:scale-110 duration-200"
          >
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <button className="bg-primary px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 font-bold flex items-center gap-2">
          <FaShoppingCart /> Cart (0)
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu Dropdown */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-primary duration-200"
            >
              <a onClick={() => setNav(!nav)} href={`#${link}`}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;