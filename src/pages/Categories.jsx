import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, title: "Men's Fashion", img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop" },
    { id: 2, title: "Women's Wear", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, title: "Sneakers", img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, title: "Accessories", img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <div className="w-full py-20 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Shop by <span className="text-orange-600">Category</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ id, title, img }) => (
            <div key={id} className="relative h-80 rounded-2xl overflow-hidden cursor-pointer group shadow-lg">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {title}
                </h3>
                <p className="text-orange-400 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm font-semibold mt-1">
                  Explore Now &rarr;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;