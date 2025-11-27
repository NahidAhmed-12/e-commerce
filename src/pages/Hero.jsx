import React from 'react';

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full w-full md:w-1/2 space-y-5">
          <h2 className="text-4xl sm:text-7xl font-bold text-white leading-tight">
            New Summer <br />
            <span className="text-primary">Collection</span> 2024
          </h2>
          <p className="text-gray-400 py-4 max-w-md text-lg">
            Discover the latest trends in fashion. Get up to 50% off on all new arrivals. 
            Quality meets comfort in our exclusive range.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-500 to-red-500 cursor-pointer hover:scale-105 duration-300 shadow-lg shadow-orange-500/50">
              Shop Now
              <span className="group-hover:rotate-90 duration-300 ml-2">
                ➜
              </span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
            {/* Note: You can replace this with a transparent PNG of a shoe or model */}
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
            alt="Nike Shoe"
            className="rounded-2xl mx-auto w-2/3 md:w-full object-cover shadow-2xl shadow-orange-500/20 hover:scale-105 duration-500 rotate-6 hover:rotate-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;