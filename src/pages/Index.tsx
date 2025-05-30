
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Rediriger vers le dashboard par défaut
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab="dashboard" setActiveTab={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
