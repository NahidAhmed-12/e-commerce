import React from 'react';
import { FiTruck, FiRefreshCw, FiHeadphones, FiShield } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FiTruck size={24} />,
      title: "Global Shipping",
      desc: "Free delivery over $150",
    },
    {
      id: 2,
      icon: <FiRefreshCw size={24} />,
      title: "Easy Returns",
      desc: "30-day return policy",
    },
    {
      id: 3,
      icon: <FiShield size={24} />, 
      title: "Secure Payment",
      desc: "100% secure checkout",
    },
    {
      id: 4,
      icon: <FiHeadphones size={24} />,
      title: "24/7 Support",
      desc: "Dedicated support team",
    },
  ];

  return (
    <section className="bg-[#F4F4F0] dark:bg-[#0f0f0f] border-t border-gray-200 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10 border-b border-gray-200 dark:border-white/10 lg:border-b-0">
          
          {services.map(({ id, icon, title, desc }) => (
            <div 
              key={id} 
              className="group flex flex-col items-center text-center py-12 px-6 transition-colors duration-300 hover:bg-white dark:hover:bg-white/5"
            >
              
          
              <div className="mb-5 text-gray-800 dark:text-gray-200 group-hover:text-amber-600 transition-colors duration-300 transform group-hover:-translate-y-1 ease-out">
                {icon}
              </div>
              
              
              <h3 className="font-serif text-lg font-medium text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              
              <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 font-sans">
                {desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;