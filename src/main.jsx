import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './pages/ThemeContext'; 
import { CartProvider } from './pages/CartContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <CartProvider>
         <App />
      </CartProvider>
    </ThemeProvider>
  </React.StrictMode>
);