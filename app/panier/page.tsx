'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';

export default function PanierPage() {
  const { cart, removeFromCart, updateCartQuantity } = useCart(); 
  
  // Local state to manage quantities instantly for lightning-fast UI updates
  const [localCart, setLocalCart] = useState<any[]>([]);

  // Keep local state in sync with global context cart
  useEffect(() => {
    if (cart) {
      setLocalCart(cart);
    }
  }, [cart]);

  // Calculate dynamic total directly from the active state
  const total = localCart.reduce((acc: number, item: any) => acc + (item.price * item.cartQuantity), 0);

  // Handle clicking the Plus (+) button
  const handleIncrement = (productId: string | number) => {
    const updatedLocalCart = localCart.map((item) => {
      if (item.id === productId) {
        const newQty = item.cartQuantity + 1;
        
        // Synchronize with your global context if the function exists
        if (typeof updateCartQuantity === 'function') {
          updateCartQuantity(productId, newQty);
        }
        
        return { ...item, cartQuantity: newQty };
      }
      return item;
    });
    
    setLocalCart(updatedLocalCart);
  };

  // Handle clicking the Minus (-) button
  const handleDecrement = (productId: string | number) => {
    let shouldRemove = false;

    const updatedLocalCart = localCart.map((item) => {
      if (item.id === productId) {
        if (item.cartQuantity <= 1) {
          shouldRemove = true;
          return item;
        }
        
        const newQty = item.cartQuantity - 1;
        
        // Synchronize with your global context if the function exists
        if (typeof updateCartQuantity === 'function') {
          updateCartQuantity(productId, newQty);
        }
        
        return { ...item, cartQuantity: newQty };
      }
      return item;
    });

    if (shouldRemove) {
      removeFromCart(productId);
    } else {
      setLocalCart(updatedLocalCart);
    }
  };

  // Shopify-Style Clean Empty State View
  if (localCart.length === 0) {
    return (
      <main className="p-4 min-h-screen bg-gray-50 flex flex-col justify-between pb-24">
        <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto text-center px-4">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag className="text-gray-400" size={28} />
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-1">Votre panier est vide</h2>
          <p className="text-gray-500 text-sm mb-6">
            Découvrez nos produits et commencez vos achats dès aujourd'hui.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl text-sm transition hover:bg-blue-700 active:scale-98 shadow-sm"
          >
            Continuer mes achats
          </Link>
        </div>
        <BottomNav />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      {/* HEADER BAR */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3">
        <Link href="/" className="p-1.5 hover:bg-gray-100 rounded-lg transition">
          <ArrowLeft size={20} className="text-gray-700" />
        </Link>
        <h1 className="text-lg font-bold text-gray-900">Mon Panier ({localCart.length})</h1>
      </header>

      {/* MAIN CONTAINER */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        
        {/* PRODUCTS LIST */}
        <div className="space-y-3">
          {localCart.map((item: any, index: number) => (
            <div key={item.id || index} className="flex gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative">
              
              {/* Product Image */}
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2 border border-gray-100">
                <Image 
                  src={item.image || "/image.png"} 
                  alt={item.name} 
                  width={80} 
                  height={80} 
                  className="object-contain w-full h-full"
                />
              </div>
              
              {/* Product Details Content */}
              <div className="flex-1 flex flex-col justify-between min-w-0 pr-8">
                <div>
                  <h2 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{item.name}</h2>
                  <p className="text-sm font-bold text-blue-600 mt-0.5">{item.price} DA</p>
                </div>
                
                {/* Fixed Premium Horizontal Quantity Selector Bar */}
                <div className="flex items-center justify-between w-28 border border-gray-200 rounded-lg p-1 bg-gray-50 mt-2">
                  <button 
                    type="button"
                    onClick={() => handleDecrement(item.id)}
                    className="w-7 h-7 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition active:scale-90"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-medium text-sm text-gray-900 select-none">
                    {item.cartQuantity}
                  </span>
                  <button 
                    type="button"
                    onClick={() => handleIncrement(item.id)}
                    className="w-7 h-7 bg-white rounded shadow-sm flex items-center justify-center text-gray-500 hover:bg-gray-50 transition active:scale-90"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Trash/Delete Action Button */}
              <button 
                type="button"
                onClick={() => removeFromCart(item.id)} 
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 p-1 rounded-lg transition-colors"
                aria-label="Supprimer le produit"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY SECTION */}
        <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm mt-6">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Détails de la commande</h3>
          
          <div className="space-y-2.5 pb-4 border-b border-gray-100 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Sous-total</span> 
              <span className="font-medium text-gray-900">{total} DA</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Livraison</span> 
              <span className="text-green-600 font-medium">Calculé à l'étape suivante</span>
            </div>
          </div>
          
          <div className="flex justify-between items-baseline font-bold text-gray-900 mt-4">
            <span className="text-base">Total</span> 
            <span className="text-xl text-blue-600">{total} DA</span>
          </div>
          
          <button 
            type="button"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 rounded-xl mt-6 shadow-sm transition active:scale-98 text-center text-sm"
          >
            Passer la commande
          </button>
        </div>

      </div>

      <BottomNav />
    </main>
  );
}