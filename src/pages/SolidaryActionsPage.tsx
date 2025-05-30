
import SolidaryActions from '@/components/SolidaryActions';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SolidaryActionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab="solidary" setActiveTab={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <SolidaryActions />
      </main>
      <Footer />
    </div>
  );
};

export default SolidaryActionsPage;
