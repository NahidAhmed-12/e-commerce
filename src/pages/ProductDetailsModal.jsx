import React, { useState, useEffect } from 'react';
import { 
  FaTimes, FaStar, FaShoppingCart, FaHeart, 
  FaTruck, FaUndo, FaShareAlt, FaCheckCircle, FaRuler 
} from 'react-icons/fa';
import { useCart } from './CartContext'; // পাথ চেক করুন

const ProductDetailsModal = ({ product, onClose }) => {
  const { addToCart } = useCart(); // Hook ব্যবহার করা হচ্ছে

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('red');
  const [isVisible, setIsVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // বাটন অ্যানিমেশন স্টেট

  // Animation & Scroll Lock
  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // কার্টে অ্যাড করার ফাংশন
  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setIsAdded(true);
    // ২ সেকেন্ড পর বাটন আগের অবস্থায় ফিরবে
    setTimeout(() => setIsAdded(false), 2000); 
  };

  if (!product) return null;

  const thumbnails = [product.img, product.img, product.img, product.img];

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm" 
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div className={`bg-white dark:bg-gray-900 w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col transition-all duration-300 transform ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'}`}>
        
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-20">
          <button 
            onClick={handleClose} 
            className="bg-white/80 dark:bg-gray-800/80 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-red-500 hover:rotate-90 transition-all duration-300 shadow-lg"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto scrollbar-hide flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
            
            {/* Left Column: Image Gallery */}
            <div className="bg-gray-100 dark:bg-gray-800 p-6 flex flex-col items-center justify-center h-full">
              <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden shadow-lg mb-4 group">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {product.oldPrice && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    SALE
                  </span>
                )}
              </div>
              
              <div className="flex gap-4 overflow-x-auto w-full max-w-md pb-2">
                {thumbnails.map((thumb, index) => (
                  <div key={index} className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500 cursor-pointer transition-all">
                    <img src={thumb} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="p-6 lg:p-10 bg-white dark:bg-gray-900 flex flex-col">
              
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Home</span> / <span>{product.category}</span> / <span className="text-orange-600 font-medium">In Stock</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
                {product.name}
              </h2>
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                 </div>
                 <span className="text-gray-500 text-sm">(4.8 Ratings)</span>
                 <span className="text-green-500 text-sm font-semibold flex items-center gap-1"><FaCheckCircle/> Verified</span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                 <span className="text-5xl font-bold text-orange-600">${product.price}</span>
                 {product.oldPrice && (
                   <div className="flex flex-col mb-2">
                      <span className="text-lg text-gray-400 line-through">${product.oldPrice}</span>
                      <span className="text-xs text-red-500 font-bold">You save ${(product.oldPrice - product.price).toFixed(2)}</span>
                   </div>
                 )}
              </div>

              <hr className="border-gray-100 dark:border-gray-800 mb-6"/>

              {/* Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                   <h3 className="font-bold text-gray-800 dark:text-white mb-3">Color: <span className="text-gray-500 font-normal capitalize">{selectedColor}</span></h3>
                   <div className="flex gap-3">
                      {['red', 'blue', 'black', 'green'].map(color => (
                        <button 
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-orange-600 scale-110' : 'border-transparent'}`}
                          style={{ backgroundColor: color === 'black' ? '#333' : color === 'green' ? '#10B981' : color === 'blue' ? '#3B82F6' : '#EF4444' }}
                        />
                      ))}
                   </div>
                </div>

                <div>
                  <div className="flex justify-between">
                     <h3 className="font-bold text-gray-800 dark:text-white mb-3">Size</h3>
                     <button className="text-xs text-orange-600 flex items-center gap-1 hover:underline"><FaRuler/> Size Guide</button>
                  </div>
                   <div className="flex gap-2">
                      {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                        <button 
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 rounded-lg font-medium text-sm border transition-all ${
                            selectedSize === size 
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900' 
                            : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-orange-500'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                   </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                 <div className="flex items-center justify-between border border-gray-300 dark:border-gray-700 rounded-full w-full sm:w-32 bg-gray-50 dark:bg-gray-800">
                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-full text-xl text-gray-600 dark:text-white hover:text-orange-600 transition">-</button>
                    <span className="font-bold text-gray-800 dark:text-white">{quantity}</span>
                    <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-full text-xl text-gray-600 dark:text-white hover:text-orange-600 transition">+</button>
                 </div>
                 
                 {/* Main Add to Cart Button */}
                 <button 
                   onClick={handleAddToCart}
                   className={`flex-1 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 ${
                     isAdded ? 'bg-green-600 text-white' : 'bg-gradient-to-r from-orange-600 to-orange-500 text-white'
                   }`}
                 >
                   {isAdded ? (
                     <> <FaCheckCircle /> Added to Cart </>
                   ) : (
                     <> <FaShoppingCart /> Add to Cart </>
                   )}
                 </button>

                 <div className="flex gap-2">
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-gray-800 transition-all">
                      <FaHeart size={20} />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 text-gray-500 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all">
                      <FaShareAlt size={18} />
                    </button>
                 </div>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full"><FaTruck/></div>
                     <div>
                       <p className="text-sm font-bold text-gray-800 dark:text-white">Free Delivery</p>
                       <p className="text-xs text-gray-500">Orders over $200</p>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-full"><FaUndo/></div>
                     <div>
                       <p className="text-sm font-bold text-gray-800 dark:text-white">Easy Returns</p>
                       <p className="text-xs text-gray-500">30 days policy</p>
                     </div>
                  </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="p-6 lg:p-10 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
             <div className="flex flex-wrap gap-8 border-b border-gray-300 dark:border-gray-700 mb-6">
                {['Description', 'Reviews', 'Shipping Info'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`pb-3 font-bold text-sm uppercase tracking-wide transition-all relative ${
                      activeTab === tab.toLowerCase() 
                      ? 'text-orange-600' 
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                    }`}
                  >
                    {tab}
                    {activeTab === tab.toLowerCase() && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-full"></span>
                    )}
                  </button>
                ))}
             </div>

             <div className="animate-fadeIn">
               {activeTab === 'description' && (
                 <div className="text-gray-600 dark:text-gray-300 space-y-4">
                   <p>Elevate your style with the <strong>{product.name}</strong>. Crafted from premium materials, this product ensures durability and comfort for long-term use.</p>
                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm mt-4">
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500"/> 100% Original Product</li>
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500"/> High-quality fabric/material</li>
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500"/> Modern and ergonomic design</li>
                     <li className="flex items-center gap-2"><FaCheckCircle className="text-orange-500"/> Available in multiple colors</li>
                   </ul>
                 </div>
               )}

               {activeTab === 'reviews' && (
                 <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                           <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600">JD</div>
                           <div>
                              <h4 className="font-bold text-gray-800 dark:text-white text-sm">John Doe</h4>
                              <div className="flex text-yellow-400 text-xs mt-1"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                           </div>
                        </div>
                        <span className="text-xs text-gray-400">2 days ago</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">"Absolutely amazing! The product quality exceeded my expectations. Delivery was super fast too."</p>
                    </div>
                 </div>
               )}

                {activeTab === 'shipping info' && (
                 <div className="text-gray-600 dark:text-gray-300 text-sm">
                    <p>We deliver worldwide. Standard shipping takes <strong>3-5 business days</strong>. Express shipping is available at checkout.</p>
                 </div>
               )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;