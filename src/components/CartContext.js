import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from localStorage if available
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [total, setTotal] = useState(() => {
    // Load total from localStorage if available
    const storedTotal = localStorage.getItem('total');
    return storedTotal ? JSON.parse(storedTotal) : 0;
  });

  useEffect(() => {
    // Persist cart to localStorage on change
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    // Persist total to localStorage on change
    localStorage.setItem('total', JSON.stringify(total));
  }, [total]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setTotal((prevTotal) => prevTotal + item.price * item.quantity);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter(item => item.cartId !== cartId));
    setTotal((prevTotal) => {
      const itemToRemove = cart.find(item => item.cartId === cartId);
      return itemToRemove ? prevTotal - (itemToRemove.price * itemToRemove.quantity) : prevTotal;
    });
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
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

  // Example state for shipping information
  const [shippingInfo, setShippingInfo] = useState({});

  return (
    <CartContext.Provider value={{ cart, total, shippingInfo, addToCart, removeFromCart, clearCart, updateCartDetails, setShippingInfo }}>
      {children}
    </CartContext.Provider>
  );
};