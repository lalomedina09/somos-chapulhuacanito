import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import BolsaDetallePage from './pages/BolsaDetallePage';
import BolsaPage from './pages/BolsaPage';
import { AvisoPage, default as AvisosPage } from './pages/AvisosPage';
import ComunidadPage from './pages/ComunidadPage';
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

const CulturaPage = lazy(() => import('./pages/CulturaPage'));

function RedirigirXantolo() {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: '/cultura', search, hash }} replace />;
}

function CargandoXantolo() {
  return (
    <p className="mx-auto min-h-[50vh] max-w-7xl px-4 py-24 text-center text-tinta/75" role="status">
      Cargando la página de Xantolo…
    </p>
  );
}

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
          <Route
            path="cultura"
            element={
              <Suspense fallback={<CargandoXantolo />}>
                <CulturaPage />
              </Suspense>
            }
          />
          <Route path="xantolo" element={<RedirigirXantolo />} />
          <Route path="turismo" element={<TurismoPage />} />
          <Route path="turismo/:id" element={<TurismoDetallePage />} />
          <Route path="noticias" element={<NoticiasPage />} />
          <Route path="noticias/:id" element={<NoticiaPage />} />
          <Route path="mapa" element={<MapaPage />} />
          <Route path="reportar" element={<ReportarPage />} />
          <Route path="bolsa-de-trabajo" element={<BolsaPage />} />
          <Route path="bolsa-de-trabajo/:id" element={<BolsaDetallePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
