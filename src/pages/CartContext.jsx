import React, { createContext, useState, useEffect, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false); 

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to Cart
  const addToCart = (product, quantity = 1, color = 'Default', size = 'Default') => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id && item.selectedColor === color && item.selectedSize === size
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id && item.selectedColor === color && item.selectedSize === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        setIsCartOpen(true);
        return [...prevItems, { ...product, quantity, selectedColor: color, selectedSize: size }];
      }
    });
  };


  const removeFromCart = (id, color, size) => {
    setCartItems((prevItems) => 
      prevItems.filter((item) => !(item.id === id && item.selectedColor === color && item.selectedSize === size))
    );
  };


  const updateQuantity = (id, color, size, amount) => {
    setCartItems((prevItems) => 
      prevItems.map((item) => {
        if (item.id === id && item.selectedColor === color && item.selectedSize === size) {
          return { ...item, quantity: Math.max(1, item.quantity + amount) };
        }
        return item;
      })
    );
  };

  // Calculate Total Price
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      updateQuantity, 
      getCartCount, 
      getCartTotal,
      isCartOpen,
      setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);