import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

const products = [
  {
    id: 1,
    name: 'Nike Air Max',
    price: '$120',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Adidas Ultraboost',
    price: '$140',
    img: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1998&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Puma Running',
    price: '$90',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Urban Jacket',
    price: '$210',
    img: 'https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?q=80&w=1952&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Classic Watch',
    price: '$350',
    img: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Smart Glasses',
    price: '$180',
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2080&auto=format&fit=crop',
  },
];

const Products = () => {
  return (
    <div name="products" className="bg-gradient-to-b from-gray-100 to-white w-full py-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-primary text-gray-800">
            Trending Products
          </p>
          <p className="py-6 text-gray-500">Check out our best selling items</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {products.map(({ id, name, price, img }) => (
            <div key={id} className="group shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl hover:shadow-primary/40 duration-300 relative">
              
              {/* Image with zoom effect */}
              <div className="overflow-hidden h-60 w-full relative">
                 <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 duration-500"
                />
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                    <button className="bg-primary text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 duration-300">
                        Add to Cart <FaShoppingCart/>
                    </button>
                </div>
              </div>

              <div className="p-4 flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-800">{name}</h3>
                <div className="flex gap-1 text-yellow-500 my-2">
                    <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </div>
                <p className="text-lg font-semibold text-primary">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;