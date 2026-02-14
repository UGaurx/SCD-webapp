
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Speakers, { Team } from './components/Speakers';
import Sponsors from './components/Sponsors';
import Ambassadors from './components/Ambassadors';
import CommunityPartners from './components/CommunityPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-aws-squid min-h-screen text-white font-sans selection:bg-aws-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Speakers />
        <Sponsors />
        <CommunityPartners />
        <Team />
        <Ambassadors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
