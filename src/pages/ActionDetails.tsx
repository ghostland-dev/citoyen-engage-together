import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const ActionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulation des données d'action (en réalité, cela viendrait d'une API)
  const actionData = {
    "1": {
      title: 'Nettoyage du Parc Central',
      description: 'Rejoignez-nous pour nettoyer et embellir notre parc local. Cette action permet de préserver notre environnement tout en créant du lien social entre collègues.',
      fullDescription: 'Cette journée solidaire s\'inscrit dans notre démarche RSE et permet à chaque participant de contribuer concrètement à l\'amélioration de notre cadre de vie local. Nous fournirons tous les équipements nécessaires : gants, sacs poubelles, outils de nettoyage, et collations.',
      date: '2024-06-15',
      time: '09:00 - 12:00',
      location: 'Parc Central, 123 Rue de la Nature',
      category: 'Environnement',
      participants: { current: 25, max: 40 },
      organizer: 'Marie Dupont',
      skills: ['Aucune compétence particulière requise'],
      benefits: ['Temps libéré par l\'entreprise', 'Transport pris en charge', 'Collation offerte'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop'
    }
  };

  const action = id ? actionData[id as keyof typeof actionData] : undefined;

  if (!action) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
        <Header activeTab="solidary" setActiveTab={() => {}} />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Action non trouvée</h2>
            <Button onClick={() => navigate('/solidary-actions')}>
              Retour aux actions
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleJoinAction = () => {
    toast({
      title: "Inscription confirmée !",
      description: `Vous êtes inscrit(e) à l'action "${action.title}". Un email de confirmation vous sera envoyé.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Environnement': return 'bg-green-100 text-green-800';
      case 'Social': return 'bg-blue-100 text-blue-800';
      case 'Éducation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab="solidary" setActiveTab={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/solidary-actions')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux actions
          </Button>

          <div className="h-64 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${action.image})` }}>
            <div className="h-full bg-black/20 flex items-end p-6 rounded-lg">
              <Badge className={getCategoryColor(action.category)}>
                {action.category}
              </Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-3xl">{action.title}</CardTitle>
                <Badge variant={action.participants.current >= action.participants.max ? "destructive" : "secondary"}>
                  {action.participants.current}/{action.participants.max} participants
                </Badge>
              </div>
              <CardDescription className="text-lg">{action.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span>{new Date(action.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>{action.time}</span>
                </div>
                <div className="flex items-center space-x-3 md:col-span-2">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span>{action.location}</span>
                </div>
                <div className="flex items-center space-x-3 md:col-span-2">
                  <Users className="w-5 h-5 text-gray-500" />
                  <span>Organisé par {action.organizer}</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Description complète</h3>
                <p className="text-gray-700">{action.fullDescription}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Ce qui est inclus</h3>
                <ul className="space-y-2">
                  {action.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-green-500" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Compétences requises</h3>
                <ul className="space-y-2">
                  {action.skills.map((skill, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Badge variant="outline">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-lg py-6"
                onClick={handleJoinAction}
                disabled={action.participants.current >= action.participants.max}
              >
                {action.participants.current >= action.participants.max ? 'Action complète' : 'Rejoindre cette action'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ActionDetails;
