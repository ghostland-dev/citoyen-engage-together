
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold">EngageCorp</h3>
            </div>
            <p className="text-gray-400">
              Ensemble, construisons un monde meilleur à travers l'engagement citoyen et la solidarité.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Programmes</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Journées solidaires</li>
              <li>Bénévolat d'entreprise</li>
              <li>Actions environnementales</li>
              <li>Soutien éducatif</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Guide du bénévole</li>
              <li>FAQ</li>
              <li>Témoignages</li>
              <li>Impact social</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>engage@entreprise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>123 Rue de l'Engagement, Paris</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EngageCorp. Tous droits réservés. Plateforme développée avec ❤️ pour l'engagement citoyen.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
