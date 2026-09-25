import { useState } from 'react';
import cempasuchil from '../../assets/img/cempasuchil.svg';
import { historiaXantolo } from '../../data/cultura';
import Icon from '../Icon';
import Encabezado from './Encabezado';
import { anillo, clipRasgado, seccionAncla } from './estilos';
import TiraPapel from './TiraPapel';

export default function HistoriaXantolo() {
  const [abierto, setAbierto] = useState(false);

  return (
    <section id="historia" className={`relative mt-6 ${seccionAncla}`} aria-labelledby="titulo-historia">
      <TiraPapel />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
        <div>
          <Encabezado id="titulo-historia" eyebrow="Tradición viva" title="Historia del Xantolo" />
          <p className="mt-4 max-w-xl text-base leading-relaxed text-tinta/80">{historiaXantolo.lead}</p>
          <div id="historia-mas" hidden={!abierto} className="mt-4 max-w-xl space-y-3 text-base leading-relaxed text-tinta/80">
            {historiaXantolo.mas.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
          <button
            type="button"
            className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-naranja/30 hover:bg-naranja-600 ${anillo}`}
            aria-expanded={abierto}
            aria-controls="historia-mas"
            onClick={() => setAbierto((valor) => !valor)}
          >
            {abierto ? 'Ver menos' : 'Conoce más'}
            <Icon id="i-flecha" className={`icono h-4 w-4 ${abierto ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <figure className="relative mx-auto w-full max-w-xl">
          <img
            src={cempasuchil}
            alt=""
            width="200"
            height="200"
            className="pointer-events-none absolute -right-6 -top-8 z-10 hidden w-24 sm:block"
          />
          <div
            className="bg-white p-3 sm:rotate-1 sm:p-4"
            style={{ clipPath: clipRasgado, filter: 'drop-shadow(0 16px 24px rgba(92, 52, 20, 0.22))' }}
          >
            <div className="relative overflow-hidden">
              <img
                src={historiaXantolo.src}
                alt={historiaXantolo.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-black/60 via-black/15 to-transparent" />
              <figcaption className="texto-sombra pointer-events-none absolute bottom-4 right-4 text-right font-mano text-3xl leading-tight text-white sm:bottom-6 sm:right-6 sm:text-4xl">
                Música
                <br />
                Danza
                <br />
                Tradición
                <br />
                Comunidad
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
