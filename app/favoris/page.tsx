'use client';

import { useFavorites } from '@/context/FavoritesContext';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';

export default function FavorisPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <main className="p-5 min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Aucun produit en favoris.</p>
        <BottomNav />
      </main>
    );
  }

  return (
    <main className="p-5 pb-24 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Favoris</h1>

      {favorites.map((item: any) => (
        <Link
          key={item.id}
          href={`/product/${item.id}`}
          className="flex items-center gap-4 bg-white p-4 rounded-xl mb-4 border"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
          />

          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.price} DA</p>
          </div>
        </Link>
      ))}

      <BottomNav />
    </main>
  );
}