import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Icono } from './Iconos.jsx'
import { publico } from '../lib/publico.js'

const ENLACES = [
  { to: '/', etiqueta: 'Inicio', fin: true },
  { href: '#comunidad', etiqueta: 'Comunidad' },
  { href: '#servicios', etiqueta: 'Servicios' },
  { href: '#negocios', etiqueta: 'Negocios' },
  { href: '#turismo', etiqueta: 'Turismo' },
  { href: '#cultura', etiqueta: 'Cultura' },
  { href: '#noticias', etiqueta: 'Noticias' },
  { to: '/bolsa-de-trabajo', etiqueta: 'Bolsa de trabajo' },
]

function claseEscritorio(activo) {
  return `relative whitespace-nowrap rounded-full px-2 py-2 text-[13px] transition hover:text-naranja 2xl:px-2.5 2xl:text-[14px] ${
    activo
      ? 'text-naranja after:absolute after:inset-x-2 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-naranja'
      : ''
  }`
}

function claseMovil(activo) {
  return `block rounded-xl px-4 py-3 ${activo ? 'bg-naranja-50 text-naranja' : 'hover:bg-white'}`
}

export default function Header() {
  const [abierto, setAbierto] = useState(false)
  const { pathname } = useLocation()
  const enInicio = pathname === '/'

  useEffect(() => {
    setAbierto(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-crema-200/70 bg-crema/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Somos Chapulhuacanito, ir al inicio">
          <img src={publico('assets/logo.svg')} alt="Somos Chapulhuacanito — Raíces, comunidad y futuro" className="h-11 w-auto lg:h-14" width="186" height="56" />
        </Link>

        <nav className="hidden min-w-0 xl:block" aria-label="Navegación principal">
          <ul className="flex items-center font-medium text-tinta/80">
            {ENLACES.map((enlace) => (
              <li key={enlace.etiqueta}>
                {enlace.to ? (
                  <NavLink to={enlace.to} end={enlace.fin} className={({ isActive }) => claseEscritorio(isActive)}>
                    {enlace.etiqueta}
                  </NavLink>
                ) : (
                  <a href={enlace.href} className={claseEscritorio(false)}>
                    {enlace.etiqueta}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {enInicio ? (
            <a href="#buscar" className="grid h-10 w-10 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja" aria-label="Buscar">
              <Icono id="i-buscar" className="icono h-5 w-5" />
            </a>
          ) : (
            <Link to="/bolsa-de-trabajo" className="grid h-10 w-10 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja" aria-label="Buscar en la bolsa de trabajo">
              <Icono id="i-buscar" className="icono h-5 w-5" />
            </Link>
          )}
          <a href="#avisos" className="relative grid h-10 w-10 place-items-center rounded-full text-tinta/80 transition hover:bg-naranja-50 hover:text-naranja xl:hidden" aria-label="Avisos (3 nuevos)">
            <Icono id="i-campana" className="icono h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-crema bg-naranja" />
          </a>
          <a href="#sesion" className="hidden whitespace-nowrap rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600 sm:inline-flex">Iniciar sesión</a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-tinta transition hover:bg-naranja-50 xl:hidden"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            onClick={() => setAbierto((v) => !v)}
          >
            <Icono id={abierto ? 'i-cerrar' : 'i-menu'} className="icono h-6 w-6" />
          </button>
        </div>
      </div>

      <nav id="menu-movil" className={`${abierto ? 'block' : 'hidden'} border-t border-crema-200 bg-crema xl:hidden`} aria-label="Navegación móvil">
        <ul className="mx-auto grid max-w-7xl gap-1 px-4 py-4 text-base font-medium sm:px-6">
          {ENLACES.map((enlace) => (
            <li key={enlace.etiqueta}>
              {enlace.to ? (
                <NavLink to={enlace.to} end={enlace.fin} className={({ isActive }) => claseMovil(isActive)}>
                  {enlace.etiqueta}
                </NavLink>
              ) : (
                <a href={enlace.href} className={claseMovil(false)}>{enlace.etiqueta}</a>
              )}
            </li>
          ))}
          <li className="pt-2">
            <a href="#sesion" className="block rounded-full bg-naranja px-4 py-3 text-center font-semibold text-white">Iniciar sesión</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
