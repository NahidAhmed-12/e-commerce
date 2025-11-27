import React from 'react';
import { FaShippingFast, FaHeadset, FaMoneyBillWave, FaLock } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaShippingFast size={40} />,
      title: "Free Shipping",
      desc: "Order over $100",
    },
    {
      id: 2,
      icon: <FaMoneyBillWave size={40} />,
      title: "Money Returns",
      desc: "30 Days guarantee",
    },
    {
      id: 3,
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      desc: "Dedicated support",
    },
    {
      id: 4,
      icon: <FaLock size={40} />,
      title: "Secure Payment",
      desc: "100% Protected",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(({ id, icon, title, desc }) => (
          <div key={id} className="flex flex-col items-center text-center p-6 border rounded-lg hover:shadow-xl hover:scale-105 duration-300 cursor-pointer bg-gray-50 group">
            <div className="text-primary mb-4 group-hover:rotate-12 duration-300">
              {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-500 text-sm mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;