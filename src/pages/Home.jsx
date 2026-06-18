import About from '../components/About.jsx';
import Benefits from '../components/Benefits.jsx';
import DownloadCTA from '../components/DownloadCTA.jsx';
import FAQ from '../components/FAQ.jsx';
import Features from '../components/Features.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Navbar from '../components/Navbar.jsx';
import Screenshots from '../components/Screenshots.jsx';
import Testimonials from '../components/Testimonials.jsx';
import WhyChoose from '../components/WhyChoose.jsx';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Screenshots />
        <Benefits />
        <WhyChoose />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
