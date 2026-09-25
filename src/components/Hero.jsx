import hero from '../assets/img/hero-paisaje.svg';
import cempasuchilIzq from '../assets/img/cempasuchil-izq.svg';
import cempasuchilDer from '../assets/img/cempasuchil-der.svg';
import { searchTags } from '../data/nav';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden" aria-labelledby="titulo-hero">
      {/* REEMPLAZAR con foto real de la comunidad (paisaje panorámico de Chapulhuacanito) */}
      <img
        src={hero}
        alt="Ilustración de montañas verdes de la Huasteca con un pequeño poblado en el valle"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 via-black/25 to-black/0" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/25 to-transparent" />

      <img
        src={cempasuchilIzq}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 -left-16 -z-10 w-36 sm:w-44 lg:-left-20 lg:bottom-16 lg:w-48"
      />
      <img
        src={cempasuchilDer}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-28 -z-10 hidden w-44 rotate-12 md:block lg:right-6 lg:top-44 lg:w-52"
      />

      <div className="mx-auto max-w-7xl px-4 pb-28 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-40 lg:pt-24">
        <div className="relative max-w-2xl">
          <h1
            id="titulo-hero"
            className="texto-sombra text-[2.35rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Chapulhuacanito <span className="block">es su gente</span>
          </h1>
          <p className="texto-sombra mt-4 max-w-xl text-balance text-lg text-white/95 sm:text-xl">
            Una comunidad que avanza, conecta y preserva sus raíces.
          </p>

          <form
            id="buscar"
            role="search"
            className="mt-7 max-w-xl scroll-mt-24"
            onSubmit={(event) => event.preventDefault()}
          >
            <label htmlFor="q" className="sr-only">
              ¿Qué estás buscando?
            </label>
            <div className="flex items-center rounded-full bg-white p-1.5 pl-5 shadow-suave ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-naranja">
              <Icon id="i-buscar" className="icono h-5 w-5 shrink-0 text-tinta/50" />
              <input
                id="q"
                type="search"
                placeholder="¿Qué estás buscando?"
                className="w-full min-w-0 bg-transparent px-3 py-2.5 text-base text-tinta placeholder:text-tinta/50 focus:outline-none"
              />
              <button
                type="submit"
                className="hidden shrink-0 rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-naranja-600 sm:block"
              >
                Buscar
              </button>
            </div>
          </form>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Búsquedas rápidas">
            {searchTags.map((tag) => (
              <li key={tag.to}>
                <Link
                  to={tag.to}
                  className="inline-block rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-tinta shadow-sm backdrop-blur transition hover:bg-white hover:text-naranja"
                >
                  {tag.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="texto-sombra pointer-events-none absolute right-8 top-10 hidden -rotate-6 text-right font-mano text-4xl font-bold leading-[1.05] text-white lg:block lg:right-24 lg:top-14 lg:text-5xl"
          aria-label="Nuestra gente, nuestra tierra, nuestro orgullo"
        >
          Nuestra gente
          <br />
          <span className="text-[#FFD08A]">Nuestra tierra</span>
          <br />
          Nuestro orgullo
        </p>
      </div>
    </section>
  );
}
