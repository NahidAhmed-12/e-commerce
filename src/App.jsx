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
      
      <Navbar />
  
      <Hero />

      <Services />

      <Categories />

      <Products />

      <ExclusiveDeal />

      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;