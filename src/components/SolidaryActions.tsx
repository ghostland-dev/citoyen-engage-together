import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Users, Clock, Plus, Search, Filter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SolidaryActions = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const actions = [
    {
      id: 1,
      title: 'Nettoyage du Parc Central',
      description: 'Rejoignez-nous pour nettoyer et embellir notre parc local. Gants et sacs fournis.',
      date: '2024-06-15',
      time: '09:00 - 12:00',
      location: 'Parc Central, 123 Rue de la Nature',
      category: 'Environnement',
      participants: { current: 25, max: 40 },
      organizer: 'Marie Dupont',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Distribution alimentaire',
      description: 'Aidez à distribuer des repas aux personnes en difficulté avec les Restos du Cœur.',
      date: '2024-06-22',
      time: '11:00 - 15:00',
      location: 'Centre communautaire, 45 Avenue Solidaire',
      category: 'Social',
      participants: { current: 15, max: 20 },
      organizer: 'Jean Martin',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Atelier numérique seniors',
      description: 'Accompagnez des seniors dans l\'apprentissage des outils numériques.',
      date: '2024-06-28',
      time: '14:00 - 17:00',
      location: 'Médiathèque municipale, 67 Rue du Savoir',
      category: 'Éducation',
      participants: { current: 12, max: 12 },
      organizer: 'Sophie Bernard',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Plantation d\'arbres',
      description: 'Participez à la reforestation de notre commune en plantant des arbres fruitiers.',
      date: '2024-07-05',
      time: '08:00 - 12:00',
      location: 'Forêt communale, Chemin des Chênes',
      category: 'Environnement',
      participants: { current: 8, max: 30 },
      organizer: 'Pierre Moreau',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop'
    }
  ];

  const categories = ['all', 'Environnement', 'Social', 'Éducation'];

  const filteredActions = actions.filter(action => {
    const matchesSearch = action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         action.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || action.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleJoinAction = (actionTitle: string) => {
    toast({
      title: "Inscription confirmée !",
      description: `Vous êtes inscrit(e) à l'action "${actionTitle}". Un email de confirmation vous sera envoyé.`,
    });
  };

  const handleViewDetails = (actionId: number) => {
    navigate(`/action/${actionId}`);
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
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Journées solidaires</h2>
        <p className="text-lg text-gray-600">Participez à des actions citoyennes qui font la différence</p>
      </div>

      {/* Filtres et recherche */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 flex-1">
          <Search className="w-5 h-5 text-gray-400" />
          <Input
            placeholder="Rechercher une action..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border rounded-md px-3 py-2 bg-white"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'Toutes les catégories' : category}
              </option>
            ))}
          </select>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
              <Plus className="w-4 h-4 mr-2" />
              Proposer une action
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Proposer une nouvelle action</DialogTitle>
              <DialogDescription>
                Vous avez une idée d'action solidaire ? Partagez-la avec vos collègues !
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <Input placeholder="Titre de l'action" />
              <Input placeholder="Description" />
              <Input placeholder="Date et heure" type="datetime-local" />
              <Input placeholder="Lieu" />
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500">
                Soumettre ma proposition
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Liste des actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredActions.map((action) => (
          <Card key={action.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${action.image})` }}>
              <div className="h-full bg-black/20 flex items-end p-4">
                <Badge className={getCategoryColor(action.category)}>
                  {action.category}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{action.title}</CardTitle>
                <Badge variant={action.participants.current >= action.participants.max ? "destructive" : "secondary"}>
                  {action.participants.current}/{action.participants.max}
                </Badge>
              </div>
              <CardDescription className="text-base">{action.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(action.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{action.time}</span>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                  <MapPin className="w-4 h-4" />
                  <span>{action.location}</span>
                </div>
                <div className="flex items-center space-x-2 md:col-span-2">
                  <Users className="w-4 h-4" />
                  <span>Organisé par {action.organizer}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button 
                  variant="outline"
                  className="flex-1"
                  onClick={() => handleViewDetails(action.id)}
                >
                  Voir les détails
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                  onClick={() => handleJoinAction(action.title)}
                  disabled={action.participants.current >= action.participants.max}
                >
                  {action.participants.current >= action.participants.max ? 'Complet' : 'S\'inscrire'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActions.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Aucune action ne correspond à vos critères de recherche.</p>
        </div>
      )}
    </div>
  );
};

export default SolidaryActions;
