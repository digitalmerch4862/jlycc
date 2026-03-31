import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionSummary from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Leadership from './components/Leadership';
import Testimonials from './components/Testimonials';
import Support from './components/Support';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-jly-red selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <VisionSummary />
        <WhyChooseUs />
        <Gallery />
        <Leadership />
        <Testimonials />
        <Support />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
