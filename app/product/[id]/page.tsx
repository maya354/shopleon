'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import BottomNav from '@/components/BottomNav';
import {
  ShoppingCart,
  Heart,
  Truck,
  Banknote,
  ArrowLeft,
  Minus,
  Plus
} from 'lucide-react';

import { useCart } from '@/context/CartContext';
import { useFavorites } from '@/context/FavoritesContext';

export default function ProductDetailPage() {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Produit non trouvé
      </div>
    );
  }

  const isFavorite = favorites.some(
    (item: any) => item.id === product.id
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-24">

      {/* PAGE CONTAINER */}
      <div className="max-w-3xl mx-auto">

        {/* IMAGE SECTION */}
        <div className="relative bg-white">

          <Link
            href="/"
            className="absolute top-4 left-4 z-10 bg-white shadow-md p-2 rounded-xl active:scale-95 transition"
          >
            <ArrowLeft size={18} />
          </Link>

          <div className="w-full h-[320px] flex items-center justify-center p-6">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

        </div>

        {/* CONTENT */}
        <div className="px-4 sm:px-6 py-6">

          {/* TITLE */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {product.name}
          </h1>

          <p className="text-xl font-bold text-blue-600 mt-2">
            {product.price} DA
          </p>

          {/* ACTIONS */}
          <div className="flex items-center gap-3 mt-6 mb-8">

            {/* ADD TO CART */}
            <button
              onClick={() => setShowModal(true)}
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-md active:scale-95 transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={18} />
              Ajouter au panier
            </button>

            {/* FAVORITE */}
            <button
              onClick={() => {
                if (isFavorite) {
                  removeFromFavorites(product.id);
                } else {
                  addToFavorites(product);
                }
              }}
              className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center shadow-sm active:scale-95 transition"
            >
              <Heart
                size={20}
                fill={isFavorite ? "#EF4444" : "none"}
                stroke={isFavorite ? "#EF4444" : "currentColor"}
              />
            </button>

          </div>

          {/* DESCRIPTION */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h2 className="text-sm font-semibold mb-2">Description</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* INFO */}
          <div className="mt-5 bg-white p-4 rounded-xl shadow-sm space-y-3">

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Truck size={18} className="text-blue-600" />
              Livraison rapide
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Banknote size={18} className="text-blue-600" />
              Paiement à la livraison
            </div>

          </div>

        </div>
      </div>

      {/* ================= MODAL (SHOPIFY STYLE BOTTOM SHEET) ================= */}
      {showModal && (
        <>
          {/* overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40 transition-opacity"
            onClick={() => setShowModal(false)}
          />

          {/* bottom sheet container */}
          <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 transition-transform transform duration-300 ease-out">

              {/* drag handle */}
              <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

              <h3 className="text-gray-900 text-lg font-semibold mb-4 text-left">
                Quantité
              </h3>

              {/* FULL WIDTH QUANTITY BAR (Left-to-Right) */}
              <div className="flex items-center justify-between w-full border border-gray-200 rounded-xl p-1.5 mb-6 bg-gray-50">
                <button
                  type="button"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition"
                >
                  <Minus size={16} />
                </button>

                <span className="text-base font-semibold text-gray-900 select-none">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 active:scale-95 transition"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm transition hover:bg-gray-50 active:scale-98"
                >
                   Annuler 
                </button>

                <button
                  type="button"
                  onClick={() => {
                    addToCart(product, quantity);
                    setShowModal(false);
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-sm transition hover:bg-blue-700 active:scale-98"
                >
                   Ajouter 
                </button>
              </div>

            </div>
          </div>
        </>
      )}

      <BottomNav />
    </main>
  );
}