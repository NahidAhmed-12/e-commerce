import React, { useState, useEffect } from 'react';
import { FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import ProductDetailsModal from './ProductDetailsModal';
import { useCart } from './CartContext'; // পাথটি আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী চেক করুন

// ১. বেস ডাটা (এই ১২টি প্রোডাক্টই আমরা ঘুরিয়ে ফিরিয়ে দেখাবো)
const baseProducts = [
  { name: 'Nike Air Max', category: 'Shoes', basePrice: 120, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Adidas Ultraboost', category: 'Shoes', basePrice: 140, img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop' },
  { name: 'Sony WH-1000XM', category: 'Electronics', basePrice: 299, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Apple Watch Series 8', category: 'Electronics', basePrice: 399, img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2064&auto=format&fit=crop' },
  { name: 'Denim Jacket', category: 'Clothes', basePrice: 85, img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Ray-Ban Aviator', category: 'Accessories', basePrice: 150, img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop' },
  { name: 'Leather Bag', category: 'Accessories', basePrice: 120, img: 'https://images.unsplash.com/photo-1559563458-52c69f8393e5?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Canon DSLR', category: 'Electronics', basePrice: 750, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Puma Running', category: 'Shoes', basePrice: 90, img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop' },
  { name: 'Classic Hoodie', category: 'Clothes', basePrice: 55, img: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Gaming Mouse', category: 'Electronics', basePrice: 45, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop' },
  { name: 'Mechanical Keyboard', category: 'Electronics', basePrice: 110, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop' },
];

// ২. শাফলিং এবং র‍্যান্ডমাইজেশন ফাংশন
const generateRandomBatch = (startId, count) => {
  let batch = [];
  // বেস ডাটাকে কপি করে শাফেল (ওলট-পালট) করা হচ্ছে
  const shuffledBase = [...baseProducts].sort(() => 0.5 - Math.random());

  // লুপ চালিয়ে ডাটা তৈরি করা হচ্ছে
  for (let i = 0; i < count; i++) {
    const productTemplate = shuffledBase[i % shuffledBase.length];
    
    // দাম এবং ডিসকাউন্ট কিছুটা র‍্যান্ডম করা হচ্ছে
    const randomPriceVariation = Math.floor(Math.random() * 20) - 10; 
    const finalPrice = Math.max(20, productTemplate.basePrice + randomPriceVariation);
    const oldPrice = finalPrice + Math.floor(Math.random() * 30 + 10);

    batch.push({
      ...productTemplate,
      id: startId + i, // ইউনিক আইডি
      price: finalPrice,
      oldPrice: oldPrice,
    });
  }
  return batch;
};

const Products = () => {
  // Context Hook
  const { addToCart } = useCart();

  // State
  const [products, setProducts] = useState(generateRandomBatch(1, 20));
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [totalLoaded, setTotalLoaded] = useState(20);

  // ফিল্টার লজিক
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(item => item.category === filter);

  // View More বাটন হ্যান্ডলার
  const handleLoadMore = () => {
    // নতুন ২০টি প্রোডাক্ট জেনারেট করে আগেরগুলোর সাথে যোগ করা হবে
    const newBatch = generateRandomBatch(totalLoaded + 1, 20);
    setProducts(prev => [...prev, ...newBatch]);
    setTotalLoaded(prev => prev + 20);
  };

  // কার্ডের ছোট বাটনে ক্লিক হ্যান্ডলার
  const handleQuickAdd = (e, product) => {
    e.stopPropagation(); // যাতে মোডাল ওপেন না হয়
    addToCart(product, 1, 'Default', 'Default'); // ডিফল্ট অপশনসহ কার্টে যোগ
  };

  return (
    <div name="products" className="bg-white dark:bg-gray-900 transition-colors duration-300 w-full py-20">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Trending <span className="text-orange-600">Collection</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Discover the latest trends picked just for you.</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['All', 'Shoes', 'Electronics', 'Clothes', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border border-orange-600 font-medium transition-all ${
                  filter === cat 
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/30' 
                  : 'text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProduct(product)} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:shadow-orange-500/10 duration-300 group overflow-hidden border border-gray-100 dark:border-gray-700 relative cursor-pointer"
            >
              
              {/* Sale Badge */}
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-md">
                -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
              </span>

              {/* Hover Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2 z-10 translate-x-12 group-hover:translate-x-0 duration-300">
                <button 
                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                  className="bg-white dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-white hover:bg-orange-600 hover:text-white transition shadow-sm"
                  title="Quick View"
                >
                   <FaEye/>
                </button>
                <button 
                  className="bg-white dark:bg-gray-700 p-2 rounded-full text-gray-600 dark:text-white hover:bg-orange-600 hover:text-white transition shadow-sm"
                  title="Add to Wishlist"
                >
                   <FaHeart/>
                </button>
              </div>

              {/* Image Container */}
              <div className="h-64 w-full overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1 tracking-wide">{product.category}</p>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white truncate group-hover:text-orange-600 transition-colors">
                    {product.name}
                </h3>
                
                <div className="flex gap-1 text-yellow-400 text-sm my-2">
                   {[...Array(5)].map((_, i) => <FaStar key={i} className={i < 4 ? "text-yellow-400" : "text-gray-300"} />)}
                </div>

                <div className="flex justify-between items-center mt-3">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-orange-600">${product.price}</span>
                        <span className="text-xs text-gray-400 line-through">${product.oldPrice}</span>
                    </div>
                    
                    {/* Quick Add to Cart Button */}
                    <button 
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm active:scale-90"
                      title="Add to Cart"
                    >
                        <FaShoppingCart size={18}/>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {totalLoaded < 60 && (
          <div className="text-center mt-12">
              <button 
                onClick={handleLoadMore}
                className="px-10 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:scale-105 duration-300 shadow-xl border-2 border-transparent hover:border-orange-500"
              >
                  View More Products
              </button>
          </div>
        )}

        {totalLoaded >= 60 && (
            <div className="text-center mt-12 text-gray-500 dark:text-gray-400">
                <p>You have reached the end of the collection!</p>
            </div>
        )}

      </div>

      {/* Details Modal Integration */}
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