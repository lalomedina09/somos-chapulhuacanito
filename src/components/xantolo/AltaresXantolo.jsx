import { Link } from 'react-router-dom';
import { altaresXantolo } from '../../data/cultura';
import Icon from '../Icon';
import Encabezado from './Encabezado';
import { anillo, seccionAncla } from './estilos';

export default function AltaresXantolo() {
  return (
    <section id="altares" className={`mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16 ${seccionAncla}`} aria-labelledby="titulo-altares">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-white p-4 shadow-tarjeta ring-1 ring-black/5 sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={altaresXantolo.src}
            alt={altaresXantolo.alt}
            width="1280"
            height="720"
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
        <div>
          <Encabezado id="titulo-altares" eyebrow="Memoria encendida" title="Altares" />
          <p className="mt-4 text-base leading-relaxed text-tinta/80">{altaresXantolo.texto}</p>
          <Link
            to="/eventos/concurso-altares"
            className={`mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-naranja/30 hover:bg-naranja-600 ${anillo}`}
          >
            Ver el concurso de altares
            <Icon id="i-flecha" className="icono h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
