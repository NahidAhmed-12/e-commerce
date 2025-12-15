import React, { useState, useEffect } from 'react';
import { 
  FiArrowRight, FiArrowLeft, FiPlus, FiInstagram, FiFacebook, FiTwitter, 
  FiShoppingBag, FiHeart 
} from "react-icons/fi";

const slides = [
  {
    id: 1,
    imageMain: "/Hero/img-1.avif",
    imageDetail: "/Hero/img-1.avif", 
    title: "Summer Breeze",
    category: "SS/24 Collection",
    price: "$249.00",
    description: "Experience the ultimate comfort with our lightweight breathable fabrics designed specifically for the golden hour.",
    details: [
        { label: "Material", value: "100% Linen" },
        { label: "Fit", value: "Relaxed" },
        { label: "Origin", value: "China" }
    ]
  },
  {
    id: 2,
    imageMain: "/Hero/img-2.avif",
    imageDetail: "/Hero/img-2.avif", 
    title: "Summer Breeze",
    category: "SS/24 Collection",
    price: "$249.00",
    description: "Experience the ultimate comfort with our lightweight breathable fabrics designed specifically for the golden hour.",
    details: [
        { label: "Material", value: "100% Linen" },
        { label: "Fit", value: "Relaxed" },
        { label: "Origin", value: "South Korea" }
    ]
  },
  {
    id: 3,
    imageMain: "/Hero/img-3.avif",
    imageDetail: "/Hero/img-3.avif",
    title: "Urban Shield",
    category: "Outerwear Series",
    price: "$399.00",
    description: "Technical elegance meets metropolitan utility. Waterproof yet breathable for the modern city explorer.",
    details: [
        { label: "Material", value: "Gore-Tex" },
        { label: "Fit", value: "Regular" },
        { label: "Origin", value: "Japan" }
    ]
  },
  {
    id: 4,
    imageMain: "/Hero/img-4.avif",
    imageDetail: "/Hero/img-4.avif",
    title: "Velvet Night",
    category: "Evening Wear",
    price: "$550.00",
    description: "Sophisticated silhouettes for memorable nights. A blend of luxury silk and modern cutting techniques.",
    details: [
        { label: "Material", value: "Raw Silk" },
        { label: "Fit", value: "Slim" },
        { label: "Origin", value: "France" }
    ]
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    setCurrent((val) => (val === slides.length - 1 ? 0 : val + 1));
    setKey((k) => k + 1);
  };

  const handlePrev = () => {
    setCurrent((val) => (val === 0 ? slides.length - 1 : val - 1));
    setKey((k) => k + 1);
  };

  return (
    <div className="relative w-full min-h-screen bg-[#F4F4F0] dark:bg-[#0f0f0f] overflow-hidden flex items-center transition-colors duration-500">
      

      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.04] pointer-events-none z-0">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[15vw] font-black uppercase text-black dark:text-white font-sans leading-none">
            Muse Fashion • Timeless • Elegance • Collection 2024 • 
          </span>
        </div>
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-10 lg:px-16 relative z-10 pt-28 pb-10 lg:py-0">
        
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-10 lg:gap-0">
          

          <div className="w-full lg:w-5/12 relative z-20 flex flex-col justify-center order-2 lg:order-1">
             

             <div className="flex gap-2 mb-8">
                {slides.map((_, idx) => (
                    <div 
                        key={idx} 
                        onClick={() => { setCurrent(idx); setKey(prev => prev + 1); }}
                        className={`h-1 cursor-pointer transition-all duration-500 rounded-full ${current === idx ? 'w-12 bg-amber-600' : 'w-3 bg-gray-300 dark:bg-gray-700'}`}
                    ></div>
                ))}
             </div>

             <div key={key} className="space-y-6 lg:space-y-8">
                
    
                <div className="flex items-center gap-3 animate-slideInRight">
                   <span className="px-3 py-1 text-xs font-bold tracking-[0.2em] uppercase border border-amber-600/30 text-amber-700 dark:text-amber-500 rounded-md bg-amber-50 dark:bg-amber-900/10">
                      {slides[current].category}
                   </span>
                </div>

              
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium text-gray-900 dark:text-white leading-[1.1] animate-revealText origin-bottom">
                  {slides[current].title}
                </h1>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed animate-fadeIn delay-200 opacity-0 fill-mode-forwards max-w-lg">
                   {slides[current].description}
                </p>

                {/* Product Specs Grid */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-200 dark:border-white/10 pt-6 mt-4 animate-fadeIn delay-300 opacity-0 fill-mode-forwards">
                    {slides[current].details.map((item, idx) => (
                        <div key={idx}>
                            <p className="text-[10px] uppercase text-gray-400 tracking-wider font-bold mb-1">{item.label}</p>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Buttons & Socials */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 animate-fadeIn delay-500 opacity-0 fill-mode-forwards">
                  <button className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20">
                    <span className="font-bold tracking-widest uppercase text-xs flex items-center gap-3">
                      Shop Collection <FiArrowRight size={16} />
                    </span>
                  </button>

                  <div className="flex items-center gap-4 text-gray-400">
                      <a href="#" className="hover:text-amber-600 transition-colors"><FiInstagram size={20} /></a>
                      <a href="#" className="hover:text-amber-600 transition-colors"><FiFacebook size={20} /></a>
                      <a href="#" className="hover:text-amber-600 transition-colors"><FiTwitter size={20} /></a>
                  </div>
                </div>

             </div>
          </div>


         
          <div className="w-full lg:w-6/12 relative h-[50vh] lg:h-[80vh] flex items-center justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            
         
            <div className="relative w-full md:w-[90%] h-full rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/50 group">
               
               <div key={`main-${key}`} className="w-full h-full relative animate-imageReveal">
                  <img 
                    src={slides[current].imageMain} 
                    alt="Main" 
                    className="w-full h-full object-cover animate-imageZoom"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                 
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                     <div className="relative px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl bg-white/20 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-lg flex items-center gap-2">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-400 animate-pulse"></div>
                        <span className="text-sm md:text-lg font-bold text-white tracking-wide">{slides[current].price}</span>
                     </div>
                  </div>
               </div>

              
               <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 md:gap-3 z-30">
                  <button 
                    onClick={handlePrev} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"
                  >
                      <FiArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={handleNext} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-amber-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-white/20"
                  >
                      <FiArrowRight size={16} />
                  </button>
               </div>
            </div>

           
            <div key={`detail-${key}`} className="absolute -bottom-12 -left-12 w-44 z-20 hidden lg:flex flex-col animate-floatIn">
               
              
               <div className="h-52 w-full rounded-t-xl border-4 border-b-0 border-[#F4F4F0] dark:border-[#0f0f0f] shadow-xl overflow-hidden relative">
                   <img src={slides[current].imageDetail} alt="Detail" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                   {/* Gradient overlay for better look */}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
               </div>

              
               <div className="h-14 w-full bg-white dark:bg-[#1a1a1a] rounded-b-xl border-4 border-t-0 border-[#F4F4F0] dark:border-[#0f0f0f] shadow-2xl flex items-center justify-between px-4">
                   
                   <div className="flex flex-col justify-center">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Quick View</span>
                      <span className="text-xs font-bold text-gray-800 dark:text-white">Detail Shot</span>
                   </div>

                 
                   <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95">
                      <FiShoppingBag size={14} />
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