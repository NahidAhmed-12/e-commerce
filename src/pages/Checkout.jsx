import React, { useEffect, useState } from 'react';
import { 
  FaTimes, FaCreditCard, FaPaypal, FaGooglePay, 
  FaLock, FaTruck, FaChevronDown, FaChevronUp 
} from 'react-icons/fa';
import { useCart } from './CartContext';

const Checkout = ({ isOpen, onClose }) => {
  const { cartItems, getCartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSummaryOpen, setIsSummaryOpen] = useState(false); // Mobile dropdown toggle state

  // পেছনের বডি স্ক্রল বন্ধ করা
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
    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-4 transition-all duration-300">
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      ></div>

      {/* Main Modal Container */}
      {/* Desktop: Row, Mobile: Column (Form on Top, Summary on Bottom) */}
      <div className="relative w-full h-[95vh] md:h-[90vh] md:max-w-6xl bg-white dark:bg-[#1a1a1a] rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden font-sans transform transition-all">
        
        {/* --- PART 1: CHECKOUT DETAILS FORM (Top/Left) --- */}
        {/* 'flex-1' ensures it takes all available space above the bottom bar */}
        <div className="flex-1 w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 bg-white dark:bg-[#1a1a1a]">
           <div className="p-6 md:p-10 pb-4">
               
               {/* Header */}
               <div className="flex justify-between items-center mb-6 md:mb-8">
                 <h2 className="text-xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                    Checkout Details
                 </h2>
                 {/* Close button */}
                 <button onClick={onClose} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 hover:text-red-500">
                    <FaTimes size={18}/>
                 </button>
               </div>

               <form className="space-y-6 md:space-y-8 pb-4">
                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 md:mb-4">
                        Contact Information
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                            <input 
                                type="email" 
                                placeholder="example@email.com" 
                                className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                            />
                        </div>
                    </div>
                  </div>
                  
                  {/* Shipping Address */}
                  <div>
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 md:mb-4">
                        Shipping Address
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">First Name</label>
                            <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                       </div>
                       <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Last Name</label>
                            <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                       </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</label>
                        <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                       <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                            <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                       </div>
                       <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">State</label>
                            <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                       </div>
                       <div>
                            <label className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">ZIP</label>
                            <input type="text" className="w-full p-3 bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none" />
                       </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 md:mb-4">
                        Payment Method
                    </h3>
                    <div className="grid grid-cols-3 gap-3 md:gap-4">
                       {[
                         { id: 'card', icon: FaCreditCard, label: 'Card' },
                         { id: 'paypal', icon: FaPaypal, label: 'PayPal' },
                         { id: 'gpay', icon: FaGooglePay, label: 'Google' }
                       ].map((method) => (
                         <div
                            key={method.id}
                            onClick={() => setPaymentMethod(method.id)}
                            className={`cursor-pointer p-3 md:p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                                paymentMethod === method.id 
                                ? 'border-orange-600 bg-orange-50 dark:bg-orange-900/20 text-orange-600' 
                                : 'border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-gray-400'
                            }`}
                         >
                            <method.icon size={20} className="md:w-6 md:h-6" />
                            <span className="text-[10px] md:text-xs font-bold">{method.label}</span>
                         </div>
                       ))}
                    </div>

                    {/* Card Details Inputs (Conditional) */}
                    {paymentMethod === 'card' && (
                        <div className="mt-6 p-4 bg-gray-50 dark:bg-[#252525] rounded-xl border border-gray-200 dark:border-gray-700 space-y-4 animate-fadeIn">
                            <div>
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-2 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white focus:border-orange-500 outline-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Expiry</label>
                                    <input type="text" placeholder="MM/YY" className="w-full p-2 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white focus:border-orange-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">CVC</label>
                                    <input type="text" placeholder="123" className="w-full p-2 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-600 rounded text-gray-900 dark:text-white focus:border-orange-500 outline-none" />
                                </div>
                            </div>
                        </div>
                    )}
                  </div>
               </form>
           </div>
        </div>

        {/* --- PART 2: ORDER SUMMARY (Bottom/Right) --- */}
        {/* On Mobile: This sits at the bottom. The list is collapsible. The total is always visible. */}
        <div className="w-full md:w-1/3 bg-gray-50 dark:bg-[#121212] md:border-l border-t md:border-t-0 border-gray-200 dark:border-gray-800 flex flex-col flex-shrink-0 z-20 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] md:shadow-none">
           
           {/* 1. Mobile Toggle Header */}
           {/* This is the bar you click to show the items */}
           <div 
             className="md:hidden px-6 py-3 bg-gray-100 dark:bg-[#1f1f1f] border-b border-gray-200 dark:border-gray-700 flex justify-between items-center cursor-pointer select-none"
             onClick={() => setIsSummaryOpen(!isSummaryOpen)}
           >
              <div className="flex items-center gap-2 text-orange-600 font-bold text-xs uppercase tracking-wide">
                 {isSummaryOpen ? 'Hide' : 'Show'} Order Summary
                 {isSummaryOpen ? <FaChevronDown size={10}/> : <FaChevronUp size={10}/>}
              </div>
              <span className="font-bold text-sm text-gray-900 dark:text-white">
                {cartItems.length} Items
              </span>
           </div>

           {/* Desktop Header (Static) */}
           <div className="hidden md:flex p-6 md:p-8 border-b border-gray-200 dark:border-gray-800 justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Order Summary</h3>
           </div>

           {/* 2. Product List (Collapsible on Mobile) */}
           {/* 'h-0' when closed on mobile, 'h-auto max-h-[30vh]' when open. Always visible on desktop. */}
           <div className={`overflow-y-auto bg-gray-50 dark:bg-[#121212] transition-all duration-300 ease-in-out scrollbar-thin ${
               isSummaryOpen ? 'h-48 border-b border-gray-200 dark:border-gray-800' : 'h-0'
           } md:h-full md:border-none p-0 md:p-8`}>
              <div className="p-6 md:p-0 space-y-4">
                  {cartItems.map((item, index) => (
                     <div key={index} className="flex gap-3">
                        <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-md border border-gray-200 dark:border-gray-700 flex-shrink-0 overflow-hidden">
                           <img src={item.img} alt={item.name} className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex-1">
                           <h4 className="font-bold text-gray-800 dark:text-white text-sm line-clamp-1">{item.name}</h4>
                           <p className="text-[10px] text-gray-500 mt-1">Qty: {item.quantity} | {item.selectedSize}</p>
                           <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">${item.price * item.quantity}</p>
                        </div>
                     </div>
                  ))}
              </div>
           </div>

           {/* 3. Footer Totals & Pay Button (Always Visible at Bottom) */}
           <div className="p-6 md:p-8 bg-white dark:bg-[#1a1a1a] md:bg-transparent">
               <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                     <span>Subtotal</span>
                     <span>${getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                     <span className="flex items-center gap-1"><FaTruck size={12}/> Shipping</span>
                     <span className="text-green-600 font-bold">Free</span>
                  </div>
               </div>

               <div className="flex justify-between items-center pt-3 border-t border-dashed border-gray-200 dark:border-gray-700 mb-4">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                  <span className="text-2xl font-bold text-orange-600">${getCartTotal()}</span>
               </div>

               <button className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 md:py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg text-sm md:text-base">
                  <FaLock size={12}/> Pay Now
               </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;