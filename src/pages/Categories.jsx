import React from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const Categories = () => {
  const categories = [
    { 
      id: 1, 
      title: "Men's Aesthetic", 
      subtitle: "Modern Tailoring",
      count: "120+ Items",
      img: "/Categories/Male.avif" 
    },
    { 
      id: 2, 
      title: "Women's Vogue", 
      subtitle: "Evening & Casual",
      count: "240+ Items",
      img: "/Categories/Female.avif", 
    },
    { 
      id: 3, 
      title: "Urban Footwear", 
      subtitle: "Street Culture",
      count: "85+ Items",
      img: "/Categories/Sneakers.avif" 
    },
    { 
      id: 4, 
      title: "Fine Accessories", 
      subtitle: "The Final Touch",
      count: "60+ Items",
      img: "/Categories/Accessories.avif" 
    },
  ];

  return (
    <section className="py-24 bg-[#F4F4F0] dark:bg-[#0f0f0f] relative overflow-hidden font-sans transition-colors duration-500">
      
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/5 dark:bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <span className="h-[1px] w-8 bg-amber-600"></span>
                    <span className="text-amber-600 font-bold tracking-[0.25em] text-xs uppercase">
                        Curated Series
                    </span>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-gray-900 dark:text-white leading-[1.1]">
                    Browse by <span className="italic font-light text-gray-400">Category</span>
                </h2>
            </div>
            
            <button className="hidden md:flex items-center gap-3 px-6 py-3 border border-gray-300 dark:border-white/20 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group">
                <span className="text-xs font-bold tracking-widest uppercase">View Full Catalog</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ id, title, subtitle, count, img }) => (
            <div 
                key={id} 
                className="group relative h-[500px] w-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-500"
            >
            
              <div className="absolute inset-0 w-full h-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110 group-hover:rotate-1"
                  />
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

            
              <div className="absolute top-5 right-5 z-20 overflow-hidden">
                 <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 delay-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-white tracking-wide">{count}</span>
                 </div>
              </div>

           
              <div className="absolute inset-4 border border-white/0 group-hover:border-white/30 rounded-lg transition-all duration-500 scale-95 group-hover:scale-100 pointer-events-none z-20"></div>

             
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-30">
                
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Subtitle */}
                    <p className="text-amber-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {subtitle}
                    </p>

                    {/* Title */}
                    <div className="flex justify-between items-end border-b border-white/20 pb-4 mb-4 group-hover:border-white/40 transition-colors duration-500">
                        <h3 className="text-3xl font-serif text-white leading-none">
                            {title.split(" ")[0]} <br/>
                            <span className="italic font-light">{title.split(" ")[1]}</span>
                        </h3>
                        <span className="text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-200">
                            <FiArrowUpRight size={28} />
                        </span>
                    </div>
                    
                 
                    <div className="h-0 opacity-0 group-hover:h-10 group-hover:opacity-100 transition-all duration-500 ease-out delay-150 overflow-hidden">
                        <p className="text-sm text-gray-300 font-light">
                            Explore the new season collection with premium materials.
                        </p>
                    </div>
                </div>
              </div>

            
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 z-10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

            </div>
          ))}
        </div>

  
        <div className="mt-10 flex justify-center md:hidden">
            <button className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-b border-gray-900 dark:border-white pb-1">
                View All <FiArrowRight className="w-4 h-4" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Categories;