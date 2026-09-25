import { Link } from 'react-router-dom';
import logoBlanco from '../assets/logo-blanco.svg';
import { footerExplore, footerParticipa } from '../data/nav';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="mt-16 bg-verde-900 pb-28 text-white/80 lg:pb-0">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.3fr] lg:px-8">
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <img
            src={logoBlanco}
            alt="Somos Chapulhuacanito — Raíces, comunidad y futuro"
            className="h-14 w-auto"
            width="186"
            height="56"
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm">
            Un espacio digital hecho por y para la comunidad: información clara, participación y orgullo por nuestras raíces.
          </p>
        </div>
        <nav aria-label="Explora">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explora</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerExplore.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-[#FFB27A]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Participa">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Participa</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerParticipa.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-[#FFB27A]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h3>
          {/* Datos de contacto de ejemplo: confirmar antes de publicar */}
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Icon id="i-ubicacion" className="icono mt-0.5 h-4 w-4 shrink-0" />
              Chapulhuacanito, Tamazunchale, S.L.P.
            </li>
            <li className="flex items-start gap-2">
              <Icon id="i-correo" className="icono mt-0.5 h-4 w-4 shrink-0" />
              <a href="mailto:contacto@somoschapulhuacanito.mx" className="[overflow-wrap:anywhere] hover:text-[#FFB27A]">
                contacto@somoschapulhuacanito.mx
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Somos Chapulhuacanito</p>
          <p className="font-mano text-lg text-[#FFC078]">Raíces, comunidad y futuro</p>
        </div>
      </div>
    </footer>
  );
}
