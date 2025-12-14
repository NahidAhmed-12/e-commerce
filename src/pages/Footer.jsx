import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-10 relative overflow-hidden font-sans border-t border-white/10">
      
    
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] rounded-full pointer-events-none"></div>

     
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
         <h1 className="text-[12rem] md:text-[20rem] font-bold text-center leading-none font-serif tracking-tighter">
            MUSE
         </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
       
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white tracking-wide">
             MUSE<span className="text-orange-600">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              Elevating your everyday style with a curated collection of premium fashion and lifestyle essentials. Designed for the modern individual.
            </p>
            
      
            <div className="flex gap-4 pt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300 group"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform"/>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-orange-600/50 pb-2 inline-block">
              Shop
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['New Arrivals', 'Best Sellers', 'Men\'s Fashion', 'Women\'s Collection', 'Accessories'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-8 border-b border-orange-600/50 pb-2 inline-block">
              Support
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              {['Help Center', 'Order Status', 'Returns & Warranty', 'Contact Us', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 hover:translate-x-1 transition-all duration-300 inline-block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-6">
              Join the Exclusive Club
            </h3>
            <p className="text-gray-400 text-sm mb-6 font-light">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            
          
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-transparent border-b border-gray-700 text-white py-3 pr-12 focus:outline-none focus:border-orange-600 transition-colors duration-300 placeholder-gray-600"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-orange-600 transition-colors duration-300 hover:text-white">
                <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                   Join <FaArrowRight size={12}/>
                </span>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} MUSE Inc. All rights reserved.
          </p>
          
         
          <div className="flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4 w-auto"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 w-auto"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-4 w-auto"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;