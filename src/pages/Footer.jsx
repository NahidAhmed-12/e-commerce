import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">ShopVerse</h1>
          <p className="text-gray-400">
            Your one-stop destination for premium quality products. We ensure the best shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Shop</li>
            <li className="hover:text-primary cursor-pointer">About Us</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-2 text-gray-400">
                <li>123 Street Name, City, Country</li>
                <li>support@shopverse.com</li>
                <li>+123 456 7890</li>
            </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <FaFacebook size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <FaTwitter size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <FaInstagram size={24} className="hover:text-primary cursor-pointer transition-colors" />
            <FaLinkedin size={24} className="hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
      
      <div className="text-center mt-10 border-t border-gray-800 pt-6 text-gray-500">
        <p>&copy; 2024 ShopVerse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;