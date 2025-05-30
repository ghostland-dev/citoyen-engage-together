
import { Heart, Users, Calendar, BarChart3, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3, path: '/dashboard' },
    { id: 'solidary', label: 'Journées solidaires', icon: Heart, path: '/solidary-actions' },
    { id: 'volunteer', label: 'Bénévolat', icon: Users, path: '/volunteer' },
  ];

  const handleNavigation = (item: any) => {
    setActiveTab(item.id);
    navigate(item.path);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const getCurrentActiveTab = () => {
    const currentPath = location.pathname;
    const currentItem = navItems.find(item => item.path === currentPath);
    return currentItem?.id || activeTab;
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={handleLogoClick}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">EngageCorp</h1>
              <p className="text-sm text-gray-600">Programme d'engagement citoyen</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = getCurrentActiveTab() === item.id;
                return (
                  <Button
                    key={item.id}
                    variant={isActive ? "default" : "ghost"}
                    onClick={() => handleNavigation(item)}
                    className={`flex items-center space-x-2 transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg' 
                        : 'hover:bg-green-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Button>
                );
              })}
            </nav>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={handleProfileClick}
              className="flex items-center space-x-2 hover:bg-green-50"
            >
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white text-sm">
                  MD
                </AvatarFallback>
              </Avatar>
              <span className="hidden lg:inline text-sm">Marie Dubois</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
