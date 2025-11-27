import React, { useState, useEffect } from 'react';

// স্লাইডারের ডেটা
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    title: "Summer Luxe",
    subtitle: "SS/24 Collection"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop",
    title: "Urban Vogue",
    subtitle: "New Arrivals"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1529139574466-a302d2052505?q=80&w=2070&auto=format&fit=crop",
    title: "Classic Aura",
    subtitle: "Timeless Series"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো স্লাইড ৫ সেকেন্ড পর পর
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
    <div className="w-full min-h-screen bg-[#FFFBF7] dark:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden font-sans">
      
      {/* Background Elements (Orange Theme) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-400/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

      {/* Main Wrapper (Layout Fixed: lg:pt-28) */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 py-20 lg:pt-28 gap-12 lg:gap-0">
        
        {/* Left Side: Elegant Text Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left z-10">
          
          <div className="space-y-6">
            {/* Tagline in Orange */}
            <p className="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] text-xs uppercase pl-1">
              — Est. 2024 Fashion
            </p>
            
            {/* H1: Serif Font, Clean & Modern */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-[1.2]">
              Elevate Your <br />
              <span className="italic font-light text-orange-500">Everyday Look</span>
            </h1>
            
            {/* Paragraph */}
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
              Curated styles for the modern individual. Experience the perfect blend of comfort and luxury in our latest collection.
            </p>
          </div>
          
          {/* Orange Themed Buttons with Icons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8">
            
            {/* Primary Button: Solid Orange + Shopping Icon */}
            <button className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 text-white rounded-lg text-sm font-bold tracking-wide hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/30 transform hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
              </svg>
              Shop Collection
            </button>
            
            {/* Secondary Button: Outline + Arrow Icon */}
            <button className="group flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-orange-100 dark:border-orange-900/50 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-bold tracking-wide hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 bg-white/50 dark:bg-black/20">
              View Lookbook
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-10">
             <div>
                <p className="text-2xl font-serif text-gray-900 dark:text-white">2k+</p>
                <p className="text-xs text-orange-500/80 uppercase tracking-wider mt-1">Products</p>
             </div>
             <div className="w-px h-8 bg-orange-200 dark:bg-orange-900"></div>
             <div>
                <p className="text-2xl font-serif text-gray-900 dark:text-white">98%</p>
                <p className="text-xs text-orange-500/80 uppercase tracking-wider mt-1">Reviews</p>
             </div>
          </div>
        </div>

        {/* Right Side: Image Slider (Fixed Size: max-w-sm) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-10">
          
          {/* Image Container */}
          <div className="relative w-full max-w-sm aspect-[3/4] group">
            
            {/* Decorative Orange Border behind image */}
            <div className="absolute top-4 -right-4 w-full h-full border border-orange-500/20 rounded-2xl z-0 hidden lg:block"></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10 dark:shadow-black/50 z-10 bg-gray-100">
                {/* Slider Images */}
                {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                    />
                    
                    {/* Glassmorphism Text Card Inside Image */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-20">
                        <p className="text-orange-300 text-xs tracking-wider uppercase mb-1 font-bold">{slide.subtitle}</p>
                        <h3 className="text-white text-xl font-serif tracking-wide">{slide.title}</h3>
                    </div>
                </div>
                ))}

                {/* --- SLIDER CONTROLS (ARROWS) INSIDE IMAGE --- */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/20 text-white transition-all duration-300 hover:scale-110"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </button>

                {/* --- SLIDER INDICATORS (DOTS) INSIDE IMAGE --- */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 shadow-sm ${
                                currentSlide === index ? 'bg-orange-500 w-6' : 'bg-white/60 w-2 hover:bg-white'
                            }`}
                        ></div>
                    ))}
                </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;