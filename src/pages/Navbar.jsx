import React, { useState, useRef, useEffect } from 'react';
import { 
  FiSearch, FiMenu, FiX, FiShoppingBag, FiSun, FiMoon, FiUser, 
  FiChevronRight, FiHeart, FiSettings 
} from "react-icons/fi"; 
import { useCart } from './CartContext'; 
import CartSidebar from './CartSidebar'; 
import Checkout from './Checkout';       

const Navbar = () => {
  // --- States ---
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false); 
  
  // --- Hooks ---
  const { getCartCount, setIsCartOpen } = useCart();
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

  // --- Effects ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
        setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  // --- Handlers ---
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const handleCheckoutOpen = () => {
    setIsCartOpen(false); 
    setTimeout(() => setIsCheckoutOpen(true), 100);
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop Collection', href: '#products' },
    { name: 'New Arrivals', href: '#new' },
    { name: 'Stories & Blog', href: '#blog' },
  ];

  return (
    <>
      {/* --- Navbar Wrapper --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled ? 'md:pt-2' : 'md:pt-5'}`}>
        
        <div 
            className={`relative flex justify-between items-center transition-all duration-500
            px-6 py-4 md:px-10 md:py-3 
            w-full rounded-none
            md:mx-auto md:w-[98%] md:max-w-[1440px]
            ${scrolled ? 'md:rounded-xl' : 'md:rounded-2xl'}
            ${scrolled 
              ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10' 
              : 'bg-white/60 dark:bg-black/20 backdrop-blur-sm border-b border-transparent' 
            }`}
        >
          
          {/* --- Expanding Search Overlay --- */}
          <div 
            ref={searchRef}
            className={`absolute inset-0 bg-white dark:bg-[#1a1a1a] md:rounded-xl z-[60] flex items-center px-6 md:px-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
              isSearchOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible pointer-events-none'
            }`}
          >
            <FiSearch className="text-gray-400 min-w-[20px]" size={20} />
            <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search..." 
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400 font-medium ml-4 h-full text-base"
            />
            <button 
                onClick={() => setIsSearchOpen(false)} 
                className="p-2 bg-gray-100 dark:bg-white/10 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors ml-2 flex-shrink-0"
            >
               <FiX size={20} />
            </button>
          </div>


          {/* --- LEFT: Logo --- */}
          <div className="flex items-center z-50">
             <a href="#" className="flex flex-col group select-none">
                <h1 className="font-serif text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-none">
                   MUSE<span className="text-amber-600 text-3xl md:text-4xl">.</span>
                </h1>
             </a>
          </div>


          {/* --- CENTER: Desktop Links --- */}
          <div className="hidden lg:flex items-center gap-10 absolute left-1/2 transform -translate-x-1/2">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="relative text-xs font-bold uppercase tracking-[2px] text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors py-2 group"
                >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
             ))}
          </div>


          {/* --- RIGHT: Icons --- */}
          <div className="flex items-center gap-5 md:gap-8">
            <button onClick={() => setIsSearchOpen(true)} className="text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-all">
               <FiSearch size={20} />
            </button>

            <button onClick={toggleTheme} className="hidden md:flex text-gray-800 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-all">
               {theme === 'dark' ? <FiSun size={20} className="text-amber-400" /> : <FiMoon size={20} />}
            </button>

            <button onClick={() => setIsCartOpen(true)} className="relative group flex items-center gap-1 text-gray-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-all">
               <div className="relative">
                  <FiShoppingBag size={22} />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 min-w-[14px] h-[14px] bg-amber-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center border border-white dark:border-black">
                        {getCartCount()}
                    </span>
                  )}
               </div>
               <span className="font-bold text-xs uppercase hidden md:block tracking-wide group-hover:underline decoration-amber-600 decoration-2 underline-offset-4">Cart</span>
            </button>

             <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-gray-900 dark:text-white hover:text-amber-600 transition-colors">
                <FiMenu size={24} />
             </button>
          </div>

        </div>
      </nav>



      <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[90] transition-opacity duration-300 lg:hidden
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar Container */}
      <div 
          className={`fixed top-0 right-0 w-[80%] max-w-[320px] h-screen bg-white dark:bg-[#121212] shadow-2xl z-[100] transform transition-transform duration-300 ease-out lg:hidden flex flex-col 
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
         
         {/* 1. Header */}
         <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-white/5">
             <span className="font-serif font-bold text-2xl text-gray-900 dark:text-white tracking-tight">MUSE.</span>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 bg-gray-50 dark:bg-white/5 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
            >
                <FiX size={18} />
            </button>
         </div>


         <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col">
                {navLinks.map((link) => (
                    <a 
                       key={link.name} 
                       href={link.href}
                       onClick={() => setIsMenuOpen(false)}
                       className="group flex items-center justify-between px-6 py-4 border-b border-gray-50 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                    >
                       <span className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {link.name}
                       </span>
                       <FiChevronRight className="text-gray-400 group-hover:text-amber-600 transition-colors" size={16} />
                    </a>
                ))}
            </div>
         </div>

     
         <div className="p-6 bg-gray-50 dark:bg-[#0a0a0a] border-t border-gray-100 dark:border-white/5 space-y-4">
             
             {/* User Options */}
             <div className="space-y-1">
                 <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300">
                    <FiUser size={18} />
                    <span className="text-sm font-medium">My Account</span>
                 </button>
                 <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300">
                    <FiHeart size={18} />
                    <span className="text-sm font-medium">Wishlist</span>
                 </button>
                 <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white dark:hover:bg-white/5 transition-colors text-gray-600 dark:text-gray-300">
                    <FiSettings size={18} />
                    <span className="text-sm font-medium">Settings</span>
                 </button>
             </div>

   
             <button 
                onClick={toggleTheme} 
                className="w-full flex items-center justify-between p-3 rounded-lg bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm"
             >
                <div className="flex items-center gap-3 text-sm font-bold text-gray-700 dark:text-gray-200">
                   {theme === 'dark' ? <FiSun className="text-amber-500" /> : <FiMoon />}
                   <span>Appearance</span>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">{theme}</span>
             </button>

         </div>
      </div>

      <CartSidebar onCheckout={handleCheckoutOpen} />
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default Navbar;