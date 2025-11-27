import React from 'react';

// কম্পোনেন্ট ইম্পোর্ট
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Services from './pages/Services';
import Categories from './pages/Categories';
import Products from './pages/Products';
import ExclusiveDeal from './pages/ExclusiveDeal';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="font-sans">
      {/* ১. ন্যাভিগেশন বার */}
      <Navbar />

      {/* ২. হিরো সেকশন (ব্যানার) */}
      <Hero />

      {/* ৩. সার্ভিস সেকশন (ফিচার) */}
      <Services />

      {/* ৪. ক্যাটাগরি সেকশন */}
      <Categories />

      {/* ৫. প্রোডাক্ট লিস্ট */}
      <Products />

      {/* ৬. এক্সক্লুসিভ ডিল (বড় অফার) */}
      <ExclusiveDeal />

      {/* ৭. কাস্টমার রিভিউ */}
      <Testimonials />

      {/* ৮. নিউজলেটার (বোনাস সেকশন) */}
      <div className="bg-primary py-16 px-4">
        <div className="max-w-screen-lg mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-8 text-gray-100">Subscribe now to get 20% off on your first order!</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-black" 
                />
                <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition shadow-lg">
                  Subscribe
                </button>
            </div>
        </div>
      </div>

      {/* ৯. ফুটার */}
      <Footer />
    </div>
  );
}

export default App;