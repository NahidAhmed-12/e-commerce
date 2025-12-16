import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiShoppingBag, FiTag } from 'react-icons/fi'; // Feather Icons

const ExclusiveDeal = () => {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); 

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, mins: minutes, secs: seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.mins },
    { label: 'Secs', value: timeLeft.secs },
  ];

  return (
    <section className="w-full py-20 lg:py-32 bg-[#F4F4F0] dark:bg-[#0f0f0f] relative overflow-hidden font-sans transition-colors duration-500">
      
     
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 dark:bg-amber-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.05]">
         <h1 className="text-[15vw] font-black tracking-tighter uppercase leading-none font-sans text-black dark:text-white">
            Limited
         </h1>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
         
          <div className="w-full lg:w-1/2 relative group">
            
          
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-amber-600/20 rounded-xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 hidden md:block"></div>


            <div className="relative z-10 overflow-hidden rounded-xl shadow-2xl dark:shadow-black/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
                <img 
                    src="/Exclusive/Exclusive.avif"
                    alt="Exclusive Deal" 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

                
                <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-xl shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-end">
                    <p className="text-gray-200 text-[10px] uppercase tracking-widest font-bold mb-1">Special Offer</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg text-gray-300 line-through decoration-amber-500 font-serif">$299</span>
                        <span className="text-3xl font-bold text-white font-serif">$199</span>
                    </div>
                </div>
            </div>

         
            <div className="absolute top-6 left-6 z-20">
                <div className="w-16 h-16 rounded-full bg-amber-600 text-white flex flex-col items-center justify-center shadow-lg shadow-amber-600/30 animate-pulse-slow">
                    <span className="text-xs font-bold uppercase">Save</span>
                    <span className="text-lg font-serif font-bold italic">30%</span>
                </div>
            </div>
          </div>

         
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            
            <div className="space-y-8">
                
                {/* Section Tag */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <span className="h-[1px] w-12 bg-gray-400 dark:bg-gray-600"></span>
                    <span className="text-amber-600 font-bold tracking-[0.25em] text-xs uppercase flex items-center gap-2">
                        <FiTag /> Deal of the Month
                    </span>
                </div>
              
                {/* Headline */}
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-gray-900 dark:text-white leading-[1.1]">
                    Nike Air <br/>
                    <span className="italic font-light text-gray-400 dark:text-gray-500">Jordan Limited</span>
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Experience the fusion of heritage and modern innovation. This exclusive silhouette is crafted from premium leather, available for a strictly limited time.
                </p>

             
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 pt-4">
                    {timerItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl shadow-sm hover:border-amber-600 transition-colors duration-300 group/timer">
                            <span className="font-serif text-2xl md:text-3xl text-gray-900 dark:text-white group-hover/timer:text-amber-600 transition-colors">
                                {formatTime(item.value)}
                            </span>
                            <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-6 flex justify-center lg:justify-start">
                    <button className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20">
                        <span className="relative flex items-center gap-3 font-bold text-xs tracking-[0.2em] uppercase">
                            Shop The Deal <FiArrowRight className="group-hover:translate-x-1 transition-transform size-4"/>
                        </span>
                    </button>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeal;