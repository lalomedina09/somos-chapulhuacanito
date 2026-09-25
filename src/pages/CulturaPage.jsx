import { useLayoutEffect } from 'react';
import AltaresXantolo from '../components/xantolo/AltaresXantolo';
import EventosXantolo from '../components/xantolo/EventosXantolo';
import GaleriaXantolo from '../components/xantolo/GaleriaXantolo';
import HeroXantolo from '../components/xantolo/HeroXantolo';
import HistoriaXantolo from '../components/xantolo/HistoriaXantolo';
import PersonajesXantolo from '../components/xantolo/PersonajesXantolo';
import TipsMapaXantolo from '../components/xantolo/TipsMapaXantolo';
import usePageTitle from '../hooks/usePageTitle';

export default function CulturaPage() {
  usePageTitle('Xantolo');

  useLayoutEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (!id) return undefined;
    const ir = () => {
      const seccion = document.getElementById(id);
      if (!seccion) return;
      seccion.scrollIntoView({ behavior: 'auto', block: 'start' });
    };
    ir();
    const timer = window.setTimeout(ir, 80);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-clip">
      <HeroXantolo />
      <HistoriaXantolo />
      <EventosXantolo />
      <GaleriaXantolo />
      <PersonajesXantolo />
      <AltaresXantolo />
      <TipsMapaXantolo />
    </div>
  );
}
