import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { GraphicDesign } from './GraphicDesign';
import { UiUx } from './UiUx';
import { Footer } from './Footer';

export function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
      });
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <GraphicDesign />
      <UiUx />
      <Footer />
    </>
  );
}
