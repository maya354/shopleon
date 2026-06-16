export default function Products() {
  const products = [
    { name: "Lessive liquide", desc: "Propreté éclatante" },
    { name: "Lessive en poudre", desc: "Efficacité maximale" },
    { name: "Adoucissant", desc: "Douceur exceptionnelle" },
    { name: "Liquide vaisselle", desc: "Dégraisse en profondeur" },
    { name: "Produit spécial", desc: "Nettoyage intensif" },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Green Label - Styled to look like the reference */}
      <p className="text-green-600 font-serif italic text-lg mb-2">Nos produits</p>
      
      {/* Title - Smaller and more elegant */}
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 max-w-xl leading-snug">
        Une gamme complète pour tous vos besoins
      </h2>
      <p className="text-gray-500 mb-12 max-w-md text-sm">
        Des formules performantes et respectueuses de votre linge et de l'environnement.
      </p>

      {/* Product Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white border border-gray-100 rounded-3xl p-4 md:p-6 text-center hover:border-blue-200 transition-all">
            <div className="w-full h-32 md:h-40 bg-gray-50 rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-gray-300 text-xs">Image</span>
            </div>
            <h3 className="font-semibold text-blue-900 text-sm">{product.name}</h3>
            <p className="text-[11px] text-gray-500 mt-1 mb-4 leading-tight">{product.desc}</p>
            
            {/* The small, clean button from the image */}
            <button className="border border-blue-200 text-blue-600 text-xs px-4 py-1.5 rounded-full hover:bg-blue-50 transition">
              Découvrir
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}