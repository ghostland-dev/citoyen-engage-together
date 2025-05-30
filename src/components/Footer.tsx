
import { Heart, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-green-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">EngageCorp</h3>
                <p className="text-xs text-gray-600">Programme d'engagement</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Ensemble, créons un impact positif dans notre communauté et construisons un avenir plus solidaire.
            </p>
          </div>

          {/* Liens rapides */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/dashboard" className="text-gray-600 hover:text-green-600 transition-colors">
                  Tableau de bord
                </a>
              </li>
              <li>
                <a href="/solidary-actions" className="text-gray-600 hover:text-green-600 transition-colors">
                  Journées solidaires
                </a>
              </li>
              <li>
                <a href="/volunteer" className="text-gray-600 hover:text-green-600 transition-colors">
                  Bénévolat
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-600 hover:text-green-600 transition-colors">
                  Mon profil
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Centre d'aide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Guide du bénévole
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                  Contact RH
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-800">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>engagement@entreprise.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>01 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>123 Rue de l'Engagement<br />75001 Paris</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Globe className="w-4 h-4" />
                <a href="#" className="hover:text-green-600 transition-colors">
                  Site entreprise
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2024 EngageCorp. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-600 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-green-600 transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
