import React from 'react';
import { FaQuoteRight, FaStar, FaCheckCircle } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The quality of the fabric is unmatched. The delivery was surprisingly fast, and the packaging felt like receiving a gift.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Fashion Editor",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "I appreciate the dark mode aesthetics. It's rare to find a site that balances UX and high-fashion visuals so perfectly.",
    },
    {
      id: 3,
      name: "David Lee",
      role: "Tech Reviewer",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Bought the Sony Headphones from the electronics drop. Legit products, competitive pricing, and the support team is stellar.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#F4F4F0] dark:bg-[#0f0f0f] transition-colors duration-500 relative overflow-hidden font-sans">
      
    
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 dark:bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

   
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] dark:opacity-[0.04] pointer-events-none">
        <span className="text-[15vw] font-black uppercase text-black dark:text-white leading-none whitespace-nowrap pl-10">
           Voices • Community • 
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center justify-center mb-16 text-center space-y-3">
            <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-amber-600"></span>
                <span className="text-amber-600 font-bold tracking-[0.25em] text-xs uppercase">
                    Client Diaries
                </span>
                <span className="h-[1px] w-8 bg-amber-600"></span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white leading-[1.1]">
                Trusted by <span className="italic font-light text-gray-500 dark:text-gray-400">Community</span>
            </h2>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map(({ id, name, role, img, text }) => (
            <div 
                key={id} 
                className="group relative bg-white dark:bg-[#151515] p-8 lg:p-10 rounded-xl border border-gray-100 dark:border-white/5 
                           hover:border-amber-600/30 dark:hover:border-amber-600/30 shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 dark:hover:shadow-black/50 
                           transition-all duration-500 hover:-translate-y-1"
            >
              

              <div className="absolute top-6 right-8 text-6xl lg:text-8xl text-gray-100 dark:text-white/5 group-hover:text-amber-50 dark:group-hover:text-amber-900/10 transition-colors duration-500 pointer-events-none font-serif">
                <FaQuoteRight />
              </div>

  
              <div className="flex gap-1 text-amber-500 mb-6 text-xs">
                  {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                  ))}
              </div>
              
             
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-serif text-lg italic mb-8 relative z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                "{text}"
              </p>
              
             
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/5 group-hover:border-amber-100 dark:group-hover:border-white/10 transition-colors">
                
                
                <div className="relative">
                    <img 
                        src={img} 
                        alt={name} 
                        className="w-12 h-12 rounded-full object-cover relative z-10 ring-2 ring-gray-100 dark:ring-gray-700 group-hover:ring-amber-500 transition-all duration-300" 
                    />
                </div>
                
                <div>
                  <h4 className="font-sans text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wide">
                    {name}
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                        {role}
                    </p>
                    {role === "Verified Buyer" && (
                        <FaCheckCircle className="text-amber-500 text-[10px]" />
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;