
import Dashboard from '@/components/Dashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DashboardPage = () => {
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

export default DashboardPage;
