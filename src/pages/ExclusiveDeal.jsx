import React from 'react';

const ExclusiveDeal = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-20 my-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" 
            alt="Exclusive Deal" 
            className="w-full h-80 object-cover rounded-xl shadow-2xl shadow-primary/30 hover:scale-105 duration-500"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-primary font-bold text-lg tracking-widest">LIMITED TIME OFFER</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Special Edition <br /> Nike Air Jordan
          </h2>
          <p className="text-gray-400 text-lg">
            Experience ultimate comfort and style with our exclusive collection. 
            Get 30% off if you order within the next 24 hours. Don't miss out!
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 mt-4">
             {/* Countdown Styled Boxes (Static for demo) */}
             <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center w-20">
                <span className="font-bold text-2xl text-primary">05</span>
                <span className="text-xs text-gray-400">Days</span>
             </div>
             <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center w-20">
                <span className="font-bold text-2xl text-primary">12</span>
                <span className="text-xs text-gray-400">Hours</span>
             </div>
             <div className="bg-gray-800 p-3 rounded-lg flex flex-col items-center w-20">
                <span className="font-bold text-2xl text-primary">45</span>
                <span className="text-xs text-gray-400">Mins</span>
             </div>
          </div>

          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition duration-300 mt-6 shadow-lg shadow-primary/50">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeal;