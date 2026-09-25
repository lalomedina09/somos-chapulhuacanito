import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { AvisoPage, default as AvisosPage } from './pages/AvisosPage';
import ComunidadPage from './pages/ComunidadPage';
import CulturaPage from './pages/CulturaPage';
import { EventoPage, default as EventosPage } from './pages/EventosPage';
import HomePage from './pages/HomePage';
import MapaPage from './pages/MapaPage';
import { NegocioPage, default as NegociosPage } from './pages/NegociosPage';
import { NoticiaPage, default as NoticiasPage } from './pages/NoticiasPage';
import NotFoundPage from './pages/NotFoundPage';
import ReportarPage from './pages/ReportarPage';
import ServiciosPage from './pages/ServiciosPage';
import TransportePage from './pages/TransportePage';
import { TurismoDetallePage, default as TurismoPage } from './pages/TurismoPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="comunidad" element={<ComunidadPage />} />
          <Route path="avisos" element={<AvisosPage />} />
          <Route path="avisos/:id" element={<AvisoPage />} />
          <Route path="negocios" element={<NegociosPage />} />
          <Route path="negocios/:id" element={<NegocioPage />} />
          <Route path="transporte" element={<TransportePage />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="eventos" element={<EventosPage />} />
          <Route path="eventos/:id" element={<EventoPage />} />
          <Route path="cultura" element={<CulturaPage />} />
          <Route path="turismo" element={<TurismoPage />} />
          <Route path="turismo/:id" element={<TurismoDetallePage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="noticias/:id" element={<NoticiaPage />} />
          <Route path="mapa" element={<MapaPage />} />
          <Route path="reportar" element={<ReportarPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
