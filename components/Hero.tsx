export default function Hero() {
  return (
    <section className="max-w-2xl bg-white/80 p-6 md:p-10 rounded-3xl backdrop-blur-sm">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
        Détergents puissants pour une propreté irréprochable
      </h1>
      <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700">
        Découvrez une gamme complète de détergents conçus pour nettoyer efficacement et prendre soin de votre maison.
      </p>
      
      <div className="mt-8 flex flex-col md:flex-row gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold w-full md:w-auto">
          Découvrir nos produits
        </button>
        <button className="border border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold w-full md:w-auto">
          En savoir plus
        </button>
      </div>
    </section>
  );
}