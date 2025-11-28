import React, { useState, useEffect } from 'react';
import { 
  FaTimes, FaStar, FaShoppingCart, FaHeart, 
  FaTruck, FaUndo, FaRuler, FaCheck 
} from 'react-icons/fa';
import { useCart } from './CartContext'; 

const ProductDetailsModal = ({ product, onClose }) => {
  const { addToCart } = useCart(); 

  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('red');
  const [isVisible, setIsVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(false); 
  const [mainImage, setMainImage] = useState(product?.img);

  useEffect(() => {
    if(product) setMainImage(product.img);
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000); 
  };

  if (!product) return null;

  const thumbnails = [product.img, product.img, product.img, product.img];

  return (
    <div className={`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 transition-all duration-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500" 
        onClick={handleClose}
      ></div>

      {/* Main Modal Card */}
      <div className={`w-full h-full sm:h-auto sm:max-h-[95vh] max-w-6xl bg-[#FFFBF7] dark:bg-[#0f0f0f] sm:rounded-3xl shadow-2xl relative flex flex-col sm:flex-row transition-all duration-500 transform overflow-y-auto sm:overflow-hidden ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}`}>
        
        {/* Background Ambient Glows */}
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[80px] pointer-events-none"></div>

        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[60] p-2 rounded-full bg-white/20 sm:bg-white/40 dark:bg-black/40 hover:bg-orange-600 hover:text-white backdrop-blur-md border border-white/20 transition-all duration-300 group"
        >
          <FaTimes size={20} className="text-white sm:text-gray-800 dark:text-white group-hover:text-white transition-transform duration-300 group-hover:rotate-90" />
        </button>

        {/* --- Left Side: Gallery Section --- */}
        {/* z-0 ensures it stays behind. sticky top-0 creates the parallax effect */}
        <div className="w-full h-[65vh] sm:h-auto sm:w-1/2 lg:w-[45%] bg-gray-100 sm:bg-white/50 dark:bg-white/5 sticky top-0 sm:relative flex flex-col items-center justify-center p-0 sm:p-6 lg:p-10 shrink-0 z-0 sm:z-auto">
            
            {/* Main Image */}
            <div className="relative w-full h-full sm:h-auto sm:max-w-md sm:aspect-[3/4] rounded-none sm:rounded-2xl overflow-hidden sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-black/50 z-10">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Sale Tag */}
                {product.oldPrice && (
                  <div className="absolute top-4 left-0 sm:top-4 sm:left-0 bg-orange-600 text-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest shadow-lg">
                    On Sale
                  </div>
                )}
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-16 left-0 right-0 sm:static sm:translate-x-0 sm:mt-6 flex gap-3 z-20 overflow-x-auto sm:overflow-visible justify-start sm:justify-center px-4 sm:px-0 no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                {thumbnails.map((thumb, index) => (
                  <div 
                    key={index} 
                    onClick={() => setMainImage(thumb)}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 flex-shrink-0 backdrop-blur-sm ${mainImage === thumb ? 'border-orange-500 scale-110 shadow-md' : 'border-white/50 sm:border-transparent opacity-70 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                ))}
            </div>
        </div>

        {/* --- Right Side: Content Section --- */}
        {/* FIX: min-h-screen added to ensure background covers the sticky image completely when scrolling down. 
            bg-[#FFFBF7] (solid color) ensures opacity. */}
        <div className="w-full sm:w-1/2 lg:w-[55%] relative z-30 bg-[#FFFBF7] dark:bg-[#0f0f0f] -mt-8 sm:mt-0 rounded-t-[2rem] sm:rounded-none px-6 py-8 sm:p-12 overflow-visible sm:overflow-y-auto scrollbar-thin scrollbar-thumb-orange-200 dark:scrollbar-thumb-orange-900 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] sm:shadow-none min-h-screen sm:min-h-0">
            
            {/* Mobile Drag Indicator */}
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full mx-auto mb-6 sm:hidden"></div>

            <div className="max-w-xl mx-auto sm:mx-0">
                
                {/* Breadcrumb / Category */}
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="h-px w-8 bg-orange-500"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
                      {product.category || 'Collection'}
                    </span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white leading-tight mb-2">
                  {product.name}
                </h2>

                {/* Rating & Review */}
                <div className="flex items-center gap-4 mb-6 sm:mb-8 text-sm">
                    <div className="flex text-orange-500 gap-0.5">
                        {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                    </div>
                    <span className="text-gray-400 font-light">4.9 (245 Reviews)</span>
                </div>

                {/* Price Display */}
                <div className="flex items-end gap-4 mb-6 sm:mb-8">
                    <span className="font-serif text-3xl sm:text-4xl text-gray-900 dark:text-white">
                      ${product.price}
                    </span>
                    {product.oldPrice && (
                       <span className="text-lg sm:text-xl text-gray-400 line-through mb-1 font-light">
                         ${product.oldPrice}
                       </span>
                    )}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-gray-200 via-gray-100 to-transparent dark:from-gray-800 dark:via-gray-800 mb-6 sm:mb-8"></div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-8">
                    
                    {/* Color Selector */}
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Color selection</span>
                        <div className="flex gap-3">
                          {['red', 'blue', 'black', 'green'].map(color => (
                            <button 
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`w-8 h-8 rounded-full relative transition-all duration-300 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-orange-500 ring-offset-[#FFFBF7] dark:ring-offset-[#0f0f0f] scale-110' : 'hover:scale-110'}`}
                              style={{ backgroundColor: color === 'black' ? '#222' : color === 'green' ? '#10B981' : color === 'blue' ? '#3B82F6' : '#EF4444' }}
                            >
                               {selectedColor === color && <FaCheck className="text-white text-[10px] absolute inset-0 m-auto"/>}
                            </button>
                          ))}
                        </div>
                    </div>

                    {/* Size Selector */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                             <span className="block text-xs font-bold uppercase tracking-wider text-gray-500">Size</span>
                             <button className="text-[10px] font-bold text-orange-600 uppercase tracking-wide border-b border-orange-600 hover:text-orange-700 flex items-center gap-1">
                               <FaRuler size={10}/> Guide
                             </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['S', 'M', 'L', 'XL'].map(size => (
                            <button 
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`w-10 h-10 rounded-full text-xs font-bold transition-all duration-300 flex items-center justify-center border ${
                                selectedSize === size 
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg' 
                                : 'border-gray-200 dark:border-gray-700 text-gray-500 hover:border-orange-500 hover:text-orange-600 bg-transparent'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-4 mb-8 relative z-10">
                    <div className="flex gap-3 sm:gap-4">
                        {/* Quantity */}
                        <div className="flex items-center bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg px-2 h-14">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 h-full text-gray-500 hover:text-orange-600">-</button>
                            <span className="w-6 sm:w-8 text-center font-bold text-gray-900 dark:text-white">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="w-8 h-full text-gray-500 hover:text-orange-600">+</button>
                        </div>

                        {/* Add to Cart Button */}
                        <button 
                          onClick={handleAddToCart}
                          className={`flex-1 h-14 rounded-lg font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-orange-600/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 ${
                            isAdded ? 'bg-green-600 text-white' : 'bg-orange-600 hover:bg-orange-700 text-white'
                          }`}
                        >
                          {isAdded ? (
                            <> <FaCheck className="mb-1"/> Added </>
                          ) : (
                            <> <FaShoppingCart className="mb-1"/> Add to Cart </>
                          )}
                        </button>

                        {/* Wishlist */}
                        <button className="h-14 w-14 flex flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-200 bg-white dark:bg-[#1a1a1a] transition-all">
                            <FaHeart size={20} />
                        </button>
                    </div>
                </div>

                {/* Tabs / Info Section */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-6 pb-10 sm:pb-0 bg-[#FFFBF7] dark:bg-[#0f0f0f]">
                    <div className="flex gap-6 sm:gap-8 mb-4">
                        {['Description', 'Details', 'Delivery'].map(tab => (
                             <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`text-sm font-bold uppercase tracking-wider pb-2 transition-all relative ${
                                    activeTab === tab.toLowerCase() 
                                    ? 'text-gray-900 dark:text-white' 
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                             >
                                {tab}
                                {activeTab === tab.toLowerCase() && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600"></span>}
                             </button>
                        ))}
                    </div>
                    
                    <div className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light min-h-[80px]">
                        {activeTab === 'description' && (
                            <p className="animate-fadeIn">
                                Elevate your everyday look with the {product.name}. A masterpiece of the SS/24 Collection, designed for the modern individual who refuses to compromise on style or comfort.
                            </p>
                        )}
                        {activeTab === 'details' && (
                            <ul className="list-disc list-inside animate-fadeIn space-y-1">
                                <li>Premium cotton blend material</li>
                                <li>Sustainable manufacturing process</li>
                                <li>Available in limited edition colors</li>
                            </ul>
                        )}
                        {activeTab === 'delivery' && (
                            <div className="animate-fadeIn flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <FaTruck className="text-orange-500"/> <span>Free shipping on orders over $200</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUndo className="text-orange-500"/> <span>30-day easy return policy</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;