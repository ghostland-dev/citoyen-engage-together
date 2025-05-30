
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { User, Award, Calendar, Clock, Heart, Settings } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const userStats = {
    name: 'Marie Dubois',
    email: 'marie.dubois@entreprise.com',
    department: 'Marketing Digital',
    joinDate: '2023-01-15',
    totalActions: 12,
    totalHours: 45,
    favoriteCategory: 'Environnement',
    level: 'Ambassadeur',
    nextLevel: 'Champion',
    progressToNext: 75
  };

  const recentActions = [
    {
      title: 'Nettoyage du Parc Central',
      date: '2024-05-20',
      category: 'Environnement',
      hours: 3,
      status: 'Terminé'
    },
    {
      title: 'Aide aux Restos du Cœur',
      date: '2024-05-10',
      category: 'Social',
      hours: 4,
      status: 'Terminé'
    },
    {
      title: 'Atelier numérique seniors',
      date: '2024-06-28',
      category: 'Éducation',
      hours: 3,
      status: 'À venir'
    }
  ];

  const achievements = [
    { title: 'Premier pas', description: 'Première action réalisée', icon: '🌟' },
    { title: 'Eco-warrior', description: '5 actions environnementales', icon: '🌱' },
    { title: 'Solidaire', description: '3 actions sociales', icon: '🤝' },
    { title: 'Régulier', description: '10 actions cette année', icon: '📅' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab="" setActiveTab={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">Mon Profil</h2>
            <p className="text-lg text-gray-600">Suivez votre engagement et vos accomplissements</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profil principal */}
            <Card className="lg:col-span-1">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-green-500 to-blue-500 text-white">
                    {userStats.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{userStats.name}</CardTitle>
                <CardDescription>{userStats.department}</CardDescription>
                <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  {userStats.level}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progression vers {userStats.nextLevel}</span>
                    <span>{userStats.progressToNext}%</span>
                  </div>
                  <Progress value={userStats.progressToNext} className="h-2" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{userStats.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Membre depuis {new Date(userStats.joinDate).toLocaleDateString('fr-FR')}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Modifier le profil
                </Button>
              </CardContent>
            </Card>

            {/* Statistiques */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Mes Statistiques</CardTitle>
                <CardDescription>Votre impact en chiffres</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{userStats.totalActions}</div>
                    <div className="text-sm text-gray-600">Actions réalisées</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{userStats.totalHours}h</div>
                    <div className="text-sm text-gray-600">Heures bénévolat</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{achievements.length}</div>
                    <div className="text-sm text-gray-600">Badges obtenus</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Heart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-lg font-bold text-orange-600">{userStats.favoriteCategory}</div>
                    <div className="text-sm text-gray-600">Catégorie favorite</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Badges et accomplissements */}
          <Card>
            <CardHeader>
              <CardTitle>Mes Badges</CardTitle>
              <CardDescription>Débloquez des badges en participant aux actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions récentes */}
          <Card>
            <CardHeader>
              <CardTitle>Mes Actions Récentes</CardTitle>
              <CardDescription>Historique de vos participations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActions.map((action, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{action.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span>{new Date(action.date).toLocaleDateString('fr-FR')}</span>
                        <Badge variant="outline">{action.category}</Badge>
                        <span>{action.hours}h</span>
                      </div>
                    </div>
                    <Badge variant={action.status === 'Terminé' ? 'default' : 'secondary'}>
                      {action.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
