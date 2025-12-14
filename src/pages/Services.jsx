import React from 'react';

import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaShieldAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast size={26} />,
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      id: 2,
      icon: <FaMoneyBillWave size={26} />,
      title: "Money Returns",
      desc: "30 Days money-back guarantee",
    },
    {
      id: 3,
      icon: <FaHeadset size={26} />,
      title: "24/7 Support",
      desc: "Get help when you need it",
    },
    {
      id: 4,
 
      icon: <FaShieldAlt size={26} />, 
      title: "Secure Payment",
      desc: "100% Protected transactions",
    },
  ];

  return (
    <div className="py-16 bg-[#FFFBF7] dark:bg-[#0f0f0f] transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ id, icon, title, desc }) => (
          <div 
            key={id} 
            className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-white/5 border border-orange-100/60 dark:border-white/10 hover:border-orange-300 dark:hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300 cursor-default group"
          >
          
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
              {icon}
            </div>
            
      
            <div>
                <h3 className="font-serif font-bold text-gray-900 dark:text-white text-lg group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-light mt-1">
                    {desc}
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;