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
    <div className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">
            Client <span className="text-orange-600">Testimonials</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">See what our customers have to say about us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(({ id, name, role, img, text }) => (
            <div key={id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:-translate-y-2 duration-300 relative">
              <div className="absolute -top-5 left-8 bg-orange-600 text-white p-3 rounded-full">
                  <FaQuoteRight size={20}/>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">"{text}"</p>
              
              <div className="flex text-yellow-400 gap-1 mt-4">
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
              </div>

              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;