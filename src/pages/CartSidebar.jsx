import React from 'react';
import { FaTimes, FaTrash, FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa';
import { useCart } from './CartContext';

const CartSidebar = ({ onCheckout }) => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      ></div>

      {/* Sidebar Drawer */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Your Cart ({cartItems.length})</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-500 dark:text-gray-400 transition"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-6xl">🛒</p>
              <p className="text-gray-500 dark:text-gray-400 text-lg">Your cart is empty</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-orange-600 font-bold hover:underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex gap-4 animate-fadeIn">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-gray-800 dark:text-white line-clamp-1">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.selectedColor !== 'Default' && `Color: ${item.selectedColor} | `} 
                      Size: {item.selectedSize}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-full">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)}
                        className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-orange-600"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="text-sm font-bold w-4 text-center dark:text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)}
                        className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-orange-600"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    <p className="font-bold text-orange-600">${item.price * item.quantity}</p>
                  </div>
                </div>

                <button 
                  onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}
                  className="text-gray-400 hover:text-red-500 self-start p-1"
                >
                  <FaTrash size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer: Total & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">${getCartTotal()}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            
            <button 
              onClick={() => {
                setIsCartOpen(false);
                onCheckout();
              }}
              className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30"
            >
              Proceed to Checkout <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;