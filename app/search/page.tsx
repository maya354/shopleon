// app/search/page.tsx
import BottomNav from '@/components/BottomNav';

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white pb-24">
      {/* Search Input Area */}
      <div className="p-6">
        <div className="relative w-full">
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="w-full bg-blue-50 text-blue-900 placeholder-blue-300 rounded-2xl py-3 px-4 outline-none"
          />
          {/* Simple search icon placeholder */}
          <span className="absolute right-4 top-3 text-blue-400 font-bold">🔍</span>
        </div>
        
        <p className="text-blue-900 mt-6 font-medium">Rechercher un produit</p>
      </div>

      {/* Bottom Nav included on this page too */}
      <BottomNav />
    </main>
  );
}