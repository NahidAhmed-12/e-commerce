import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "Fashion Blogger",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The quality of the products is amazing. I love the new summer collection. Highly recommended!",
    },
    {
      id: 2,
      name: "Sarah Smith",
      role: "Regular Customer",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "Fast delivery and excellent customer support. The shoes fit perfectly and are very comfortable.",
    },
    {
      id: 3,
      name: "Michael Brown",
      role: "Designer",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      text: "Best shopping experience I've had in a while. The website is smooth and the products are top-notch.",
    },
  ];

  return (
    <div className="w-full py-20 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our <span className="text-primary">Customers Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map(({ id, name, role, img, text }) => (
            <div key={id} className="bg-white p-8 rounded-xl shadow-lg relative hover:-translate-y-2 duration-300">
              <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 left-4" />
              <p className="text-gray-600 mb-6 italic z-10 relative">"{text}"</p>
              
              <div className="flex items-center justify-center gap-4">
                <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
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