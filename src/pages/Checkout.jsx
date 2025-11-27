import React, { useEffect } from 'react';
import { FaTimes, FaCreditCard, FaPaypal, FaGooglePay, FaArrowLeft, FaTruck, FaLock } from 'react-icons/fa';
import { useCart } from './CartContext';

const Checkout = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal } = useCart();

  // মোডাল ওপেন হলে পেছনের স্ক্রল বন্ধ করা
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Z-Index 200 দেওয়া হয়েছে যাতে Navbar (z-50) এর উপরে থাকে
    <div className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4">
      
      {/* Modal Container */}
      <div className="bg-white dark:bg-gray-900 w-full max-w-6xl h-full sm:h-auto sm:max-h-[90vh] sm:rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden relative animate-fadeIn">
        
        {/* Close Button (Mobile Fixed Top) */}
        <div className="md:hidden absolute top-0 left-0 w-full bg-white dark:bg-gray-900 p-4 border-b dark:border-gray-800 z-10 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">Checkout</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                <FaTimes size={24}/>
            </button>
        </div>

        {/* Left Side: Shipping & Payment Form (Scrollable) */}
        <div className="w-full md:w-2/3 p-6 sm:p-10 overflow-y-auto mt-14 sm:mt-0 scrollbar-hide">
           {/* Desktop Header */}
           <div className="hidden md:flex justify-between items-center mb-8">
             <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <span className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Shipping & Payment
             </h2>
             <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition">
                <FaTimes size={28}/>
             </button>
           </div>
           
           <form className="space-y-6">
              {/* Contact Info */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Contact Information</h3>
                <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white transition-all" />
              </div>
              
              {/* Address */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 mt-4">Shipping Address</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                   <input type="text" placeholder="First Name" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                   <input type="text" placeholder="Last Name" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                </div>
                <input type="text" placeholder="Address" className="w-full p-3 mb-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                   <input type="text" placeholder="City" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                   <input type="text" placeholder="State" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                   <input type="text" placeholder="ZIP Code" className="w-full p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg outline-none focus:ring-2 ring-orange-500 dark:text-white" />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3 mt-6">Payment Method</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                   <button type="button" className="p-3 sm:p-4 border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex flex-col items-center justify-center gap-2 text-orange-700 dark:text-orange-500 font-bold transition-all hover:scale-105">
                     <FaCreditCard size={20}/> <span className="text-xs sm:text-sm">Card</span>
                   </button>
                   <button type="button" className="p-3 sm:p-4 border border-gray-300 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                     <FaPaypal size={20}/> <span className="text-xs sm:text-sm">PayPal</span>
                   </button>
                   <button type="button" className="p-3 sm:p-4 border border-gray-300 dark:border-gray-700 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                     <FaGooglePay size={20}/> <span className="text-xs sm:text-sm">G-Pay</span>
                   </button>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 text-gray-500 text-sm bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mt-4">
                 <FaLock className="text-green-500"/>
                 <span>Your transaction is secured with SSL encryption.</span>
              </div>
           </form>
        </div>

        {/* Right Side: Order Summary (Fixed on Desktop, Scrollable Content) */}
        <div className="w-full md:w-1/3 bg-gray-50 dark:bg-gray-800 p-6 sm:p-10 border-l border-gray-200 dark:border-gray-700 flex flex-col h-full">
           <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
             <span className="bg-gray-800 dark:bg-white text-white dark:text-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
             Order Summary
           </h3>
           
           {/* Product List */}
           <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-6 max-h-[300px] md:max-h-none scrollbar-thin">
              {cartItems.map((item, index) => (
                 <div key={index} className="flex gap-4 items-center bg-white dark:bg-gray-900 p-3 rounded-lg shadow-sm">
                    <div className="w-14 h-14 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 relative">
                       <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
                       <span className="absolute -top-1 -right-1 bg-gray-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border border-white">
                         {item.quantity}
                       </span>
                    </div>
                    <div className="flex-1 min-w-0">
                       <h4 className="text-sm font-bold text-gray-800 dark:text-white truncate">{item.name}</h4>
                       <p className="text-xs text-gray-500 truncate">
                         {item.selectedColor !== 'Default' ? item.selectedColor : ''} 
                         {item.selectedSize !== 'Default' ? ` / ${item.selectedSize}` : ''}
                       </p>
                    </div>
                    <p className="text-sm font-bold text-gray-700 dark:text-gray-300">${item.price * item.quantity}</p>
                 </div>
              ))}
           </div>

           {/* Cost Breakdown */}
           <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
              <div className="flex justify-between text-gray-500 text-sm">
                 <span>Subtotal</span>
                 <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                 <span className="flex items-center gap-1"><FaTruck className="text-orange-500"/> Shipping</span>
                 <span className="text-green-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                 <span>Taxes (Estimated)</span>
                 <span>$0.00</span>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
              
              <div className="flex justify-between font-bold text-xl text-gray-900 dark:text-white">
                 <span>Total</span>
                 <span>${getCartTotal()}</span>
              </div>
           </div>

           {/* Pay Button */}
           <button type="button" className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 active:scale-95 transition-all shadow-lg shadow-orange-500/30 mt-6">
              Confirm Payment
           </button>
           
           {/* Back Button for Mobile */}
           <button onClick={onClose} className="w-full md:hidden mt-3 text-gray-500 text-sm hover:text-gray-800 dark:hover:text-white">
              Cancel & Return
           </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout; 