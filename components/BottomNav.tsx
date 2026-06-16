'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function BottomNav() {
  const { cart } = useCart();

  // Calculate the total quantity of items in the cart
  const cartCount = cart.reduce(
    (total: number, item: any) => total + item.cartQuantity,
    0
  );

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-100 flex justify-around items-center p-3 z-50">
      <Link
        href="/"
        className="flex flex-col items-center text-blue-900 text-xs"
      >
        Accueil
      </Link>

      <Link
        href="/search"
        className="flex flex-col items-center text-blue-400 text-xs"
      >
        Search
      </Link>

      {/* Panier with dynamic notification badge */}
      <Link
        href="/panier"
        className="relative flex flex-col items-center text-blue-900 text-xs"
      >
        <span>Panier</span>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </Link>

      <Link
        href="/favoris"
        className="flex flex-col items-center text-blue-400 text-xs"
      >
        Favoris
      </Link>

      <Link
        href="/categories"
        className="flex flex-col items-center text-blue-400 text-xs"
      >
        Categories
      </Link>
    </nav>
  );
}