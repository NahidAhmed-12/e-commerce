import React, { useState, useEffect } from 'react';
import { 
  FiX, FiShoppingBag, FiHeart, FiCheck, FiStar, FiTruck, FiRefreshCw, FiArrowRight 
} from "react-icons/fi";
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
    <div className={`fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      

      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-500" 
        onClick={handleClose}
      ></div>

    
      <div className={`
          w-full h-full md:h-[90vh] max-w-6xl 
          bg-[#F4F4F0] dark:bg-[#0f0f0f] md:rounded-2xl shadow-2xl relative 
          flex flex-col md:flex-row 
          overflow-y-auto md:overflow-hidden 
          transition-all duration-500 transform 
          ${isVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-12'}
      `}>
        
        {/* Close Button */}
        <button 
          onClick={handleClose} 
          className="fixed md:absolute top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/40 dark:bg-black/40 backdrop-blur-md border border-gray-200 dark:border-white/10 flex items-center justify-center hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300 group shadow-lg"
        >
          <FiX size={20} className="text-gray-800 dark:text-white group-hover:text-white" />
        </button>


       
        <div className="w-full md:w-1/2 lg:w-[45%] h-[50vh] md:h-full flex-shrink-0 bg-gray-200 dark:bg-[#151515] relative flex flex-col items-center justify-center p-0 md:p-6 lg:p-10">
            
            {/* Main Image Wrapper */}
            <div className="relative w-full h-full md:aspect-[3/4] md:rounded-xl overflow-hidden shadow-none md:shadow-lg animate-imageReveal">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Price Tag Overlay */}
                <div className="absolute top-4 left-4">
                     <div className="px-4 py-2 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/40 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                        <span className="text-sm font-bold text-white tracking-wide">In Stock</span>
                     </div>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="absolute bottom-4 md:bottom-10 flex gap-3 z-20">
                {thumbnails.map((thumb, index) => (
                  <div 
                    key={index} 
                    onClick={() => setMainImage(thumb)}
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 shadow-md ${mainImage === thumb ? 'border-amber-600 scale-105' : 'border-white/50 opacity-70 hover:opacity-100'}`}
                  >
                    <img src={thumb} alt="thumb" className="w-full h-full object-cover" />
                  </div>
                ))}
            </div>
        </div>


      
        <div className="w-full md:w-1/2 lg:w-[55%] md:h-full md:overflow-y-auto bg-[#F4F4F0] dark:bg-[#0f0f0f] p-6 md:p-10 scrollbar-hide pb-10">
            
            <div className="max-w-xl mx-auto md:mx-0 flex flex-col h-full justify-center">
                
                {/* Category Tag */}
                <div className="flex items-center gap-3 mb-4 animate-slideInRight">
                   <span className="px-3 py-1 text-[10px] font-bold tracking-[0.2em] uppercase border border-amber-600/30 text-amber-700 dark:text-amber-500 rounded-md bg-amber-50 dark:bg-amber-900/10">
                      {product.category || 'New Arrival'}
                   </span>
                   {product.oldPrice && <span className="text-xs text-red-500 line-through font-medium">${product.oldPrice}</span>}
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-5xl font-serif font-medium text-gray-900 dark:text-white leading-[1.2] md:leading-[1.1] mb-3">
                  {product.name}
                </h2>

            
                <div className="flex items-center gap-2 mb-6 text-sm">
                    <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => <FiStar key={i} className="fill-current" size={14} />)}
                    </div>
                    <span className="text-gray-500 dark:text-gray-400 font-medium ml-2 border-b border-gray-300 dark:border-gray-700 pb-0.5">
                        4.9 (128 Reviews)
                    </span>
                </div>

                {/* Price */}
                <div className="text-3xl md:text-4xl font-serif text-gray-900 dark:text-white mb-8 flex items-baseline gap-2">
                    ${product.price}
                    <span className="text-base text-gray-500 font-sans font-normal">USD</span>
                </div>

                
                <div className="space-y-6 mb-8 border-t border-gray-200 dark:border-white/10 pt-6">
                    
                    {/* Colors */}
                    <div>
                        <span className="text-[10px] uppercase text-gray-400 tracking-wider font-bold mb-3 block">Select Material / Color</span>
                        <div className="flex gap-3">
                          {['red', 'blue', 'black', 'green'].map(color => (
                            <button 
                              key={color}
                              onClick={() => setSelectedColor(color)}
                              className={`w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${selectedColor === color ? 'ring-2 ring-offset-2 ring-amber-600 ring-offset-[#F4F4F0] dark:ring-offset-[#0f0f0f] scale-110' : 'hover:scale-110 opacity-80 hover:opacity-100'}`}
                              style={{ backgroundColor: color === 'black' ? '#222' : color === 'green' ? '#3B5945' : color === 'blue' ? '#35485E' : '#8B3A3A' }}
                            >
                               {selectedColor === color && <FiCheck className="text-white text-xs"/>}
                            </button>
                          ))}
                        </div>
                    </div>

                    {/* Sizes */}
                    <div>
                        <div className="flex justify-between items-center mb-3">
                             <span className="text-[10px] uppercase text-gray-400 tracking-wider font-bold">Select Size</span>
                             <button className="text-[10px] font-bold text-amber-600 hover:text-amber-700 uppercase tracking-wider underline decoration-amber-600/30 underline-offset-4">
                               Size Guide
                             </button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {['S', 'M', 'L', 'XL'].map(size => (
                            <button 
                              key={size}
                              onClick={() => setSelectedSize(size)}
                              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 border ${
                                selectedSize === size 
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg' 
                                : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-amber-600 hover:text-amber-600 bg-transparent'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                    </div>
                </div>

                
                <div className="flex flex-row gap-3 md:gap-4 mb-8">
                    {/* Quantity Selector */}
                    <div className="flex items-center bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl px-2 h-12 md:h-14 w-auto md:w-auto">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-8 md:w-10 h-full text-gray-500 hover:text-amber-600 transition-colors">-</button>
                        <span className="w-6 md:w-8 text-center font-bold text-gray-900 dark:text-white text-sm md:text-base">{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className="w-8 md:w-10 h-full text-gray-500 hover:text-amber-600 transition-colors">+</button>
                    </div>

                  
                    <button 
                      onClick={handleAddToCart}
                      disabled={isAdded}
                      className={`group flex-1 h-12 md:h-14 px-4 md:px-8 rounded-xl transition-all hover:scale-[1.02] active:scale-95 shadow-xl ${
                          isAdded 
                          ? 'bg-green-600 shadow-green-900/20' 
                          : 'bg-gray-900 dark:bg-white shadow-gray-900/20'
                      }`}
                    >
                      <span className={`font-bold tracking-widest uppercase text-[10px] md:text-xs flex items-center justify-center gap-2 md:gap-3 h-full ${isAdded ? 'text-white' : 'text-white dark:text-black'}`}>
                        {isAdded ? (
                            <>Added <FiCheck size={18}/></>
                        ) : (
                            <>Add to Cart <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/></>
                        )}
                      </span>
                    </button>

                  
                    <button className="h-12 w-12 md:h-14 md:w-14 flex-shrink-0 flex items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-200 bg-transparent transition-all">
                        <FiHeart size={20} />
                    </button>
                </div>

                {/* Info Tabs */}
                <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                    <div className="flex gap-6 md:gap-8 mb-4 overflow-x-auto scrollbar-hide">
                        {['Description', 'Details', 'Delivery'].map(tab => (
                             <button
                                key={tab}
                                onClick={() => setActiveTab(tab.toLowerCase())}
                                className={`text-xs font-bold uppercase tracking-wider pb-2 transition-all relative flex-shrink-0 ${
                                    activeTab === tab.toLowerCase() 
                                    ? 'text-gray-900 dark:text-white' 
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                             >
                                {tab}
                                {activeTab === tab.toLowerCase() && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600"></span>}
                             </button>
                        ))}
                    </div>
                    
                    <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed min-h-[60px]">
                        {activeTab === 'description' && (
                            <p className="animate-fadeIn">
                                Experience the ultimate comfort with our {product.name}. Designed specifically for the golden hour, featuring lightweight breathable fabrics.
                            </p>
                        )}
                        {activeTab === 'details' && (
                            <ul className="list-disc list-inside animate-fadeIn space-y-1 text-xs">
                                <li>Material: 100% Organic Linen</li>
                                <li>Fit: Relaxed / Regular</li>
                                <li>Origin: Crafted in Italy</li>
                            </ul>
                        )}
                        {activeTab === 'delivery' && (
                            <div className="animate-fadeIn flex flex-col gap-3 text-xs">
                                <div className="flex items-center gap-3">
                                    <FiTruck className="text-amber-600" size={16}/> <span>Free worldwide shipping on orders over $250</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FiRefreshCw className="text-amber-600" size={16}/> <span>30-day return policy, no questions asked.</span>
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