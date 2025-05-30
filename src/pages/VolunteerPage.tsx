
import VolunteerProgram from '@/components/VolunteerProgram';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      <Header activeTab="volunteer" setActiveTab={() => {}} />
      <main className="container mx-auto px-4 py-8">
        <VolunteerProgram />
      </main>
      <Footer />
    </div>
  );
};

export default VolunteerPage;
