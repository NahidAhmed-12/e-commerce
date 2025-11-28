import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ExclusiveDeal = () => {
  // কাউন্টডাউন টাইমার স্টেট
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    // উদাহরণস্বরূপ: বর্তমান সময় থেকে ২ দিন পরের সময় সেট করা হলো
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

  // সংখ্যা ২ ডিজিটে দেখানোর জন্য (যেমন: ৯ এর বদলে ০৯)
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
    // এই সেকশনটি সবসময় ডার্ক থাকবে (Luxury Feel এর জন্য)
    <section className="w-full py-24 bg-[#0a0a0a] relative overflow-hidden font-sans">
      
      {/* Background Elements (Atmospheric Glow) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-900/10 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Watermark Text Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
         <h1 className="text-[120px] md:text-[200px] font-bold text-white/[0.02] tracking-widest uppercase leading-none font-serif">
            Exclusive
         </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side (Floating Effect) */}
          <div className="w-full md:w-1/2 relative group flex justify-center">
            
            {/* Glowing Circle Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            
            <div className="relative z-10 transform transition-transform duration-700 group-hover:-translate-y-4 group-hover:scale-105">
                {/* Image Fixed: Added fixed height and object-cover */}
                <img 
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop" 
                    alt="Exclusive Deal" 
                    className="w-full max-w-[500px] h-[400px] md:h-[550px] object-cover rounded-3xl shadow-2xl shadow-orange-900/20 rotate-[-5deg] group-hover:rotate-0 transition-all duration-700 ease-in-out"
                />
                
                {/* Floating Glass Badge */}
                <div className="absolute bottom-10 -right-4 md:-right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-lg animate-bounce-slow">
                    <p className="text-gray-300 text-xs uppercase tracking-widest">Special Price</p>
                    <p className="text-3xl font-bold text-white">$199</p>
                </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            
            <div className="space-y-6">
                {/* Tagline */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                    <span className="h-px w-12 bg-orange-500"></span>
                    <span className="text-orange-500 font-bold tracking-[0.3em] text-xs uppercase">
                        Deal of the Month
                    </span>
                </div>
              
                {/* Main Heading */}
                <h2 className="text-5xl md:text-7xl font-serif text-white leading-[1.1]">
                    Nike Air <br/>
                    <span className="italic font-light text-orange-500">Jordan Limited</span>
                </h2>
                
                <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mx-auto md:mx-0">
                    Experience the fusion of style and comfort. A masterpiece of design available for a limited time. Don't miss out on this icon.
                </p>

                {/* Live Minimalist Timer */}
                <div className="flex justify-center md:justify-start gap-8 pt-4 pb-6">
                    {timerItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="font-serif text-4xl text-white">
                                {formatTime(item.value)}
                            </span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                
                {/* CTA Button */}
                <button className="group relative px-10 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden hover:text-white transition-colors duration-300 shadow-xl shadow-white/5">
                    <span className="absolute inset-0 w-full h-full bg-orange-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    <span className="relative flex items-center gap-3">
                        Shop Now <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                    </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveDeal;