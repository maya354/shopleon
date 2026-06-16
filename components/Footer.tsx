export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
        {/* Branding & Socials */}
        <div className="md:col-span-1 space-y-4">
          <h2 className="text-2xl font-bold">Léon</h2>
          <p className="text-sm text-blue-100 opacity-90 leading-relaxed">
            Léon s'engage à vous offrir des produits performants, respectueux de vous et de la planète.
          </p>
          <div className="flex space-x-4 pt-2">
            {/* Social Icons Placeholders */}
            <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">f</div>
            <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">in</div>
            <div className="w-6 h-6 bg-blue-800 rounded-full flex items-center justify-center">yt</div>
          </div>
        </div>

        {/* Links Columns */}
        {[
          { title: "Nos produits", links: ["Lessive liquide", "Lessive en poudre", "Adoucissant", "Liquide vaisselle"] },
          { title: "À propos", links: ["Notre histoire", "Nos engagements", "Carrières"] },
          { title: "Aide & Support", links: ["FAQ", "Conseils d'utilisation", "Livraison & Retours", "Mentions légales"] }
        ].map((section, idx) => (
          <div key={idx}>
            <h4 className="font-bold mb-6">{section.title}</h4>
            <ul className="space-y-3 text-sm text-blue-100">
              {section.links.map((link, i) => <li key={i} className="hover:text-white cursor-pointer">{link}</li>)}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-blue-100 mb-4">Recevez nos conseils et nos offres exclusives.</p>
          <div className="relative">
            <input type="email" placeholder="Votre email" className="w-full bg-blue-800 border-none rounded-full py-2.5 px-4 text-sm focus:ring-2 focus:ring-blue-400" />
            <button className="absolute right-2 top-1.5 bg-white text-blue-900 w-7 h-7 rounded-full flex items-center justify-center font-bold">→</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-blue-300 gap-4">
        <p>© 2026 Léon. Tous droits réservés.</p>
        <div className="flex space-x-6">
          <span>Mentions légales</span>
          <span>Politique de confidentialité</span>
          <span>Conditions générales de vente</span>
        </div>
      </div>
    </footer>
  );
}