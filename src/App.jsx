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

  

      {/* ৯. ফুটার */}
      <Footer />
    </div>
  );
}

export default App;