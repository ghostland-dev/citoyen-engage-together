
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Calendar, Clock, Award, TrendingUp, Heart } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      title: 'Employés engagés', 
      value: '247', 
      subtitle: '+12% ce mois', 
      icon: Users, 
      color: 'from-blue-500 to-blue-600' 
    },
    { 
      title: 'Actions réalisées', 
      value: '18', 
      subtitle: '3 en cours', 
      icon: Heart, 
      color: 'from-green-500 to-green-600' 
    },
    { 
      title: 'Heures bénévolat', 
      value: '1,420h', 
      subtitle: 'Ce trimestre', 
      icon: Clock, 
      color: 'from-purple-500 to-purple-600' 
    },
    { 
      title: 'Impact social', 
      value: '95%', 
      subtitle: 'Satisfaction', 
      icon: Award, 
      color: 'from-orange-500 to-orange-600' 
    },
  ];

  const upcomingActions = [
    {
      title: 'Nettoyage du Parc Central',
      date: '15 Juin 2024',
      participants: 25,
      category: 'Environnement',
      status: 'Ouvert'
    },
    {
      title: 'Aide aux Restos du Cœur',
      date: '22 Juin 2024',
      participants: 15,
      category: 'Social',
      status: 'Places limitées'
    },
    {
      title: 'Atelier numérique seniors',
      date: '28 Juin 2024',
      participants: 12,
      category: 'Éducation',
      status: 'Complet'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Tableau de bord</h2>
        <p className="text-lg text-gray-600">Suivez l'impact de votre engagement citoyen</p>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-xs text-gray-500 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.subtitle}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Objectif mensuel */}
      <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-green-600" />
            <span>Objectif mensuel : 300 employés engagés</span>
          </CardTitle>
          <CardDescription>
            Nous sommes à 82% de notre objectif pour ce mois !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>247 / 300 employés</span>
              <span className="text-green-600 font-medium">82%</span>
            </div>
            <Progress value={82} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Actions à venir */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span>Prochaines actions solidaires</span>
          </CardTitle>
          <CardDescription>
            Inscrivez-vous aux prochaines actions et faites la différence
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="space-y-1">
                  <h4 className="font-medium text-gray-800">{action.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {action.date}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {action.participants} participants
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">{action.category}</Badge>
                  <Badge 
                    variant={action.status === 'Complet' ? 'destructive' : action.status === 'Places limitées' ? 'default' : 'secondary'}
                  >
                    {action.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
