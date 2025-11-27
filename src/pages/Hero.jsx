import React, { useState, useEffect } from 'react';

// স্লাইডারের জন্য ডেটা (ইমেজ এবং টেক্সট)
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    title: "Summer Collection",
    subtitle: "Up to 50% Off"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop",
    title: "New Arrivals",
    subtitle: "Trendy Styles"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Exclusive Deals",
    subtitle: "Limited Time"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটোমেটিক স্লাইড চেঞ্জ করার জন্য ইফেক্ট (প্রতি ৫ সেকেন্ডে)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* 
         FIX: এখানে 'lg:pt-28' ব্যবহার করা হয়েছে। 
         এটি 'pt-40' এর চেয়ে কম, কিন্তু নেভবার থেকে নিরাপদ দূরত্ব বজায় রাখবে। 
         এটি একদম মাঝামাঝি পজিশনে থাকবে।
      */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 py-24 lg:pt-28 gap-10 lg:gap-0">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-8 text-center lg:text-left z-10">
          
          <div className="space-y-4">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wider uppercase mb-2">
              Best E-commerce Deals
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1]">
              Find Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Perfect Look
              </span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Explore our curated collection of premium clothing. 
              Elevate your style with timeless pieces and modern designs designed just for you.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-1">
              Shop Now
              <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">➜</span>
            </button>
            <button className="px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300">
              View Collection
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-gray-200 dark:border-gray-800">
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">50k+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Happy Customers</span>
             </div>
             <div className="w-px h-10 bg-gray-300 dark:bg-gray-700"></div>
             <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">2k+</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Top Products</span>
             </div>
          </div>
        </div>

        {/* Right Side: Image Slider */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
          
          {/* Image Size kept as max-w-sm to ensure it fits perfectly */}
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
            
            {/* Slider Images */}
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Text on Image */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 pt-20">
                    <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest">{slide.subtitle}</p>
                    <h3 className="text-white text-2xl font-bold">{slide.title}</h3>
                </div>
              </div>
            ))}

            {/* Slider Controls (Arrows) */}
            <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/50 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/50 transition-all"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Slider Indicators (Dots) */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                            currentSlide === index ? 'bg-orange-500 w-6' : 'bg-white/50 hover:bg-white'
                        }`}
                    ></div>
                ))}
            </div>
          </div>

          {/* Abstract Floating Element behind image */}
          <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-orange-500/30 rounded-3xl hidden lg:block transform rotate-6"></div>
        </div>

      </div>
    </div>
  );
};

export default Hero;