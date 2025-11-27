import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Men's Fashion",
      img: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Women's Collection",
      img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Accessories",
      img: "https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full py-16 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Shop by <span className="text-primary">Category</span>
      </h2>
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-6">
        {categories.map(({ id, title, img }) => (
          <div key={id} className="relative h-64 sm:h-80 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 duration-500"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 duration-300 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-white border-b-2 border-primary pb-1 group-hover:-translate-y-2 duration-300">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;