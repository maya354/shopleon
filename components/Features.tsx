export default function Features() {
  const features = [
    { title: "Efficacité prouvée", desc: "Formules puissantes contre les taches tenaces" },
    { title: "Respect de la peau", desc: "Des formules douces, adaptées à toute la famille" },
    { title: "Parfum longue durée", desc: "Une fraîcheur agréable qui dure longtemps" },
    { title: "Engagement durable", desc: "Des produits respectueux de l'environnement" },
  ];

  return (
    <section className="bg-white/90 p-8 rounded-3xl mx-6 md:mx-10 mt-10 grid grid-cols-1 md:grid-cols-4 gap-8 shadow-lg">
      {features.map((item, index) => (
        <div key={index} className="text-center md:text-left">
          <h3 className="font-bold text-blue-900 text-lg">{item.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
        </div>
      ))}
    </section>
  );
}