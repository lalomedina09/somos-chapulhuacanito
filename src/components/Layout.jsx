import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import IconSprite from './IconSprite';
import MobileNavigation from './MobileNavigation';

export default function Layout() {
  return (
    <>
      <IconSprite />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
      <MobileNavigation />
    </>
  );
}
