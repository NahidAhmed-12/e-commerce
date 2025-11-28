import React from 'react';
import { FaTimes, FaTrashAlt, FaMinus, FaPlus, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartSidebar = ({ onCheckout }) => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  // Free Shipping Logic (Example: Free shipping over $200)
  const total = getCartTotal();
  const freeShippingThreshold = 200;
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - total;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      
      {/* 1. Backdrop (Blur Effect) */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* 2. Sidebar Drawer */}
      <div className="relative w-full max-w-md bg-white dark:bg-[#121212] shadow-2xl shadow-black/50 transform transition-transform duration-500 ease-out flex flex-col h-full animate-slideIn">
        
        {/* --- Header --- */}
        <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-[#121212] z-10">
          <div className="flex items-center gap-3">
             <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white tracking-wide">
                Your Bag
             </h2>
             <span className="w-6 h-6 flex items-center justify-center bg-orange-600 text-white text-xs font-bold rounded-full">
                {cartItems.length}
             </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="group p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition duration-300"
          >
            <FaTimes size={20} className="text-gray-500 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* --- Free Shipping Progress Bar --- */}
        {cartItems.length > 0 && (
            <div className="px-8 py-4 bg-gray-50 dark:bg-white/5">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 font-medium">
                    {total >= freeShippingThreshold ? (
                        <span className="text-green-600 dark:text-green-400 font-bold flex items-center gap-2">
                            ✨ You've unlocked FREE Shipping!
                        </span>
                    ) : (
                        <>
                            Add <span className="font-bold text-orange-600">${remaining.toFixed(2)}</span> more for <span className="uppercase font-bold text-xs tracking-wider">Free Shipping</span>
                        </>
                    )}
                </p>
                <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-orange-600 transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        )}

        {/* --- Cart Items List --- */}
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
                 <FaShoppingBag size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Your bag is empty</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto text-sm">
                Looks like you haven't added any items to the bag yet. Start shopping to fill it in.
              </p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold uppercase tracking-widest text-xs rounded-full hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all duration-300"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-5 group">
                {/* Product Image */}
                <div className="w-24 h-32 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif font-bold text-lg text-gray-900 dark:text-white leading-tight hover:text-orange-600 cursor-pointer transition-colors">
                            {item.name}
                        </h3>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">
                            ${item.price * item.quantity}
                        </p>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 uppercase tracking-wide">
                      {item.selectedColor !== 'Default' && <span className="mr-3">Color: {item.selectedColor}</span>}
                      <span>Size: {item.selectedSize}</span>
                    </p>
                  </div>
                  
                  {/* Quantity & Remove */}
                  <div className="flex justify-between items-end mt-4">
                    
                    {/* Minimal Quantity Selector */}
                    <div className="flex items-center gap-3 bg-gray-50 dark:bg-white/5 rounded-full px-3 py-1 border border-gray-200 dark:border-gray-700">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-orange-600 transition"
                      >
                        <FaMinus size={8} />
                      </button>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white w-4 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-orange-600 transition"
                      >
                        <FaPlus size={8} />
                      </button>
                    </div>

                    {/* Remove Button (Icon only style) */}
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                      className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-red-500 transition-colors border-b border-transparent hover:border-red-500 pb-0.5"
                    >
                      <FaTrashAlt size={12} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* --- Footer --- */}
        {cartItems.length > 0 && (
          <div className="p-8 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-[#121212]">
            
            {/* Subtotal */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900 dark:text-white">${getCartTotal()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span>Shipping</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                        {total >= freeShippingThreshold ? 'Free' : 'Calculated at checkout'}
                    </span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-center mb-8 pt-4 border-t border-dashed border-gray-200 dark:border-gray-700">
              <span className="text-lg font-serif font-bold text-gray-900 dark:text-white">Total</span>
              <span className="text-2xl font-serif font-bold text-orange-600">${getCartTotal()}</span>
            </div>
            
            {/* Checkout Button */}
            <button 
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              className="group w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
            >
              Checkout <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[10px] text-gray-400 text-center mt-4">
                Secure Checkout • Free Returns within 30 days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;