import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast size={30} />,
      title: "Free Shipping",
      desc: "On all orders over $100",
    },
    {
      id: 2,
      icon: <FaMoneyBillWave size={30} />,
      title: "Money Returns",
      desc: "30 Days money-back guarantee",
    },
    {
      id: 3,
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      desc: "Get help when you need it",
    },
    {
      id: 4,
      icon: <FaLock size={30} />,
      title: "Secure Payment",
      desc: "100% Protected transactions",
    },
  ];

  return (
    <div className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(({ id, icon, title, desc }) => (
          <div key={id} className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 duration-300 cursor-pointer group">
            <div className="p-3 bg-white dark:bg-gray-700 rounded-full text-orange-600 shadow-sm group-hover:scale-110 duration-300">
              {icon}
            </div>
            <div>
                <h3 className="font-bold text-gray-800 dark:text-white text-lg">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;