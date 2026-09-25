import { Link, useLocation } from 'react-router'
import { Icono } from './Iconos.jsx'
import { publico } from '../lib/publico.js'

export default function Footer() {
  const { pathname } = useLocation()
  const enInicio = pathname === '/'

  return (
    <>
      <footer className="mt-16 bg-verde-900 pb-28 text-white/80 lg:pb-0">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.3fr] lg:px-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <img src={publico('assets/logo-blanco.svg')} alt="Somos Chapulhuacanito — Raíces, comunidad y futuro" className="h-14 w-auto" width="186" height="56" />
            <p className="mt-4 max-w-xs text-sm">Un espacio digital hecho por y para la comunidad: información clara, participación y orgullo por nuestras raíces.</p>
          </div>
          <nav aria-label="Explora">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Explora</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#comunidad" className="hover:text-[#FFB27A]">Comunidad</a></li>
              <li><a href="#negocios" className="hover:text-[#FFB27A]">Negocios</a></li>
              <li><a href="#turismo" className="hover:text-[#FFB27A]">Turismo</a></li>
              <li><a href="#cultura" className="hover:text-[#FFB27A]">Cultura y Xantolo</a></li>
            </ul>
          </nav>
          <nav aria-label="Participa">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Participa</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#avisos" className="hover:text-[#FFB27A]">Avisos y noticias</a></li>
              <li><a href="#eventos" className="hover:text-[#FFB27A]">Eventos</a></li>
              <li><a href="#reporta" className="hover:text-[#FFB27A]">Reporta un problema</a></li>
              <li><a href="#negocios" className="hover:text-[#FFB27A]">Registra tu negocio</a></li>
              <li><Link to="/bolsa-de-trabajo" className="hover:text-[#FFB27A]">Bolsa de trabajo</Link></li>
            </ul>
          </nav>
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contacto</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2"><Icono id="i-ubicacion" className="icono mt-0.5 h-4 w-4 shrink-0" />Chapulhuacanito, Tamazunchale, S.L.P.</li>
              <li className="flex items-start gap-2"><Icono id="i-correo" className="icono mt-0.5 h-4 w-4 shrink-0" /><a href="mailto:contacto@somoschapulhuacanito.mx" className="[overflow-wrap:anywhere] hover:text-[#FFB27A]">contacto@somoschapulhuacanito.mx</a></li>
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

      <nav className="fixed inset-x-0 bottom-0 z-50 lg:hidden" aria-label="Navegación inferior">
        <ul className="mx-auto grid max-w-md grid-cols-5 items-end rounded-t-3xl border-t border-crema-200 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_-12px_rgba(92,52,20,0.3)] backdrop-blur">
          <li>
            <Link to="/" aria-current={enInicio ? 'page' : undefined} className={`flex flex-col items-center gap-0.5 py-1 text-[11px] font-semibold ${enInicio ? 'text-naranja' : 'font-medium text-tinta/60'}`}>
              <Icono id="i-casa" className="icono h-6 w-6" />Inicio
            </Link>
          </li>
          <li>
            <a href="#explorar" className="flex flex-col items-center gap-0.5 py-1 text-[11px] font-medium text-tinta/60">
              <Icono id="i-brujula" className="icono h-6 w-6" />Explorar
            </a>
          </li>
          <li className="flex justify-center">
            <Link to="/bolsa-de-trabajo?publicar=1" className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-naranja text-white shadow-lg shadow-naranja/40 ring-4 ring-white transition hover:bg-naranja-600" aria-label="Publicar en la bolsa de trabajo">
              <Icono id="i-mas" className="icono h-7 w-7" />
            </Link>
          </li>
          <li>
            <a href="#avisos" className="relative flex flex-col items-center gap-0.5 py-1 text-[11px] font-medium text-tinta/60">
              <Icono id="i-campana" className="icono h-6 w-6" />Avisos
              <span className="absolute right-[26%] top-0.5 h-2 w-2 rounded-full bg-naranja" />
            </a>
          </li>
          <li>
            <a href="#sesion" className="flex flex-col items-center gap-0.5 py-1 text-[11px] font-medium text-tinta/60">
              <Icono id="i-usuario" className="icono h-6 w-6" />Perfil
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
