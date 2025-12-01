import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes, FaSun, FaMoon, FaUser, FaArrowRight } from 'react-icons/fa';
import { useCart } from './CartContext'; 
import CartSidebar from './CartSidebar'; 
import Checkout from './Checkout';       

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [scrolled, setScrolled] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); 
  const { getCartCount, setIsCartOpen } = useCart();

  // থিম সেটআপ
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // স্ক্রল ডিটেকশন
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // মোবাইল মেনু ওপেন থাকলে বডি স্ক্রল লক
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [nav]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const links = [
    { id: 1, link: 'Home', href: 'home' },
    { id: 2, link: 'Collection', href: 'products' },
    { id: 3, link: 'Reviews', href: 'testimonials' },
    { id: 4, link: 'About', href: 'about' },
  ];

  const handleCheckoutOpen = () => {
    setIsCartOpen(false); 
    setTimeout(() => {
        setIsCheckoutOpen(true); 
    }, 100);
  };

  return (
    <>
      {/* 
         Navbar Container 
         পরিবর্তন: স্ক্রল ছাড়াও এখন হালকা ব্যাকগ্রাউন্ড, ব্লার এবং বর্ডার থাকবে।
      */}
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b 
        ${scrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-xl shadow-md border-gray-200 dark:border-gray-800 py-3' // স্ক্রল করলে
          : 'bg-white/60 dark:bg-black/40 backdrop-blur-md border-gray-200/50 dark:border-white/10 shadow-sm py-4' // শুরুতে (Glass Effect)
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="w-8 h-8 md:w-9 md:h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg md:text-xl shadow-lg shadow-orange-500/30 group-hover:rotate-6 transition-transform duration-300">
                S
            </span>
            <div className="flex flex-col">
                <h1 className="text-lg md:text-xl font-serif font-bold text-gray-900 dark:text-white tracking-wide leading-none">
                ShopVerse
                </h1>
                <span className="text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">Premium Store</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map(({ id, link, href }) => (
              <li key={id} className="relative group">
                <a 
                  href={`#${href}`} 
                  className="text-xs font-bold uppercase tracking-[2px] text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Right Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="relative p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-yellow-400 hover:border-orange-500 hover:text-orange-600 transition-all duration-300 overflow-hidden"
            >
              <div className={`transition-transform duration-500 ${theme === 'dark' ? 'rotate-180' : 'rotate-0'}`}>
                 {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
              </div>
            </button>

            <button className="p-2 rounded-lg text-gray-600 hover:text-orange-600 dark:text-gray-300 dark:hover:text-white transition-all">
                <FaUser size={18} />
            </button>

            <div className="h-6 w-[1px] bg-gray-300 dark:bg-gray-700"></div>

            <button 
              onClick={() => setIsCartOpen(true)} 
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-md active:scale-95"
            >
              <FaShoppingCart size={14} />
              <span className="text-xs font-bold tracking-wider">CART</span>
              <span className="flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full">
                {getCartCount()}
              </span>
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 p-1">
                {theme === 'dark' ? <FaSun size={20} className="text-yellow-400" /> : <FaMoon size={20} />}
             </button>

             <button onClick={() => setIsCartOpen(true)} className="relative p-1 text-gray-800 dark:text-white">
                <FaShoppingCart size={22} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-black">
                      {getCartCount()}
                  </span>
                )}
             </button>

            <button 
                onClick={() => setNav(true)} 
                className="p-2 text-gray-800 dark:text-white focus:outline-none active:scale-90 transition-transform"
            >
               <FaBars size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer (No Changes needed here, kept for completeness) */}
      <div 
          className={`fixed inset-0 h-screen w-full bg-black/60 backdrop-blur-sm z-[140] transition-opacity duration-300 md:hidden
          ${nav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setNav(false)}
      />

      <div 
          className={`fixed top-0 right-0 w-[80%] max-w-[300px] h-screen bg-white dark:bg-zinc-900 shadow-2xl z-[150] transform transition-transform duration-300 ease-out md:hidden flex flex-col border-l border-gray-200 dark:border-gray-800
          ${nav ? 'translate-x-0' : 'translate-x-full'}`}
      >
          <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 min-h-[80px]">
              <span className="font-serif font-bold text-xl text-gray-800 dark:text-white">Menu</span>
              <button 
                  onClick={() => setNav(false)} 
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
              >
                  <FaTimes size={18} />
              </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4 px-6 space-y-2">
              {links.map(({ id, link, href }) => (
              <a 
                  key={id}
                  onClick={() => setNav(false)} 
                  href={`#${href}`}
                  className="flex items-center justify-between p-3 rounded-lg text-gray-600 dark:text-gray-300 font-medium hover:bg-orange-50 dark:hover:bg-white/5 hover:text-orange-600 dark:hover:text-orange-400 transition-all group"
              >
                  <span className="text-lg">{link}</span>
                  <FaArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500" />
              </a>
              ))}
          </div>
          
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900/50 space-y-4 mb-safe">
              <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
                      <FaUser />
                  </div>
                  <div>
                      <p className="text-sm font-bold text-gray-800 dark:text-white">My Account</p>
                      <p className="text-xs text-gray-500">View Profile</p>
                  </div>
              </div>

              <button 
                  onClick={toggleTheme} 
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold text-sm hover:border-orange-500 transition-colors"
              >
                  {theme === 'dark' ? <><FaSun className="text-yellow-500"/> Light Mode</> : <><FaMoon className="text-gray-600"/> Dark Mode</>}
              </button>
          </div>
      </div>

      <CartSidebar onCheckout={handleCheckoutOpen} />
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default Navbar;