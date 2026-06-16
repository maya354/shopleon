'use client';
import { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<any[]>([]);

  // Function to add a product
  const addToCart = (product: any, quantity: number) => {
    setCart((prev) => [...prev, { ...product, cartQuantity: quantity }]);
  };

  // Function to remove a product
  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Provide the cart, setter, and both helper functions
  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook for easy access to the cart context
export const useCart = () => useContext(CartContext);