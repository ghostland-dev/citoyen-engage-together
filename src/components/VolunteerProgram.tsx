
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Clock, Award, Calendar, Users, BookOpen, Heart, TrendingUp, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VolunteerProgram = () => {
  const { toast } = useToast();
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const userStats = {
    totalHours: 24,
    monthlyHours: 8,
    monthlyGoal: 12,
    level: 'Bénévole Engagé',
    points: 240,
    nextLevel: 'Ambassadeur Social',
    nextLevelPoints: 500
  };

  const programs = [
    {
      id: 'education',
      title: 'Soutien scolaire',
      description: 'Accompagnez des élèves en difficulté dans leur parcours éducatif',
      organization: 'Association Réussite pour Tous',
      commitment: '2h/semaine',
      duration: '6 mois',
      category: 'Éducation',
      participants: 15,
      icon: BookOpen,
      skills: ['Pédagogie', 'Patience', 'Communication'],
      impact: 'Amélioration des résultats scolaires de 85% des élèves accompagnés'
    },
    {
      id: 'seniors',
      title: 'Compagnonnage seniors',
      description: 'Rompez l\'isolement des personnes âgées par des visites régulières',
      organization: 'Les Petits Frères des Pauvres',
      commitment: '3h/mois',
      duration: '1 an',
      category: 'Social',
      participants: 8,
      icon: Heart,
      skills: ['Empathie', 'Écoute', 'Bienveillance'],
      impact: '100% des bénéficiaires rapportent une amélioration de leur bien-être'
    },
    {
      id: 'environment',
      title: 'Protection de l\'environnement',
      description: 'Participez à des actions de préservation de la biodiversité locale',
      organization: 'EcoAction Locale',
      commitment: '1 journée/mois',
      duration: 'Flexible',
      category: 'Environnement',
      participants: 22,
      icon: Award,
      skills: ['Travail en équipe', 'Passion nature', 'Engagement'],
      impact: '500 arbres plantés et 10 espaces verts restaurés cette année'
    }
  ];

  const myActivities = [
    {
      date: '2024-05-28',
      activity: 'Soutien scolaire - Mathématiques',
      duration: '2h',
      organization: 'Association Réussite pour Tous',
      status: 'Validé'
    },
    {
      date: '2024-05-21',
      activity: 'Visite chez Mme Martin',
      duration: '3h',
      organization: 'Les Petits Frères des Pauvres',
      status: 'Validé'
    },
    {
      date: '2024-05-15',
      activity: 'Plantation d\'arbres - Parc Municipal',
      duration: '4h',
      organization: 'EcoAction Locale',
      status: 'En attente'
    }
  ];

  const handleJoinProgram = (programTitle: string) => {
    toast({
      title: "Candidature envoyée !",
      description: `Votre candidature pour "${programTitle}" a été transmise à l'organisation partenaire.`,
    });
  };

  const handleLogActivity = () => {
    toast({
      title: "Activité enregistrée !",
      description: "Votre temps de bénévolat a été ajouté à votre compteur.",
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Éducation': return 'bg-blue-100 text-blue-800';
      case 'Social': return 'bg-pink-100 text-pink-800';
      case 'Environnement': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Programme de bénévolat</h2>
        <p className="text-lg text-gray-600">Engagez-vous sur votre temps de travail pour des causes qui vous tiennent à cœur</p>
      </div>

      {/* Statistiques personnelles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-800">
              <Clock className="w-5 h-5" />
              <span>Mes heures</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-900">{userStats.totalHours}h</div>
            <p className="text-sm text-blue-700">Total cette année</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Ce mois: {userStats.monthlyHours}h / {userStats.monthlyGoal}h</span>
                <span>{Math.round((userStats.monthlyHours / userStats.monthlyGoal) * 100)}%</span>
              </div>
              <Progress value={(userStats.monthlyHours / userStats.monthlyGoal) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-purple-800">
              <Award className="w-5 h-5" />
              <span>Mon niveau</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-purple-900">{userStats.level}</div>
            <p className="text-sm text-purple-700">{userStats.points} points</p>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Prochain: {userStats.nextLevel}</span>
                <span>{userStats.nextLevelPoints - userStats.points} pts</span>
              </div>
              <Progress value={(userStats.points / userStats.nextLevelPoints) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-800">
              <TrendingUp className="w-5 h-5" />
              <span>Impact</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-900">+35%</div>
            <p className="text-sm text-green-700">d'engagement ce mois</p>
            <div className="mt-4">
              <Badge variant="secondary" className="bg-green-200 text-green-800">
                Top 10% de l'entreprise
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Programmes disponibles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Programmes de bénévolat disponibles</span>
          </CardTitle>
          <CardDescription>
            Choisissez un programme qui correspond à vos valeurs et disponibilités
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <Card key={program.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                      </div>
                      <Badge className={getCategoryColor(program.category)}>
                        {program.category}
                      </Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Organisation:</span>
                        <span className="font-medium">{program.organization}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Engagement:</span>
                        <span className="font-medium">{program.commitment}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Durée:</span>
                        <span className="font-medium">{program.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Participants:</span>
                        <span className="font-medium">{program.participants} bénévoles</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Compétences développées:</p>
                      <div className="flex flex-wrap gap-1">
                        {program.skills.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Impact:</strong> {program.impact}
                      </p>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      onClick={() => handleJoinProgram(program.title)}
                    >
                      Rejoindre ce programme
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Historique d'activités */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>Mes dernières activités</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="space-y-1">
                    <p className="font-medium text-gray-800">{activity.activity}</p>
                    <p className="text-sm text-gray-600">{activity.organization}</p>
                    <p className="text-xs text-gray-500">{new Date(activity.date).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="font-bold text-blue-600">{activity.duration}</div>
                    <Badge variant={activity.status === 'Validé' ? 'default' : 'secondary'}>
                      {activity.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="w-5 h-5 text-purple-600" />
              <span>Déclarer une activité</span>
            </CardTitle>
            <CardDescription>
              Enregistrez vos heures de bénévolat réalisées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input placeholder="Nom de l'activité" />
              <Input placeholder="Organisation" />
              <Input type="date" />
              <Input placeholder="Durée (en heures)" type="number" />
              <Textarea placeholder="Description de l'activité (optionnel)" />
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                onClick={handleLogActivity}
              >
                Enregistrer mon activité
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VolunteerProgram;
