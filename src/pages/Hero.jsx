import React from 'react';

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-20"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-full px-4 py-12 md:py-0">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 space-y-6 text-center md:text-left pt-10 md:pt-0">
          <p className="text-orange-600 font-bold tracking-widest uppercase">New Arrivals</p>
          <h2 className="text-5xl sm:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Discover Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Style Today
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto md:mx-0">
            Upgrade your wardrobe with our exclusive summer collection. 
            Premium quality, sustainable materials, and modern designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="group text-white px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600 font-bold shadow-lg shadow-orange-500/40 hover:scale-105 duration-300 flex items-center justify-center gap-2">
              Shop Now 
              <span className="group-hover:translate-x-1 duration-300">➜</span>
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-gray-800 duration-300">
              View Collection
            </button>
          </div>
          
          {/* Stats */}
          <div className="flex gap-8 justify-center md:justify-start pt-6 border-t border-gray-200 dark:border-gray-700 mt-6">
             <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">50k+</p>
                <p className="text-sm text-gray-500">Happy Customers</p>
             </div>
             <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
                <p className="text-sm text-gray-500">Authentic Products</p>
             </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Background Blob Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/20 rounded-full blur-[100px] -z-10"></div>
          
          <img
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop"
            alt="Fashion Model"
            className="w-4/5 md:w-full max-w-md object-contain drop-shadow-2xl hover:scale-105 duration-500 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;