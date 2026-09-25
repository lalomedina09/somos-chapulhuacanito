import { personajesXantolo } from '../../data/cultura';
import Encabezado from './Encabezado';
import { seccionAncla } from './estilos';

export default function PersonajesXantolo() {
  return (
    <section id="personajes" className={`mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8 ${seccionAncla}`} aria-labelledby="titulo-personajes">
      <Encabezado id="titulo-personajes" eyebrow="Quienes dan vida a la fiesta" title="Personajes" />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {personajesXantolo.map((persona) => (
          <li key={persona.id} className="rounded-3xl bg-white p-4 shadow-tarjeta ring-1 ring-black/5">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={persona.src}
                alt={persona.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                className={`aspect-[4/3] w-full object-cover ${persona.posicion}`}
              />
            </div>
            <h3 className="mt-3 text-lg font-bold">{persona.nombre}</h3>
            <p className="mt-1 text-sm leading-relaxed text-tinta/75">{persona.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
