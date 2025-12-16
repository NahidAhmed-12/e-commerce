import React, { useState } from 'react';
import { FiHeart, FiEye, FiShoppingBag, FiPlus } from 'react-icons/fi'; 
import { FaStar } from 'react-icons/fa'; 
import ProductDetailsModal from './ProductDetailsModal';
import { useCart } from './CartContext'; 

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
      rating: (Math.random() * (5 - 4) + 4).toFixed(1)
    });
  }
  return batch;
};

const Products = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState(generateRandomBatch(1, 12));
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
    <div name="products" className="bg-[#F4F4F0] dark:bg-[#0f0f0f] transition-colors duration-500 w-full py-20 lg:py-24 relative overflow-hidden font-sans">
      
      {/* Background Ambience */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
        <span className="text-[20vw] font-black uppercase text-black dark:text-white leading-none whitespace-nowrap">
           New Arrivals • 
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center justify-center mb-12 text-center space-y-3">
            <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-amber-600"></span>
                <span className="text-amber-600 font-bold tracking-[0.25em] text-[10px] md:text-xs uppercase">
                    Weekly Selection
                </span>
                <span className="h-[1px] w-8 bg-amber-600"></span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-6xl text-gray-900 dark:text-white leading-[1.1]">
                Trending <span className="italic font-light text-gray-400">Drops</span>
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-6">
                {['All', 'Shoes', 'Electronics', 'Clothes', 'Accessories'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`relative pb-1 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
                    filter === cat 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-gray-400 dark:text-gray-500 hover:text-amber-600'
                    }`}
                >
                    {cat}
                    <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-amber-600 transition-all duration-300 rounded-full ${filter === cat ? 'w-full' : 'w-0'}`}></span>
                </button>
                ))}
            </div>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10 md:gap-y-12">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)} 
              className="group cursor-pointer flex flex-col h-full"
            >
              
              {/* Image Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-200 dark:bg-gray-800 mb-4 rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 dark:hover:shadow-none">
                
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                />
                
              
                <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Sale Badge */}
                <div className="absolute top-3 left-3 z-20">
                    {product.oldPrice > product.price && (
                        <span className="bg-amber-600 text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-md shadow-md">
                            Sale
                        </span>
                    )}
                </div>

                {/* Icons (Desktop: Slide in / Mobile: Always visible top-right) */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-20 md:translate-x-10 md:opacity-0 md:group-hover:translate-x-0 md:group-hover:opacity-100 transition-all duration-300 ease-out">
                    <button onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }} className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white/90 dark:bg-black/80 backdrop-blur text-black dark:text-white hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 transition-colors shadow-lg rounded-full">
                        <FiEye size={15}/>
                    </button>
                    <button className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center bg-white/90 dark:bg-black/80 backdrop-blur text-black dark:text-white hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 transition-colors shadow-lg rounded-full">
                        <FiHeart size={15}/>
                    </button>
                </div>

                <div className="hidden md:block absolute inset-x-4 bottom-4 transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-20">
                     <button 
                        onClick={(e) => handleQuickAdd(e, product)}
                        className="w-full py-3 bg-white/95 dark:bg-black/90 backdrop-blur-md text-gray-900 dark:text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-amber-600 hover:text-white transition-colors shadow-lg rounded-lg border border-white/10"
                    >
                        <FiShoppingBag size={14} /> Add to Cart
                    </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col space-y-1.5 px-1">
                
            
                <div className="flex justify-between items-center opacity-70">
                    <p className="text-[10px] font-bold uppercase tracking-widest truncate text-gray-500 dark:text-gray-400">
                        {product.category}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] font-medium bg-gray-100 dark:bg-white/5 px-2 py-0.5 rounded-full">
                        <FaStar className="text-amber-500" size={10} /> 
                        <span className="text-gray-900 dark:text-white">{product.rating}</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-lg text-gray-900 dark:text-white leading-tight group-hover:text-amber-600 transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-3 pt-1 mb-2">
                    <span className="font-sans font-bold text-lg md:text-base text-gray-900 dark:text-white">${product.price}</span>
                    {product.oldPrice > product.price && (
                        <span className="text-sm text-gray-400 line-through decoration-amber-600/50">${product.oldPrice}</span>
                    )}
                </div>

              
                <button 
                    onClick={(e) => handleQuickAdd(e, product)}
                    className="md:hidden w-full py-3 mt-auto bg-gray-900 dark:bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                    <FiShoppingBag size={14} /> Add to Cart
                </button>

              </div>
      
            </div>
          ))}
        </div>
        
       
        <div className="mt-16 md:mt-20 flex justify-center">
            {totalLoaded < 60 ? (
                <button 
                    onClick={handleLoadMore}
                    className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/10"
                >
                    <span className="font-bold tracking-widest uppercase text-xs flex items-center gap-3">
                        Load More Styles <FiPlus className="transition-transform group-hover:rotate-180" />
                    </span>
                </button>
            ) : (
                <div className="flex flex-col items-center gap-2 text-gray-400">
                    <span className="w-1 h-12 bg-gray-300 dark:bg-white/10 rounded-full"></span>
                    <p className="text-xs uppercase tracking-widest">End of Collection</p>
                </div>
            )}
        </div>

      </div>

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