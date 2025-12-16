import React from 'react';
import { FaTimes, FaTrashAlt, FaMinus, FaPlus, FaArrowRight, FaShoppingBag } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartSidebar = ({ onCheckout }) => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const total = getCartTotal();
  const freeShippingThreshold = 200;
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - total;

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end font-sans">
      
      
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500"
        onClick={() => setIsCartOpen(false)}
      ></div>

     
      <div className="relative w-full max-w-md bg-[#F4F4F0] dark:bg-[#0f0f0f] shadow-2xl shadow-black/50 transform transition-transform duration-500 ease-out flex flex-col h-full animate-slideIn border-l border-white/20">
        
        {/* --- Header --- */}
        <div className="px-8 py-8 border-b border-black/5 dark:border-white/10 flex justify-between items-center bg-[#F4F4F0] dark:bg-[#0f0f0f] z-10">
          <div className="flex items-center gap-3">
             <h2 className="text-3xl font-serif text-gray-900 dark:text-white tracking-tight">
                Your Bag
             </h2>
             <span className="w-6 h-6 flex items-center justify-center bg-amber-600 text-white text-[10px] font-bold rounded-full">
                {cartItems.length}
             </span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="group p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition duration-300"
          >
            <FaTimes size={18} className="text-gray-500 group-hover:text-red-500 transition-colors" />
          </button>
        </div>

        {/* --- Free Shipping Progress --- */}
        {cartItems.length > 0 && (
            <div className="px-8 py-6 bg-[#EBEBE6] dark:bg-[#141414]">
                <p className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-3 font-bold">
                    {total >= freeShippingThreshold ? (
                        <span className="text-green-600 dark:text-green-400 flex items-center gap-2">
                            ✨ You've unlocked FREE Shipping!
                        </span>
                    ) : (
                        <>
                            Add <span className="text-amber-600">${remaining.toFixed(2)}</span> for Free Shipping
                        </>
                    )}
                </p>
                <div className="w-full h-1 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-amber-600 transition-all duration-1000 ease-out rounded-full shadow-[0_0_10px_rgba(217,119,6,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        )}

 
        <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6 opacity-60">
              <div className="w-24 h-24 bg-gray-200 dark:bg-white/5 rounded-full flex items-center justify-center mb-2 animate-pulse">
                 <FaShoppingBag size={32} className="text-gray-400" />
              </div>
              <h3 className="text-2xl font-serif text-gray-900 dark:text-white">Your bag is empty</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
                Experience the ultimate comfort. Start shopping to fill your collection.
              </p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-amber-600 dark:hover:bg-amber-600 dark:hover:text-white transition-all duration-300 shadow-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-5 group animate-fadeIn">
                {/* Product Image */}
                <div className="w-24 h-32 bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden flex-shrink-0 relative shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                
                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg text-gray-900 dark:text-white leading-tight hover:text-amber-600 cursor-pointer transition-colors">
                            {item.name}
                        </h3>
                        <p className="font-bold text-gray-900 dark:text-white text-sm">
                            ${item.price * item.quantity}
                        </p>
                    </div>
                    <div className="flex flex-col gap-1 mt-2">
                        {item.selectedColor !== 'Default' && (
                            <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">
                                Color: <span className="text-gray-900 dark:text-gray-300">{item.selectedColor}</span>
                            </p>
                        )}
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-bold">
                            Size: <span className="text-gray-900 dark:text-gray-300">{item.selectedSize}</span>
                        </p>
                    </div>
                  </div>
                  
                  {/* Controls */}
                  <div className="flex justify-between items-end mt-4">
                    
                    {/* Quantity Selector - Minimalist */}
                    <div className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-lg px-3 py-1.5 border border-gray-200 dark:border-white/10 shadow-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}
                        className="text-gray-400 hover:text-amber-600 transition active:scale-90"
                      >
                        <FaMinus size={8} />
                      </button>
                      <span className="text-xs font-bold text-gray-900 dark:text-white w-3 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}
                        className="text-gray-400 hover:text-amber-600 transition active:scale-90"
                      >
                        <FaPlus size={8} />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                      className="group/btn flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FaTrashAlt size={10} className="group-hover/btn:animate-bounce" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* --- Footer / Checkout --- */}
        {cartItems.length > 0 && (
          <div className="p-8 border-t border-black/5 dark:border-white/10 bg-[#F4F4F0] dark:bg-[#0f0f0f]">
            
            {/* Subtotal */}
            <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="uppercase text-[10px] tracking-widest font-bold">Subtotal</span>
                    <span className="font-semibold text-gray-900 dark:text-white font-serif tracking-wide">${getCartTotal()}</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
                    <span className="uppercase text-[10px] tracking-widest font-bold">Shipping</span>
                    <span className="font-semibold text-gray-900 dark:text-white font-serif tracking-wide">
                        {total >= freeShippingThreshold ? 'Free' : 'Calculated next'}
                    </span>
                </div>
            </div>

            {/* Total */}
            <div className="flex justify-between items-end mb-8 pt-4 border-t border-dashed border-gray-300 dark:border-white/20">
              <span className="text-xl font-serif text-gray-900 dark:text-white">Total</span>
              <span className="text-3xl font-serif font-medium text-amber-600">${getCartTotal()}</span>
            </div>
            
           
            <button 
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              className="group w-full bg-gray-900 dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-4 shadow-xl shadow-gray-900/10"
            >
              Checkout <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[10px] text-gray-400 text-center mt-4 uppercase tracking-wider">
                Secure Checkout • Taxes included
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;