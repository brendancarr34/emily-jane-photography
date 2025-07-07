import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    // Persist cart to localStorage on change
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => prev.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

    // Function to update cart details (e.g., address)
    const updateCartDetails = (details) => {
        setCart((prevCart) => {
            return prevCart.map(item => ({
                ...item,
                ...details // Merge details into each item
            }));
        });
    }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateCartDetails }}>
      {children}
    </CartContext.Provider>
  );
};