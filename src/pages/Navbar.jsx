import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes, FaSun, FaMoon, FaUser } from 'react-icons/fa';
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

  // স্ক্রল ডিটেকশন (শুধু শ্যাডো বা অপাসিটি বাড়ানোর জন্য)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      <nav 
        // পরিবর্তন এখানে: শুরু থেকেই ব্যাকগ্রাউন্ড কালার এবং ব্লার দেওয়া হয়েছে
        className={`fixed w-full top-0 z-50 transition-all duration-300 border-b 
        ${scrolled 
          ? 'bg-white/95 dark:bg-black/95 shadow-md border-gray-200 dark:border-gray-800 py-4' // স্ক্রল করলে সলিড কালার হবে
          : 'bg-white/70 dark:bg-black/60 backdrop-blur-xl border-orange-100/50 dark:border-white/10 py-5' // শুরুতে গ্লাস ইফেক্ট এবং হালকা বর্ডার
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="w-9 h-9 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:rotate-6 transition-transform duration-300">
                S
            </span>
            <div className="flex flex-col">
                <h1 className="text-xl font-serif font-bold text-gray-900 dark:text-white tracking-wide leading-none">
                ShopVerse
                </h1>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">Premium Store</span>
            </div>
          </div>

          {/* Desktop Menu - Distinct Links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map(({ id, link, href }) => (
              <li key={id} className="relative group">
                <a 
                  href={`#${href}`} 
                  className="text-xs font-bold uppercase tracking-[2px] text-gray-800 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  {link}
                </a>
                {/* Active/Hover Indicator */}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-orange-600 group-hover:w-full transition-all duration-300"></span>
              </li>
            ))}
          </ul>

          {/* Right Icons Area */}
          <div className="hidden md:flex items-center gap-5">
            
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-yellow-400 transition-all"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button className="p-2 rounded-lg text-gray-600 hover:bg-orange-50 hover:text-orange-600 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white transition-all">
                <FaUser size={18} />
            </button>

            {/* Vertical Divider for separation */}
            <div className="h-8 w-[1px] bg-gray-300 dark:bg-white/10"></div>

            {/* Cart Button - High Contrast */}
            <button 
              onClick={() => setIsCartOpen(true)} 
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              <FaShoppingCart size={16} />
              <span className="text-xs font-bold tracking-wider">CART</span>
              <span className="flex items-center justify-center w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full">
                {getCartCount()}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
             <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-gray-800 dark:text-white">
                <FaShoppingCart size={24} />
                <span className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white dark:border-black">
                    {getCartCount()}
                </span>
             </button>

            <button onClick={() => setNav(true)} className="p-2 text-gray-800 dark:text-white">
               <FaBars size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        <div 
            className={`fixed inset-0 bg-white/95 dark:bg-black/95 backdrop-blur-xl z-[60] flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
                nav ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-5'
            }`}
        >
            <button onClick={() => setNav(false)} className="absolute top-6 right-6 p-2 text-gray-800 dark:text-white hover:text-orange-600 transition-colors">
                <FaTimes size={32} />
            </button>

            <div className="space-y-8 text-center">
                {links.map(({ id, link, href }) => (
                <div key={id}>
                    <a 
                        onClick={() => setNav(false)} 
                        href={`#${href}`}
                        className="block text-3xl font-serif font-bold text-gray-900 dark:text-white hover:text-orange-600 transition-colors duration-300"
                    >
                        {link}
                    </a>
                </div>
                ))}
            </div>
            
            <button onClick={toggleTheme} className="absolute bottom-12 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 border border-gray-300 dark:border-gray-700 px-8 py-3 rounded-full hover:border-orange-500 transition-colors">
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
      </nav>

      <CartSidebar onCheckout={handleCheckoutOpen} />
      <Checkout isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
    </>
  );
};

export default Navbar;