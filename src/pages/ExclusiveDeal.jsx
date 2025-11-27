import React from 'react';

const ExclusiveDeal = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 text-white relative overflow-hidden">
      
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 group-hover:rotate-3 transition-all duration-500 opacity-30"></div>
          <img 
            src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" 
            alt="Exclusive Deal" 
            className="w-full h-auto object-cover rounded-2xl shadow-2xl relative z-10 transform group-hover:scale-105 duration-500"
          />
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <span className="bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">Deal of the Month</span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Nike Air Jordan <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Limited Edition
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg">
            Experience the fusion of style and comfort. Only 50 pairs left in stock at this exclusive price. Grab yours before the timer runs out!
          </p>

          {/* Timer */}
          <div className="flex justify-center md:justify-start gap-4">
             {['02 Days', '14 Hours', '45 Mins', '12 Secs'].map((time, index) => (
                 <div key={index} className="flex flex-col items-center bg-gray-800/80 backdrop-blur px-4 py-2 rounded-lg border border-gray-700">
                    <span className="font-bold text-xl md:text-2xl text-white">{time.split(' ')[0]}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{time.split(' ')[1]}</span>
                 </div>
             ))}
          </div>
          
          <button className="mt-6 bg-white text-gray-900 px-10 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/10 hover:shadow-orange-500/40">
            Buy Now - $199
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDeal;