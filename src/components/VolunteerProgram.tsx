
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Users, Clock, Award, Heart, Target, Calendar, TrendingUp, Star } from 'lucide-react';

const VolunteerProgram = () => {
  const programs = [
    {
      id: 1,
      title: 'Mentor Tech pour Tous',
      description: 'Partagez vos compétences techniques avec des jeunes en difficulté scolaire',
      duration: '2h/semaine',
      commitment: '6 mois',
      participants: 45,
      category: 'Éducation',
      impact: 'Fort',
      skills: ['Programmation', 'Pédagogie', 'Communication'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Soutien Scolaire Digital',
      description: 'Aidez les enfants défavorisés avec leurs devoirs et l\'utilisation d\'outils numériques',
      duration: '1h30/semaine',
      commitment: '1 an',
      participants: 32,
      category: 'Éducation',
      impact: 'Très fort',
      skills: ['Pédagogie', 'Patience', 'Informatique'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Accompagnement Seniors',
      description: 'Accompagnez les personnes âgées dans l\'apprentissage du numérique',
      duration: '2h/semaine',
      commitment: '3 mois',
      participants: 28,
      category: 'Social',
      impact: 'Fort',
      skills: ['Patience', 'Communication', 'Empathie'],
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=200&fit=crop'
    }
  ];

  const stats = [
    { label: 'Bénévoles actifs', value: '156', change: '+12%', icon: Users },
    { label: 'Heures données', value: '2,840h', change: '+18%', icon: Clock },
    { label: 'Programmes actifs', value: '8', change: '+2', icon: Target },
    { label: 'Impact social', value: '94%', change: '+3%', icon: Award }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Éducation': return 'bg-purple-100 text-purple-800';
      case 'Social': return 'bg-blue-100 text-blue-800';
      case 'Environnement': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Très fort': return 'bg-red-100 text-red-800';
      case 'Fort': return 'bg-orange-100 text-orange-800';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in-50 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Programme de Bénévolat</h2>
        <p className="text-lg text-gray-600">Engagez-vous sur le long terme et créez un impact durable</p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.label}</CardTitle>
                <Icon className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change} ce mois
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Objectif mensuel */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-600" />
            <span>Objectif 2024 : 200 bénévoles actifs</span>
          </CardTitle>
          <CardDescription>
            Nous avons atteint 78% de notre objectif annuel !
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>156 / 200 bénévoles</span>
              <span className="text-blue-600 font-medium">78%</span>
            </div>
            <Progress value={78} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Programmes disponibles */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-800">Programmes disponibles</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div 
                className="h-32 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className={getCategoryColor(program.category)}>
                    {program.category}
                  </Badge>
                  <Badge className={getImpactColor(program.impact)}>
                    Impact {program.impact}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription>
                  {program.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>{program.commitment}</span>
                  </div>
                  <div className="flex items-center space-x-2 col-span-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span>{program.participants} bénévoles actifs</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-gray-700">Compétences recherchées :</h4>
                  <div className="flex flex-wrap gap-1">
                    {program.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                  <Heart className="w-4 h-4 mr-2" />
                  Rejoindre le programme
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Témoignages */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Témoignages de bénévoles</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-gray-700 italic">
                "Accompagner les seniors dans leur découverte du numérique m'a apporté autant qu'à eux. 
                Une expérience humaine formidable !"
              </p>
              <p className="text-sm text-gray-600">— Marie L., Développeuse</p>
            </div>
            <div className="space-y-2">
              <p className="text-gray-700 italic">
                "Le mentorat tech m'a permis de développer mes compétences pédagogiques 
                tout en aidant des jeunes à construire leur avenir."
              </p>
              <p className="text-sm text-gray-600">— Thomas R., Chef de projet</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VolunteerProgram;
