import './App.css';
import About from './components/AboutSection/About';
import Contact from './components/ContactSection/Contact';
import Footer from './components/Footer';
import Hero from './components/HeaderSection/Hero';
import Infos from './components/InfoSection/Infos';
import Portfolio from './components/PortfolioSection/Portfolio';
import Services from './components/ServicesSection/Services';

function App() {
  return (
    <>
      <Hero />
      <Infos />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;