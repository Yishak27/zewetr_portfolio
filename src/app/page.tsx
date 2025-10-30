import About from '@/components/About';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Portfolio from '@/components/Portfolio';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Blog />
      <Portfolio />
      <Footer />
    </main>
  );
}