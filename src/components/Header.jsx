import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { mainNav } from '../data/nav';
import Icon from './Icon';

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja';
const desktopLink = `inline-flex min-h-11 items-center rounded-full px-2.5 py-2 transition hover:text-naranja-700 2xl:px-3 ${focusRing}`;
const desktopActive = `relative inline-flex min-h-11 items-center rounded-full px-2.5 py-2 text-naranja-700 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-naranja-700 2xl:px-3 ${focusRing}`;
const mobileLink = `block min-h-11 rounded-xl px-4 py-3 hover:bg-white ${focusRing}`;
const mobileActive = `block min-h-11 rounded-xl bg-naranja-50 px-4 py-3 text-naranja-700 ${focusRing}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const focusable = () =>
      [buttonRef.current, ...(menuRef.current ? [...menuRef.current.querySelectorAll('a, button')] : [])].filter(Boolean);

    menuRef.current?.querySelector('a, button')?.focus();

    function onKey(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    function onPointer(event) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setOpen(false);
    }

    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-crema-200/70 bg-crema/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className={`flex shrink-0 items-center rounded-lg ${focusRing}`} aria-label="Somos Chapulhuacanito, ir al inicio">
          <img
            src={logo}
            alt="Somos Chapulhuacanito — Raíces, comunidad y futuro"
            className="h-11 w-auto lg:h-14"
            width="186"
            height="56"
          />
        </Link>

        <nav className="hidden min-w-0 xl:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-0.5 text-[15px] font-medium text-tinta/80 2xl:gap-1">
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Link
            to="/#buscar"
            className={`grid h-11 w-11 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja-700 ${focusRing}`}
            aria-label="Buscar"
          >
            <Icon id="i-buscar" className="icono h-5 w-5" />
          </Link>
          <NavLink
            to="/avisos"
            className={`relative grid h-11 w-11 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja-700 xl:hidden ${focusRing}`}
            aria-label="Avisos (3 nuevos)"
          >
            <Icon id="i-campana" className="icono h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-crema bg-naranja" />
          </NavLink>
          <button
            type="button"
            className={`hidden min-h-11 cursor-pointer whitespace-nowrap rounded-full border-0 bg-naranja px-5 py-3 font-sans text-sm font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600 sm:inline-flex ${focusRing}`}
          >
            Iniciar sesión
          </button>
          <button
            id="btn-menu"
            ref={buttonRef}
            type="button"
            className={`grid h-11 w-11 cursor-pointer place-items-center rounded-full border-0 bg-transparent font-sans text-tinta transition hover:bg-naranja-50 xl:hidden ${focusRing}`}
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
        ref={menuRef}
        className={`${open ? '' : 'hidden'} max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-crema-200 bg-crema lg:max-h-[calc(100dvh-5rem)] xl:hidden`}
        aria-label="Navegación móvil"
      >
        <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 pb-28 text-base font-medium sm:px-6 lg:pb-4">
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
              className={`block min-h-11 w-full cursor-pointer rounded-full border-0 bg-naranja px-4 py-3 text-center font-sans font-semibold text-white ${focusRing}`}
            >
              Iniciar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
