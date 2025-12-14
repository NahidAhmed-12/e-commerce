import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { 
      id: 1, 
      title: "Men's Fashion", 
      count: "120+ Items",
      img: "/Categories/Male.avif" 
    },
    { 
      id: 2, 
      title: "Women's Wear", 
      count: "240+ Items",
      img: "/Categories/Female.avif", 
    },
    { 
      id: 3, 
      title: "Sneakers", 
      count: "85+ Items",
      img: "/Categories/Sneakers.avif" 
    },
    { 
      id: 4, 
      title: "Accessories", 
      count: "60+ Items",
      img: "/Categories/Accessories.avif" 
    },
  ];

  return (
    <section className="py-24 bg-[#FFFBF7] dark:bg-[#0f0f0f] relative overflow-hidden font-sans transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
       <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div className="text-center md:text-left">
                <span className="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] text-xs uppercase">
                    — Curated Collections
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white mt-3 leading-tight">
                    Shop by <span className="italic font-light text-orange-500">Category</span>
                </h2>
            </div>
            
      
            <button className="hidden md:flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b border-gray-300 dark:border-gray-700 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all duration-300 dark:text-gray-300">
                View All Collections <FaArrowRight className="w-3 h-3" />
            </button>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ id, title, count, img }) => (
            <div 
                key={id} 
                className="group relative h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                  />
              </div>

           
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            
              <div className="absolute inset-4 border border-white/20 rounded-xl opacity-50 group-hover:opacity-100 group-hover:inset-3 transition-all duration-500 pointer-events-none"></div>

            
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                
            
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 rounded-full opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {count}
                </div>

               
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-1 leading-snug">
                    {title}
                    </h3>
                    
                    <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-500 ease-out">
                        <p className="text-orange-300 text-sm font-bold tracking-wide flex items-center gap-2 pt-2">
                            Explore Now <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      
        <div className="mt-8 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b border-gray-300 pb-1 hover:text-orange-600 transition-colors">
                View All <FaArrowRight className="w-3 h-3" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Categories;