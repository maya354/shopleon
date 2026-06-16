export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <p className="text-green-600 font-serif italic text-lg">Contactez-nous</p>
      <h2 className="text-4xl font-bold text-blue-900 mb-8">Nous sommes là pour vous aider</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <input type="text" placeholder="Nom complet" className="w-full p-3 rounded-lg border" />
          <div className="grid grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="p-3 rounded-lg border" />
            <select className="p-3 rounded-lg border text-gray-400"><option>Sujet</option></select>
          </div>
          <textarea placeholder="Votre message" className="w-full p-3 rounded-lg border h-32" />
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full">Envoyer le message →</button>
        </div>
        <div className="bg-gray-200 rounded-3xl h-64 flex items-center justify-center text-gray-500">
          [Carte - Placeholder]
        </div>
      </div>
    </section>
  );
}