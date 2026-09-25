import { useEffect } from 'react';
import ExploreSection from '../components/ExploreSection';
import Hero from '../components/Hero';
import NewsSection from '../components/NewsSection';
import QuickAccess from '../components/QuickAccess';
import XantoloBanner from '../components/XantoloBanner';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Somos Chapulhuacanito · Raíces, comunidad y futuro';
  }, []);

  return (
    <>
      <Hero />
      <QuickAccess />
      <NewsSection />
      <ExploreSection />
      <XantoloBanner />
    </>
  );
}
