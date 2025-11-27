import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useCart } from './CartContext'; 
import CartSidebar from './CartSidebar'; 
import Checkout from './Checkout';       

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  
  // এই স্টেটটি চেকআউট মোডাল ওপেন/ক্লোজ কন্ট্রোল করে
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); 

  const { getCartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'products' },
    { id: 3, link: 'about' },
    { id: 4, link: 'contact' },
  ];

  // চেকআউট বাটন হ্যান্ডলার
  const handleCheckoutOpen = () => {
    setIsCartOpen(false); // কার্ট সাইডবার বন্ধ হবে
    setTimeout(() => {
        setIsCheckoutOpen(true); // একটু পর চেকআউট ওপেন হবে (স্মুথ এনিমেশনের জন্য)
    }, 100);
  };

  return (
    <>
      <nav className="fixed w-full h-20 z-50 transition-all duration-300 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md">
        <div className="flex justify-between items-center w-full h-full px-4 max-w-screen-xl mx-auto">
          
          {/* Logo */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-signature font-bold text-orange-600 cursor-pointer hover:scale-105 transition-all">
              ShopVerse
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ id, link }) => (
              <li key={id} className="cursor-pointer capitalize font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 hover:scale-105 duration-200 relative group">
                <a href={`#${link}`}>{link}</a>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 text-gray-700 dark:text-yellow-400">
              {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button 
              onClick={() => setIsCartOpen(true)} 
              className="relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-orange-500/40 transition duration-300 font-bold flex items-center gap-2 transform active:scale-95"
            >
              <FaShoppingCart /> Cart 
              <span className="bg-white text-orange-600 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm">
                {getCartCount()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-gray-700 dark:text-yellow-400">
              {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
            
            <div onClick={() => setIsCartOpen(true)} className="relative cursor-pointer text-gray-700 dark:text-gray-300">
              <FaShoppingCart size={28} />
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            </div>

            <div onClick={() => setNav(!nav)} className="cursor-pointer text-gray-700 dark:text-gray-300 ml-2">
              {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
          </div>
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-all duration-300 z-40">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl hover:text-orange-600 duration-200">
                <a onClick={() => setNav(!nav)} href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Cart Sidebar: এখানে onCheckout ফাংশন পাস করা হচ্ছে */}
      <CartSidebar onCheckout={handleCheckoutOpen} />
      
      {/* Checkout Modal: এখানে isOpen স্টেট পাস করা হচ্ছে */}
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default Navbar;