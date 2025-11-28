import React, { useState } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaEye, FaPlus } from 'react-icons/fa';
import ProductDetailsModal from './ProductDetailsModal';
import { useCart } from './CartContext'; 

// ১. বেস ডাটা (স্যাম্পল ইমেজগুলো ফ্যাশন ওরিয়েন্টেড রাখা ভালো)
const baseProducts = [
  { name: 'Nike Air Max', category: 'Shoes', basePrice: 120, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Urban Trench Coat', category: 'Clothes', basePrice: 180, img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1936&auto=format&fit=crop' },
  { name: 'Sony WH-1000XM', category: 'Electronics', basePrice: 299, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Classic Timepiece', category: 'Accessories', basePrice: 399, img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop' },
  { name: 'Denim Jacket', category: 'Clothes', basePrice: 85, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Ray-Ban Aviator', category: 'Accessories', basePrice: 150, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop' },
  { name: 'Leather Satchel', category: 'Accessories', basePrice: 120, img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069&auto=format&fit=crop' },
  { name: 'Vintage Camera', category: 'Electronics', basePrice: 750, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Puma Running', category: 'Shoes', basePrice: 90, img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Essential Hoodie', category: 'Clothes', basePrice: 55, img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Smart Speaker', category: 'Electronics', basePrice: 45, img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=2137&auto=format&fit=crop' },
  { name: 'Mechanical Keyboard', category: 'Electronics', basePrice: 110, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop' },
];

// ২. শাফলিং এবং র‍্যান্ডমাইজেশন ফাংশন (Logic Unchanged)
const generateRandomBatch = (startId, count) => {
  let batch = [];
  const shuffledBase = [...baseProducts].sort(() => 0.5 - Math.random());

  for (let i = 0; i < count; i++) {
    const productTemplate = shuffledBase[i % shuffledBase.length];
    const randomPriceVariation = Math.floor(Math.random() * 20) - 10; 
    const finalPrice = Math.max(20, productTemplate.basePrice + randomPriceVariation);
    const oldPrice = finalPrice + Math.floor(Math.random() * 30 + 10);

    batch.push({
      ...productTemplate,
      id: startId + i,
      price: finalPrice,
      oldPrice: oldPrice,
      rating: (Math.random() * (5 - 4) + 4).toFixed(1) // Random rating 4.0 - 5.0
    });
  }
  return batch;
};

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(generateRandomBatch(1, 12)); // Initially 12 feels cleaner
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [totalLoaded, setTotalLoaded] = useState(12);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(item => item.category === filter);

  const handleLoadMore = () => {
    const newBatch = generateRandomBatch(totalLoaded + 1, 8);
    setProducts(prev => [...prev, ...newBatch]);
    setTotalLoaded(prev => prev + 8);
  };

  const handleQuickAdd = (e, product) => {
    e.stopPropagation();
    addToCart(product, 1, 'Default', 'Default');
  };

  return (
    <div name="products" className="bg-[#FFFBF7] dark:bg-[#0f0f0f] transition-colors duration-300 w-full py-24 relative overflow-hidden font-sans">
      
      {/* Decorative Background Blur (Top Left) */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
            <span className="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] text-xs uppercase mb-3">
                — Weekly Selection
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 dark:text-white mb-6">
                Trending <span className="italic font-light text-orange-500">Arrivals</span>
            </h2>
            
            {/* Minimalist Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-8 mt-4">
                {['All', 'Shoes', 'Electronics', 'Clothes', 'Accessories'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    filter === cat 
                    ? 'text-orange-600' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                >
                    {cat}
                    {/* Active Underline Indicator */}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-orange-600 transition-all duration-300 ${filter === cat ? 'w-1/2' : 'w-0'}`}></span>
                </button>
                ))}
            </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)} 
              className="group relative cursor-pointer"
            >
              
              {/* Image Container (Portrait Aspect Ratio 3:4) */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:shadow-orange-900/10 dark:group-hover:shadow-black/50">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay (Subtle Darkening) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {product.oldPrice > product.price && (
                        <span className="bg-white/90 dark:bg-black/80 backdrop-blur-sm text-gray-900 dark:text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                            Sale
                        </span>
                    )}
                </div>

                {/* Floating Action Buttons (Right Side) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                        className="w-9 h-9 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                        title="Quick View"
                    >
                        <FaEye size={14}/>
                    </button>
                    <button 
                        className="w-9 h-9 flex items-center justify-center bg-white text-gray-800 rounded-full shadow-lg hover:bg-orange-600 hover:text-white transition-colors duration-300"
                        title="Wishlist"
                    >
                        <FaHeart size={14}/>
                    </button>
                </div>

                {/* Quick Add Button (Bottom Center of Image) */}
                <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-white/90 dark:bg-black/80 backdrop-blur-md text-gray-900 dark:text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-orange-600 hover:text-white transition-all duration-500 w-[80%] text-center flex items-center justify-center gap-2"
                >
                    <FaPlus size={10} /> Add to Cart
                </button>
              </div>

              {/* Product Info (Below Image) */}
              <div className="mt-4 text-center lg:text-left">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                        <h3 className="font-serif text-lg text-gray-900 dark:text-white group-hover:text-orange-600 transition-colors duration-300">
                            {product.name}
                        </h3>
                    </div>
                    {/* Rating Star */}
                    <div className="flex items-center gap-1 text-xs text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-1.5 py-0.5 rounded hidden lg:flex">
                        <FaStar /> {product.rating}
                    </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 mt-2">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">${product.price}</span>
                    {product.oldPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through font-light">${product.oldPrice}</span>
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="mt-20 text-center">
            {totalLoaded < 60 ? (
                <button 
                    onClick={handleLoadMore}
                    className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-white focus:outline-none"
                >
                    <span className="mr-2">Load More Styles</span>
                    <FaPlus className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                </button>
            ) : (
                <p className="text-gray-500 dark:text-gray-400 italic font-serif">You've reached the end of the collection.</p>
            )}
        </div>

      </div>

      {/* Details Modal */}
      {selectedProduct && (
        <ProductDetailsModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}

    </div>
  );
};

export default Products;