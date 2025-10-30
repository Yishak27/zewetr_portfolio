import About from '@/components/About';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation/>
      <Hero />
      <Gallery/>
      <About/>
    </main>
  );
}