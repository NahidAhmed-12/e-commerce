import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white pt-16 pb-8 border-t-4 border-orange-600">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h1 className="text-4xl font-signature font-bold text-orange-600">
              ShopVerse
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the best online shopping with authentic products, fast delivery, and premium support. Your style, our priority.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-100 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-orange-600 rounded-full"></span>
            </h2>
            <ul className="space-y-3 text-gray-400">
              {['Home', 'Shop All', 'New Arrivals', 'Best Sellers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                    <span className="text-orange-600 text-xs">➤</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-100 relative inline-block">
              Support
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-orange-600 rounded-full"></span>
            </h2>
            <ul className="space-y-3 text-gray-400">
              {['Privacy Policy', 'Terms & Conditions', 'Shipping Policy', 'Returns & Refunds', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 hover:pl-2 transition-all duration-300 flex items-center gap-2">
                     <span className="text-orange-600 text-xs">➤</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-100 relative inline-block">
              Get in Touch
              <span className="absolute bottom-[-8px] left-0 w-12 h-1 bg-orange-600 rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-gray-400 text-sm mb-6">
                <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-orange-600"/> 123 Fashion Street, New York, USA</p>
                <p className="flex items-center gap-3"><FaPhoneAlt className="text-orange-600"/> +1 (234) 567-890</p>
                <p className="flex items-center gap-3"><FaEnvelope className="text-orange-600"/> support@shopverse.com</p>
            </div>

            {/* Newsletter Input */}
            <form className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full py-3 px-4 bg-gray-800 text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 pr-12"
              />
              <button className="absolute right-1 top-1 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition duration-300">
                <FaPaperPlane size={16}/>
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
             <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6 w-auto opacity-70 hover:opacity-100 transition duration-300"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 w-auto opacity-70 hover:opacity-100 transition duration-300"/>
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6 w-auto opacity-70 hover:opacity-100 transition duration-300"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;