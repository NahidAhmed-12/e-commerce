import React from 'react';
import { FaQuoteRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Verified Buyer",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Absolutely love the quality! The delivery was super fast and the packaging was premium. Will definitely order again.",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Fashion Enthusiast",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The dark mode on this website makes shopping so much easier at night. Great user experience and amazing products!",
    },
    {
      id: 3,
      name: "David Lee",
      role: "Tech Reviewer",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Bought the Sony Headphones and they are legit. The prices here are unbeatable compared to other stores.",
    },
  ];

  return (
    <section className="w-full py-24 bg-[#FFFBF7] dark:bg-[#0f0f0f] transition-colors duration-300 relative overflow-hidden font-sans">
      
    
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
            <span className="text-orange-600 dark:text-orange-400 font-bold tracking-[0.2em] text-xs uppercase">
                — Our Community
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-gray-900 dark:text-white mt-4">
                Trusted by <span className="italic font-light text-orange-500">Thousands</span>
            </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map(({ id, name, role, img, text }) => (
            <div 
                key={id} 
                className="group relative bg-white dark:bg-[#1a1a1a] p-8 md:p-10 rounded-3xl border border-orange-100 dark:border-white/5 
                           hover:border-orange-200 dark:hover:border-orange-900/30 shadow-sm hover:shadow-2xl hover:shadow-orange-900/5 
                           transition-all duration-500 hover:-translate-y-2"
            >
              
              
              <div className="absolute top-6 right-8 text-8xl text-orange-500/5 group-hover:text-orange-500/10 transition-colors duration-500 pointer-events-none font-serif">
                ”
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 text-orange-500 mb-6 text-sm">
                  {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                  ))}
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg mb-8 relative z-10">
                "{text}"
              </p>
              
         
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-white/5 group-hover:border-orange-100 dark:group-hover:border-white/10 transition-colors">
                
               
                <div className="relative">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                    <img 
                        src={img} 
                        alt={name} 
                        className="w-12 h-12 rounded-full object-cover relative z-10 ring-2 ring-gray-100 dark:ring-gray-700 group-hover:ring-orange-200 dark:group-hover:ring-orange-900 transition-all" 
                    />
                </div>
                
                <div>
                  <h4 className="font-serif text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {name}
                  </h4>
                  <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest font-bold">
                    {role}
                  </p>
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