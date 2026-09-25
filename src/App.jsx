import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { sections } from './data/sections';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SectionPage from './pages/SectionPage';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          {Object.entries(sections).map(([slug, section]) => (
            <Route key={slug} path={slug} element={<SectionPage {...section} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
