import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: "/Hero/img-1.avif",
    title: "Summer Luxe",
    subtitle: "SS/24 Collection",
    
    topColor: "rgba(251, 146, 60, 0.2)", 
    bottomColor: "rgba(234, 88, 12, 0.2)" 
  },
  {
    id: 2,
    image: "/Hero/img-2.avif",
    title: "Urban Vogue",
    subtitle: "New Arrivals",

    topColor: "rgba(34, 211, 238, 0.2)", 
    bottomColor: "rgba(37, 99, 235, 0.2)" 
  },
  {
    id: 3,
    image: "/Hero/img-3.avif",
    title: "Classic Aura",
    subtitle: "Timeless Series",
 
    topColor: "rgba(232, 121, 249, 0.2)", 
    bottomColor: "rgba(147, 51, 234, 0.2)" 
  },
  {
    id: 4,
    image: "/Hero/img-4.avif",
    title: "Pristine White",
    subtitle: "Minimalist Edition",
    
    topColor: "rgba(209, 213, 219, 0.4)",
    bottomColor: "rgba(107, 114, 128, 0.3)"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentYear = new Date().getFullYear();

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

  const scrollToProducts = () => {
    const productElements = document.getElementsByName('products');
    if (productElements.length > 0) {
      productElements[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFFBF7] dark:bg-[#0f0f0f] transition-colors duration-500 relative overflow-hidden font-sans selection:bg-orange-200 selection:text-orange-900">
      
      {/* Entry Animations Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-fadeInScale {
          animation: fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Dynamic Background Orbs */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3 transition-colors duration-[1500ms] ease-in-out"
        style={{ backgroundColor: slides[currentSlide].topColor }}
      ></div>
      
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3 transition-colors duration-[1500ms] ease-in-out"
        style={{ backgroundColor: slides[currentSlide].bottomColor }}
      ></div>

      {/* Main Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 py-20 lg:pt-28 gap-12 lg:gap-0 relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left z-20 relative">
          
          <div className="space-y-6 relative z-10">
            
            {/* Tagline */}
            <div className="flex items-center justify-center lg:justify-start gap-3 animate-fadeInUp delay-100">
                <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
                <p className="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] text-xs uppercase">
                Est. {currentYear} Fashion
                </p>
            </div>
            
            {/* H1 Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-[1.2] relative inline-block animate-fadeInUp delay-200">
              
              {/* Star */}
              <svg className="absolute -top-6 -right-8 w-8 h-8 text-orange-400 animate-[spin_4s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>

              Elevate Your <br />
              
              <span className="relative inline-block z-10 mt-1">
                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 z-10 relative px-1 pb-1">
                  Everyday Look
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500/80 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light animate-fadeInUp delay-300">
              Curated styles for the modern individual. Experience the perfect blend of comfort and luxury in our latest collection.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 relative z-10 animate-fadeInUp delay-400">
            <button 
              onClick={scrollToProducts}
              className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-600 text-white rounded-lg text-sm font-bold tracking-wide hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/30 transform hover:-translate-y-0.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:scale-110 transition-transform">
                <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clipRule="evenodd" />
              </svg>
              Shop Collection
            </button>
            
            <button className="group flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-orange-100 dark:border-orange-900/50 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-bold tracking-wide hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 bg-white/50 dark:bg-black/20">
              View Lookbook
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center lg:justify-start gap-8 pt-10 relative z-10 animate-fadeInUp delay-500">
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


        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative animate-fadeInScale delay-200">
          
          {/* Animated Background Rings */}
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[190px] -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] z-0 hidden sm:block pointer-events-none">
             <div className="absolute inset-0 border border-dashed border-orange-300 dark:border-orange-800/40 rounded-full animate-[spin_20s_linear_infinite] opacity-40"></div>
             <div className="absolute inset-12 border border-orange-200 dark:border-orange-900/30 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-60"></div>
             {/* Ring Glow */}
             <div className="absolute inset-20 rounded-full blur-2xl animate-pulse transition-colors duration-1000" style={{ backgroundColor: slides[currentSlide].topColor }}></div>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-w-sm aspect-[3/4] group z-10">
            <div className="absolute top-5 -right-5 w-full h-full border-2 border-orange-500/20 rounded-2xl z-0 hidden lg:block transition-all duration-500 group-hover:top-3 group-hover:-right-3"></div>

            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/10 dark:shadow-black/50 z-10 bg-gray-100">
                {slides.map((slide, index) => (
                <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-24">
                        <p className="text-orange-300 text-xs tracking-wider uppercase mb-1 font-bold animate-[fadeInUp_1s_ease-out]">{slide.subtitle}</p>
                        <h3 className="text-white text-xl font-serif tracking-wide">{slide.title}</h3>
                    </div>
                </div>
                ))}
                
                {/* Dots Navigation */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                    {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === index 
                            ? 'w-6 bg-orange-500' 
                            : 'w-2 bg-white/50 hover:bg-white'
                        }`}
                    />
                    ))}
                </div>

                <div className="absolute bottom-6 right-6 flex items-center gap-3 z-20">
                   <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all border border-white/10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                   </button>
                   <button onClick={nextSlide} className="p-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-lg shadow-orange-500/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                   </button>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;