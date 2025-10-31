import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import LeadMagnet from '@/components/LeadMagnet';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';

export default function Home() { 
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <LeadMagnet />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />     
    </main>
  );
}