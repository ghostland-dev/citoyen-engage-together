
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, MapPin, Users, Search, Filter, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SolidaryActions = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const actions = [
    {
      id: '1',
      title: 'Nettoyage du Parc Central',
      description: 'Rejoignez-nous pour nettoyer et embellir notre parc local. Une belle opportunité de faire du bien à notre environnement.',
      date: '2024-06-15',
      location: 'Parc Central, 123 Rue de la Nature',
      category: 'Environnement',
      participants: { current: 25, max: 40 },
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Aide aux Restos du Cœur',
      description: 'Participez à la distribution de repas et à l\'aide alimentaire pour les personnes en difficulté.',
      date: '2024-06-22',
      location: 'Centre Restos du Cœur, 456 Rue de la Solidarité',
      category: 'Social',
      participants: { current: 15, max: 25 },
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop'
    },
    {
      id: '3',
      title: 'Atelier numérique seniors',
      description: 'Aidez les personnes âgées à maîtriser les outils numériques et les nouvelles technologies.',
      date: '2024-06-28',
      location: 'Maison des seniors, 789 Avenue de l\'Aide',
      category: 'Éducation',
      participants: { current: 12, max: 15 },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=200&fit=crop'
    },
    {
      id: '4',
      title: 'Collecte de vêtements',
      description: 'Organisez et triez les dons de vêtements pour les redistribuer aux associations locales.',
      date: '2024-07-05',
      location: 'Entrepôt solidaire, 321 Rue du Partage',
      category: 'Social',
      participants: { current: 8, max: 20 },
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop'
    },
    {
      id: '5',
      title: 'Plantation d\'arbres',
      description: 'Contribuez à la reforestation urbaine en plantant des arbres dans notre quartier.',
      date: '2024-07-12',
      location: 'Zone de reforestation, Quartier Vert',
      category: 'Environnement',
      participants: { current: 30, max: 30 },
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=200&fit=crop'
    }
  ];

  const filteredActions = actions.filter(action => {
    const matchesSearch = action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         action.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || action.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Environnement': return 'bg-green-100 text-green-800';
      case 'Social': return 'bg-blue-100 text-blue-800';
      case 'Éducation': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleActionClick = (actionId: string) => {
    navigate(`/action/${actionId}`);
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Journées Solidaires</h2>
        <p className="text-lg text-gray-600">Découvrez et participez aux actions solidaires de votre entreprise</p>
      </div>

      {/* Filtres et recherche */}
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Rechercher une action..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="Environnement">Environnement</SelectItem>
                <SelectItem value="Social">Social</SelectItem>
                <SelectItem value="Éducation">Éducation</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Liste des actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredActions.map((action) => (
          <Card key={action.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
            <div 
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${action.image})` }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
              <div className="absolute top-3 left-3">
                <Badge className={getCategoryColor(action.category)}>
                  {action.category}
                </Badge>
              </div>
              <div className="absolute bottom-3 right-3">
                <Badge variant={action.participants.current >= action.participants.max ? "destructive" : "secondary"}>
                  {action.participants.current}/{action.participants.max}
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                {action.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {action.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(action.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="truncate">{action.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{action.participants.current} participants inscrits</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
                onClick={() => handleActionClick(action.id)}
                disabled={action.participants.current >= action.participants.max}
              >
                <Heart className="w-4 h-4 mr-2" />
                {action.participants.current >= action.participants.max ? 'Complet' : 'Rejoindre'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActions.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Aucune action trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche ou de filtrage.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SolidaryActions;
