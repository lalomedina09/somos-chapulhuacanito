import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { mainNav } from '../data/nav';
import Icon from './Icon';

const desktopLink =
  'rounded-full px-3 py-2 transition hover:text-naranja';
const desktopActive =
  'relative rounded-full px-3 py-2 text-naranja after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-naranja';
const mobileLink = 'block rounded-xl px-4 py-3 hover:bg-white';
const mobileActive = 'block rounded-xl bg-naranja-50 px-4 py-3 text-naranja';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-crema-200/70 bg-crema/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Somos Chapulhuacanito, ir al inicio">
          <img
            src={logo}
            alt="Somos Chapulhuacanito — Raíces, comunidad y futuro"
            className="h-11 w-auto lg:h-14"
            width="186"
            height="56"
          />
        </Link>

        <nav className="hidden xl:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-1 text-[15px] font-medium text-tinta/80">
            {mainNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => (isActive ? desktopActive : desktopLink)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to="/#buscar"
            className="grid h-10 w-10 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja"
            aria-label="Buscar"
          >
            <Icon id="i-buscar" className="icono h-5 w-5" />
          </Link>
          <NavLink
            to="/avisos"
            className="relative grid h-10 w-10 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja xl:hidden"
            aria-label="Avisos (3 nuevos)"
          >
            <Icon id="i-campana" className="icono h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-crema bg-naranja" />
          </NavLink>
          <button
            type="button"
            className="hidden cursor-pointer whitespace-nowrap rounded-full border-0 bg-naranja px-5 py-2.5 font-sans text-sm font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600 sm:inline-flex"
          >
            Iniciar sesión
          </button>
          <button
            id="btn-menu"
            type="button"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border-0 bg-transparent font-sans text-tinta transition hover:bg-naranja-50 xl:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon id={open ? 'i-cerrar' : 'i-menu'} className="icono h-6 w-6" />
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        className={`${open ? '' : 'hidden'} border-t border-crema-200 bg-crema xl:hidden`}
        aria-label="Navegación móvil"
      >
        <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 text-base font-medium sm:px-6">
          {mainNav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? mobileActive : mobileLink)}
                onClick={close}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              className="block w-full cursor-pointer rounded-full border-0 bg-naranja px-4 py-3 text-center font-sans font-semibold text-white"
            >
              Iniciar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
