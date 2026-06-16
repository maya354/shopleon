import { products } from '@/data/products';
import Image from 'next/image';
import BottomNav from '@/components/BottomNav';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 antialiased">
      {/* Header */}
      <header className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-extrabold tracking-tight text-blue-900">Léon</h1>
      </header>
      
      {/* Hero Image */}
      <div className="relative w-full h-60 my-6 px-4 max-w-3xl mx-auto">
        <Image 
          src="/image.png" 
          alt="Léon Hero" 
          fill 
          priority 
          className="object-cover rounded-3xl shadow-sm" 
        />
      </div>
      
      {/* Products Grid */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-blue-900 mb-5">Nouveautés</h2>
        <div className="grid grid-cols-2 gap-4">
          
          {/* Dynamic Product Mapping (Identical Logic) */}
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`} 
              className="group border border-gray-100/70 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] flex flex-col justify-between"
            >
              {/* Image Container Stage */}
              <div className="relative h-40 mb-4 w-full bg-slate-50/50 rounded-xl flex items-center justify-center overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-2 transition-transform duration-300 group-hover:scale-105" 
                />
              </div>

              {/* Text Hierarchy Details */}
              <div className="flex flex-col flex-1 px-0.5">
                <h3 className="font-semibold text-sm text-blue-900 line-clamp-2 leading-snug min-h-[40px] tracking-tight group-hover:text-blue-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-blue-700 font-extrabold text-base mt-2 tracking-tight">
                  {product.price} DA
                </p>
              </div>
            </Link>
          ))}
          
        </div>
      </section>

      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
}