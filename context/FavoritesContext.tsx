'use client';

import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext<any>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<any[]>([]);

  // Add product to favorites
  const addToFavorites = (product: any) => {
    setFavorites((prev) => {
      // prevent duplicates
      if (prev.some((item) => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Remove product from favorites
  const removeFromFavorites = (productId: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);