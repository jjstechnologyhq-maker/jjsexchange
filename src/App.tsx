import './App.css';
import { useRates } from './hooks/useRates';
import { useWaitlist } from './hooks/useWaitlist';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PositionBar from './components/PositionBar';
import Marquee from './components/Marquee';
import Converter from './components/Converter';
import Rewards from './components/Rewards';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Mascot from './components/Mascot';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import Waitlist from './components/Waitlist';
import SuccessModal from './components/SuccessModal';
import Socials from './components/Socials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import AdminModal from './components/AdminModal';

function App() {
  const { getBuyRate, getSellRate, ngnPerUsd, spread, updateAdminRates } = useRates();
  const { position, pct, left, count, showSuccess, joinWaitlist, closeSuccess } = useWaitlist();

  const urlParams = new URLSearchParams(window.location.search);
  const adminParam = urlParams.get('admin');
  const adminPathKey = import.meta.env.VITE_ADMIN_PATH;
  const isAdminRoute = adminPathKey && adminParam === adminPathKey;

  return (
    <>
      <Navbar />
      <Hero getBuyRate={getBuyRate} />
      <PositionBar position={position} pct={pct} left={left} />
      <Marquee getBuyRate={getBuyRate} getSellRate={getSellRate} />
      <Converter getBuyRate={getBuyRate} getSellRate={getSellRate} />
      <Rewards left={left} pct={pct} position={position} />
      <HowItWorks />
      <Features />
      <Mascot />
      <Trust />
      <Testimonials />
      <Waitlist
        position={position}
        pct={pct}
        left={left}
        count={count}
        joinWaitlist={joinWaitlist}
      />
      <SuccessModal open={showSuccess} position={position} onClose={closeSuccess} />
      <Socials />
      <FAQ />
      <Footer />
      <FloatingWA />
      {isAdminRoute && (
        <AdminModal
          ngnPerUsd={ngnPerUsd}
          spread={spread}
          getBuyRate={getBuyRate}
          getSellRate={getSellRate}
          updateAdminRates={updateAdminRates}
        />
      )}
    </>
  );
}

export default App;
