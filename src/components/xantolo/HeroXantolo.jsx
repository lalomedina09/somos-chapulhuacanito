import { useState } from 'react';
import cempasuchilDer from '../../assets/img/cempasuchil-der.svg';
import cempasuchilIzq from '../../assets/img/cempasuchil-izq.svg';
import { atajosXantolo, heroXantolo } from '../../data/cultura';
import Icon from '../Icon';
import { anillo, anilloClaro, irASeccion } from './estilos';

export default function HeroXantolo() {
  const [aviso, setAviso] = useState('');
  const [urlManual, setUrlManual] = useState('');

  async function compartir() {
    const url = `${window.location.origin}${window.location.pathname}`;
    const datos = {
      title: 'Xantolo Chapulhuacanito',
      text: 'Una celebración que nos une. Vive la magia, la música y las tradiciones del Xantolo.',
      url,
    };

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(datos);
        setAviso('');
        setUrlManual('');
        return;
      } catch (error) {
        if (error && error.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setUrlManual('');
      setAviso('Enlace copiado');
      window.setTimeout(() => setAviso(''), 2800);
    } catch {
      setAviso('');
      setUrlManual(url);
    }
  }

  return (
    <div className="relative">
      <section className="relative isolate min-h-[34rem] overflow-hidden sm:min-h-[36rem] lg:min-h-[40rem]" aria-labelledby="titulo-xantolo">
        <img
          src={heroXantolo.src}
          alt={heroXantolo.alt}
          width="1280"
          height="720"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[78%_28%] sm:object-[70%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#140a08]/92 via-[#140a08]/72 to-[#140a08]/25 sm:via-[#140a08]/55 sm:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#140a08]/80 to-transparent" />

        <img
          src={cempasuchilIzq}
          alt=""
          width="320"
          height="420"
          className="pointer-events-none absolute -left-10 bottom-24 -z-10 w-32 opacity-95 sm:w-40 lg:bottom-28 lg:w-48"
        />
        <img
          src={cempasuchilDer}
          alt=""
          width="320"
          height="420"
          className="pointer-events-none absolute -right-8 top-6 -z-10 hidden w-36 rotate-12 md:block lg:right-4 lg:w-44"
        />

        <p className="texto-sombra pointer-events-none absolute right-[7%] top-[18%] z-10 hidden max-w-[12rem] -rotate-6 text-right font-mano text-3xl leading-tight text-white lg:block xl:right-[12%] xl:text-4xl">
          Nuestras raíces
          <br />
          Nuestra gente
          <br />
          Nuestra cultura
        </p>

        <div className="relative z-10 mx-auto flex min-h-[34rem] max-w-7xl flex-col justify-center px-4 pb-28 pt-12 sm:min-h-[36rem] sm:px-6 sm:pb-32 lg:min-h-[40rem] lg:px-8 lg:pb-40 lg:pt-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FFC078]">Nuestra tradición</p>
            <h1 id="titulo-xantolo" className="texto-sombra mt-2 text-white">
              <span className="block font-script text-6xl leading-none sm:text-7xl lg:text-8xl">Xantolo</span>
              <span className="sr-only"> en </span>
              <span className="mt-1 block font-script text-4xl leading-none text-[#FFB24D] sm:text-5xl">Chapulhuacanito</span>
            </h1>
            <p className="texto-sombra mt-4 text-xl font-semibold text-white sm:text-2xl">Una celebración que nos une</p>
            <p className="texto-sombra mt-3 max-w-md text-base leading-relaxed text-white/95 sm:text-lg">
              Vive la magia, la música, los colores y las tradiciones del Xantolo en nuestra comunidad.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#historia"
                onClick={(event) => {
                  event.preventDefault();
                  irASeccion('historia');
                }}
                className={`inline-flex min-h-11 items-center justify-center rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-black/30 hover:bg-naranja-600 ${anilloClaro}`}
              >
                Conoce la historia
              </a>
              <a
                href="#eventos"
                onClick={(event) => {
                  event.preventDefault();
                  irASeccion('eventos');
                }}
                className={`inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white bg-black/30 px-6 py-3 font-semibold text-white backdrop-blur-sm hover:bg-white hover:text-tinta ${anilloClaro}`}
              >
                Ver eventos
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20 mx-auto -mt-16 max-w-5xl px-4 sm:-mt-20 sm:px-6">
        <nav aria-label="Atajos del Xantolo" className="relative rounded-3xl bg-white px-3 py-4 shadow-suave ring-1 ring-black/5 sm:px-5 sm:py-5">
          <ul className="sin-scroll flex snap-x gap-1 overflow-x-auto py-1 sm:grid sm:grid-cols-7 sm:gap-2 sm:overflow-visible">
            {atajosXantolo.map((atajo) => (
              <li key={atajo.id} className="w-[4.85rem] shrink-0 snap-start sm:w-auto">
                {atajo.seccion ? (
                  <a
                    href={`#${atajo.seccion}`}
                    onClick={(event) => {
                      event.preventDefault();
                      irASeccion(atajo.seccion);
                    }}
                    className={`flex min-h-11 w-full flex-col items-center rounded-2xl px-1 py-1 text-center ${anillo}`}
                  >
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md"
                      style={{ backgroundColor: atajo.color }}
                    >
                      <Icon id={atajo.icono} className="icono h-6 w-6" />
                    </span>
                    <span className="mt-2 text-[11px] font-semibold leading-tight text-tinta sm:text-xs">{atajo.label}</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={compartir}
                    className={`flex min-h-11 w-full flex-col items-center rounded-2xl px-1 py-1 text-center ${anillo}`}
                    aria-label="Compartir la página del Xantolo"
                  >
                    <span
                      className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md"
                      style={{ backgroundColor: atajo.color }}
                    >
                      <Icon id={atajo.icono} className="icono h-6 w-6" />
                    </span>
                    <span className="mt-2 text-[11px] font-semibold leading-tight text-tinta sm:text-xs">
                      {aviso || atajo.label}
                    </span>
                  </button>
                )}
              </li>
            ))}
          </ul>
          <p className="sr-only" role="status" aria-live="polite">
            {aviso}
          </p>
          <div className="pointer-events-none absolute inset-y-4 right-2 w-8 bg-gradient-to-l from-white sm:hidden" aria-hidden="true" />
          {urlManual ? (
            <p className="mt-3 break-all rounded-xl bg-crema px-3 py-2 text-sm text-tinta">
              No se pudo copiar solo. Selecciona este enlace: {urlManual}
            </p>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
