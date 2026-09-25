import { Link } from 'react-router'
import { Icono } from '../components/Iconos.jsx'
import { publico } from '../lib/publico.js'
import { useTitulo } from '../lib/useTitulo.js'

const ACCESOS = [
  { icono: 'i-megafono', etiqueta: 'Avisos', clase: 'bg-verde text-white shadow-md shadow-verde/30', href: '#avisos' },
  { icono: 'i-tienda', etiqueta: 'Negocios', clase: 'bg-naranja text-white shadow-md shadow-naranja/30', href: '#negocios' },
  { icono: 'i-bus', etiqueta: 'Transporte', clase: 'bg-[#E03131] text-white shadow-md shadow-red-500/30', href: '#transporte' },
  { icono: 'i-engrane', etiqueta: 'Servicios', clase: 'bg-[#2F9E44] text-white shadow-md shadow-green-600/30', to: '/bolsa-de-trabajo' },
  { icono: 'i-calendario', etiqueta: 'Eventos', clase: 'bg-[#C2255C] text-white shadow-md shadow-pink-600/30', href: '#eventos' },
  { icono: 'i-mascara', etiqueta: 'Xantolo', clase: 'bg-red-50 text-[#D6282B] ring-1 ring-red-100', iconoClase: 'icono h-9 w-9', href: '#cultura' },
  { icono: 'i-pin', etiqueta: 'Mapa', clase: 'bg-blue-50 text-[#2B7BD6] ring-1 ring-blue-100', iconoClase: 'icono h-9 w-9', href: '#mapa' },
  { icono: 'i-portapapeles', etiqueta: 'Reporta', clase: 'bg-[#F59F00] text-white shadow-md shadow-amber-500/30', href: '#reporta' },
]

export default function HomePage() {
  useTitulo('Somos Chapulhuacanito · Raíces, comunidad y futuro')

  return (
    <>
      <section className="relative isolate overflow-hidden" aria-labelledby="titulo-hero">
        <img src={publico('assets/img/hero-paisaje.svg')} alt="Ilustración de montañas verdes de la Huasteca con un pequeño poblado en el valle" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-black/0" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/25 to-transparent" />
        <img src={publico('assets/img/cempasuchil-izq.svg')} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-8 -left-16 -z-10 w-36 sm:w-44 lg:-left-20 lg:bottom-16 lg:w-48" />
        <img src={publico('assets/img/cempasuchil-der.svg')} alt="" aria-hidden="true" className="pointer-events-none absolute -right-10 top-28 -z-10 hidden w-44 rotate-12 md:block lg:right-6 lg:top-44 lg:w-52" />

        <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-24">
          <div className="relative max-w-2xl">
            <h1 id="titulo-hero" className="texto-sombra text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Chapulhuacanito <span className="block">es su gente</span>
            </h1>
            <p className="texto-sombra mt-4 max-w-xl text-balance text-lg text-white/95 sm:text-xl">Una comunidad que avanza, conecta y preserva sus raíces.</p>

            <form id="buscar" role="search" className="mt-7 max-w-xl" action="#explorar" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="q" className="sr-only">¿Qué estás buscando?</label>
              <div className="flex items-center rounded-full bg-white p-1.5 pl-5 shadow-suave ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-naranja">
                <Icono id="i-buscar" className="icono h-5 w-5 shrink-0 text-tinta/50" />
                <input id="q" type="search" placeholder="¿Qué estás buscando?" className="w-full min-w-0 bg-transparent px-3 py-2.5 text-base text-tinta placeholder:text-tinta/50 focus:outline-none" />
                <button type="submit" className="hidden shrink-0 rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-naranja-600 sm:block">Buscar</button>
              </div>
            </form>

            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Búsquedas rápidas">
              <li><a href="#negocios" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Negocios</a></li>
              <li><a href="#transporte" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Transporte</a></li>
              <li><Link to="/bolsa-de-trabajo" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Servicios</Link></li>
              <li><a href="#eventos" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Eventos</a></li>
              <li><a href="#turismo" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Turismo</a></li>
              <li><Link to="/bolsa-de-trabajo" className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja">Bolsa de trabajo</Link></li>
            </ul>
          </div>

          <p className="texto-sombra pointer-events-none absolute right-8 top-10 hidden -rotate-6 text-right font-mano text-4xl font-bold leading-[1.05] text-white lg:block lg:right-24 lg:top-14 lg:text-5xl" aria-label="Nuestra gente, nuestra tierra, nuestro orgullo">
            Nuestra gente<br /><span className="text-[#FFD08A]">Nuestra tierra</span><br />Nuestro orgullo
          </p>
        </div>
      </section>

      <section id="explorar" className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:-mt-24 lg:px-8" aria-label="Accesos rápidos">
        <ul className="grid grid-cols-4 gap-x-2 gap-y-5 rounded-3xl bg-white p-4 shadow-suave sm:p-6 lg:grid-cols-8 lg:gap-4">
          {ACCESOS.map((acceso) => {
            const cuerpo = (
              <>
                <span className={`grid h-14 w-14 place-items-center rounded-2xl transition group-hover:-translate-y-1 lg:h-16 lg:w-16 ${acceso.clase}`}>
                  <Icono id={acceso.icono} className={acceso.iconoClase || 'icono h-7 w-7'} />
                </span>
                <span className="text-xs font-semibold sm:text-sm">{acceso.etiqueta}</span>
              </>
            )
            return (
              <li key={acceso.etiqueta}>
                {acceso.to ? (
                  <Link to={acceso.to} className="group flex flex-col items-center gap-2 text-center">{cuerpo}</Link>
                ) : (
                  <a href={acceso.href} className="group flex flex-col items-center gap-2 text-center">{cuerpo}</a>
                )}
              </li>
            )
          })}
        </ul>
      </section>

      <section id="avisos" className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:mt-16 lg:px-8" aria-labelledby="titulo-hoy">
        <div className="mb-5 flex items-end justify-between gap-4">
          <h2 id="titulo-hoy" className="text-xl font-bold tracking-tight sm:text-3xl">Lo más importante hoy</h2>
          <a href="#avisos" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-naranja hover:text-naranja-700">Ver todos <Icono id="i-chevron" className="icono h-4 w-4" /></a>
        </div>
        <div className="sin-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0">
          <article className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-naranja-100 bg-gradient-to-br from-naranja-50 to-white p-5 shadow-tarjeta sm:w-[46%] lg:w-auto">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#E03131] px-3 py-1 text-xs font-semibold text-white">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white motion-reduce:animate-none" />Aviso importante
            </span>
            <div className="mt-4 flex items-start gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-sky-100 text-sky-600"><Icono id="i-gota" className="icono h-9 w-9" /></span>
              <h3 className="text-lg font-bold leading-snug"><a href="#avisos" className="after:absolute after:inset-0">Suspensión de agua en Barrio San José</a></h3>
            </div>
            <p className="mt-3 text-sm text-tinta/70">Se realizarán trabajos de mantenimiento en la red. Toma tus precauciones.</p>
            <div className="mt-auto flex items-center justify-between pt-5">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-tinta/70"><Icono id="i-fecha" className="icono h-4 w-4" /><time dateTime="2026-10-15">Hoy, 15 de oct. 2026</time></span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-naranja text-white" aria-hidden="true"><Icono id="i-flecha" className="icono h-4 w-4" /></span>
            </div>
          </article>

          <article className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta sm:w-[46%] lg:w-auto">
            <div className="relative h-36 overflow-hidden">
              <img src={publico('assets/img/xantolo-altar.svg')} alt="Ilustración de un altar de Xantolo con arco de cempasúchil, velas y una máscara tradicional" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-full bg-[#C2255C] px-3 py-1 text-xs font-semibold text-white">Evento</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-bold leading-snug"><a href="#eventos" className="after:absolute after:inset-0">Preparativos Xantolo 2026</a></h3>
              <p className="mt-1 text-sm text-tinta/70">Reunión comunitaria</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-tinta/70"><Icono id="i-fecha" className="icono h-4 w-4" /><time dateTime="2026-10-17">17 de oct. 2026</time></span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-naranja text-white" aria-hidden="true"><Icono id="i-flecha" className="icono h-4 w-4" /></span>
              </div>
            </div>
          </article>

          <article className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta sm:w-[46%] lg:w-auto">
            <div className="relative h-36 overflow-hidden">
              <img src={publico('assets/img/salud.svg')} alt="Ilustración de una casa de salud rural con una carpa para jornada médica" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-full bg-[#2F9E44] px-3 py-1 text-xs font-semibold text-white">Servicios</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-bold leading-snug"><Link to="/bolsa-de-trabajo?cat=salud" className="after:absolute after:inset-0">Jornada médica en Casa de Salud</Link></h3>
              <p className="mt-1 text-sm text-tinta/70">Consultas generales y vacunación</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-tinta/70"><Icono id="i-fecha" className="icono h-4 w-4" /><time dateTime="2026-10-16">16 de oct. 2026</time></span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-naranja text-white" aria-hidden="true"><Icono id="i-flecha" className="icono h-4 w-4" /></span>
              </div>
            </div>
          </article>

          <article className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta sm:w-[46%] lg:w-auto">
            <div className="relative h-36 overflow-hidden">
              <img src={publico('assets/img/camino.svg')} alt="Ilustración de un camino rural pavimentado entre cerros verdes" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" loading="lazy" />
              <span className="absolute left-3 top-3 rounded-full bg-[#1C7ED6] px-3 py-1 text-xs font-semibold text-white">Noticia</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="font-bold leading-snug"><a href="#noticias" className="after:absolute after:inset-0">Mejora de caminos en Chapulhuacanito</a></h3>
              <p className="mt-1 text-sm text-tinta/70">Avance de obras comunitarias</p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="inline-flex items-center gap-1.5 text-sm text-tinta/70"><Icono id="i-fecha" className="icono h-4 w-4" /><time dateTime="2026-10-14">14 de oct. 2026</time></span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-naranja text-white" aria-hidden="true"><Icono id="i-flecha" className="icono h-4 w-4" /></span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-14 lg:px-8" aria-labelledby="titulo-explora">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
          <div>
            <h2 id="titulo-explora" className="text-xl font-bold tracking-tight sm:text-3xl">Explora Chapulhuacanito</h2>
            <p className="mt-1 text-tinta/70">Conoce, participa y vive nuestras tradiciones.</p>
          </div>
          <a href="#explorar" className="inline-flex items-center gap-1 text-sm font-semibold text-naranja hover:text-naranja-700">Ver todas las secciones <Icono id="i-chevron" className="icono h-4 w-4" /></a>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
          <TarjetaExplora img="comunidad.svg" alt="Ilustración de casas con techos de teja entre cerros y palmeras" texto="Conoce nuestra comunidad" href="#comunidad" />
          <TarjetaExplora img="negocios.svg" alt="Ilustración de una calle con tiendas de colores, toldos y papel picado" texto="Directorio de negocios locales" href="#negocios" />
          <TarjetaExplora img="transporte.svg" alt="Ilustración de una camioneta de pasajeros en una carretera entre montañas" texto="Rutas y transporte" href="#transporte" />
          <TarjetaExplora img="turismo-cascada.svg" alt="Ilustración de una cascada con poza turquesa rodeada de vegetación" texto="Atractivos turísticos" href="#turismo" />
          <TarjetaExplora img="xantolo-mascara.svg" alt="Ilustración de una máscara de Xantolo rodeada de flores de cempasúchil y velas" texto="Vive el Xantolo" href="#cultura" />
          <TarjetaExplora img="mapa.svg" alt="Ilustración de un mapa con calles, río y marcadores de ubicación" texto="Mapa de la comunidad" href="#mapa" />
          <TarjetaExplora img="reporta.svg" alt="Ilustración de una mano con un teléfono enviando un reporte ciudadano" texto="Reporta y participa" href="#reporta" />
          <TarjetaExplora img="informado.svg" alt="Ilustración de un tablero comunitario con avisos y noticias" texto="Mantente informado" href="#noticias" />
        </ul>
      </section>

      <section id="cultura" className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-14 lg:px-8" aria-labelledby="titulo-xantolo">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#3B1030] shadow-suave">
          <img src={publico('assets/img/xantolo-banner.svg')} alt="Ilustración festiva de Xantolo con papel picado, máscaras tradicionales, velas y flores de cempasúchil" className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]" loading="lazy" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2A0B20]/95 via-[#2A0B20]/70 to-transparent sm:via-[#2A0B20]/55" />
          <div className="flex min-h-[240px] flex-col justify-center px-6 py-10 sm:min-h-[260px] sm:px-10 lg:px-14">
            <p className="font-mano text-2xl font-bold text-[#FFC078]">Del 30 de octubre al 2 de noviembre</p>
            <h2 id="titulo-xantolo" className="mt-1 text-3xl font-extrabold leading-tight text-white sm:text-5xl">Xantolo <span className="block sm:inline">Chapulhuacanito</span></h2>
            <p className="mt-2 text-lg text-white/90 sm:text-xl">Tradición que nos une</p>
            <a href="#cultura" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-naranja-600">Conoce más <Icono id="i-flecha" className="icono h-4 w-4" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

function TarjetaExplora({ img, alt, texto, href }) {
  return (
    <li>
      <a href={href} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-tarjeta">
        <img src={publico(`assets/img/${img}`)} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" loading="lazy" />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
          <span className="text-[15px] font-semibold leading-tight text-white md:text-sm lg:text-base xl:text-lg">{texto}</span>
          <Icono id="i-flecha" className="icono hidden h-5 w-5 shrink-0 text-white/90 transition group-hover:translate-x-1 motion-reduce:transition-none sm:block" />
        </span>
      </a>
    </li>
  )
}
