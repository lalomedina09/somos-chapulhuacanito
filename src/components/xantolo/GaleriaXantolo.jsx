import { useEffect, useRef, useState } from 'react';
import { galeriaXantolo } from '../../data/cultura';
import Icon from '../Icon';
import Encabezado from './Encabezado';
import { anillo, prefiereMenosMovimiento, seccionAncla } from './estilos';
import LuzGaleria from './LuzGaleria';

export default function GaleriaXantolo() {
  const pista = useRef(null);
  const [puedeAtras, setPuedeAtras] = useState(false);
  const [puedeAdelante, setPuedeAdelante] = useState(true);
  const [abierta, setAbierta] = useState(false);
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const el = pista.current;
    if (!el) return undefined;

    function actualizar() {
      setPuedeAtras(el.scrollLeft > 8);
      setPuedeAdelante(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    }

    actualizar();
    el.addEventListener('scroll', actualizar, { passive: true });
    const obs = new ResizeObserver(actualizar);
    obs.observe(el);
    return () => {
      el.removeEventListener('scroll', actualizar);
      obs.disconnect();
    };
  }, []);

  function desplazar(direccion) {
    const el = pista.current;
    if (!el) return;
    const tarjeta = el.querySelector('[data-foto]');
    const ancho = tarjeta ? tarjeta.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: direccion * ancho, behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth' });
  }

  function abrir(indiceFoto) {
    setIndice(indiceFoto);
    setAbierta(true);
  }

  return (
    <section id="galeria" className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20 ${seccionAncla}`} aria-labelledby="titulo-galeria">
      <Encabezado
        id="titulo-galeria"
        eyebrow="Colores que nos identifican"
        title="Galería del Xantolo"
        accion={
          <button
            type="button"
            onClick={() => abrir(0)}
            className={`inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-naranja-700 ${anillo}`}
          >
            Ver galería completa
            <Icon id="i-flecha" className="icono h-4 w-4" />
          </button>
        }
      />

      <div className="relative mt-8">
        <button
          type="button"
          onClick={() => desplazar(-1)}
          disabled={!puedeAtras}
          aria-label="Fotos anteriores"
          className={`absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-naranja-700 shadow-tarjeta disabled:opacity-40 sm:-left-1 ${anillo}`}
        >
          <Icon id="i-chevron" className="icono h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          onClick={() => desplazar(1)}
          disabled={!puedeAdelante}
          aria-label="Fotos siguientes"
          className={`absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-naranja-700 shadow-tarjeta disabled:opacity-40 sm:-right-1 ${anillo}`}
        >
          <Icon id="i-chevron" className="icono h-5 w-5" />
        </button>

        <div
          ref={pista}
          className="sin-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-1 px-12 py-2"
          role="region"
          aria-label="Carrusel de la galería del Xantolo"
        >
          {galeriaXantolo.map((foto, i) => (
            <div key={foto.id} data-foto className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(25%-0.75rem)]">
              <button
                type="button"
                onClick={() => abrir(i)}
                className={`block w-full overflow-hidden rounded-2xl shadow-tarjeta ring-1 ring-black/5 ${anillo}`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  width="1280"
                  height="720"
                  loading="lazy"
                  decoding="async"
                  draggable="false"
                  className={`aspect-[4/3] w-full object-cover ${foto.posicion}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {abierta ? (
        <LuzGaleria fotos={galeriaXantolo} indice={indice} alCerrar={() => setAbierta(false)} alMover={setIndice} />
      ) : null}
    </section>
  );
}
