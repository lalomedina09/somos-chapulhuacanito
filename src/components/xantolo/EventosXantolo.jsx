import { Link } from 'react-router-dom';
import { eventosXantoloIds } from '../../data/cultura';
import { eventos } from '../../data/eventos';
import Icon from '../Icon';
import Encabezado from './Encabezado';
import { anillo, seccionAncla } from './estilos';

const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

function fechaCorta(iso) {
  const partes = iso.split('-').map(Number);
  return {
    dia: String(partes[2]).padStart(2, '0'),
    mes: meses[(partes[1] || 1) - 1],
  };
}

export default function EventosXantolo() {
  const lista = eventosXantoloIds.map((id) => eventos.find((item) => item.id === id)).filter(Boolean);

  return (
    <section id="eventos" className={`mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 lg:py-6 ${seccionAncla}`} aria-labelledby="titulo-eventos">
      <Encabezado
        id="titulo-eventos"
        eyebrow="No te lo pierdas"
        title="Próximos eventos"
        accion={
          <Link to="/eventos" className={`inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-naranja-700 ${anillo}`}>
            Ver todos los eventos
            <Icon id="i-flecha" className="icono h-4 w-4" />
          </Link>
        }
      />
      <ul className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {lista.map((item) => {
          const fecha = fechaCorta(item.dateTime);
          return (
            <li key={item.id}>
              <Link
                to={`/eventos/${item.id}`}
                className={`group relative flex h-full flex-col rounded-2xl bg-white shadow-tarjeta ring-1 ring-black/5 ${anillo}`}
              >
                <div className="relative h-40 overflow-hidden rounded-t-2xl">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover motion-safe:transition motion-safe:duration-500 motion-safe:group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 rounded-xl bg-white px-3 py-1.5 text-center shadow-tarjeta" aria-hidden="true">
                    <span className="block text-2xl font-extrabold leading-none text-naranja-700">{fecha.dia}</span>
                    <span className="mt-0.5 block text-[10px] font-bold tracking-wide text-tinta/70">{fecha.mes}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 pr-16">
                  <p className="sr-only">
                    {item.date}. {item.time}.
                  </p>
                  <h3 className="text-base font-bold leading-snug">{item.title}</h3>
                  <p className="mt-3 flex items-start gap-1.5 text-sm text-tinta/75">
                    <Icon id="i-ubicacion" className="icono mt-0.5 h-4 w-4 shrink-0 text-naranja-700" />
                    <span>{item.place}</span>
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-sm text-tinta/75">
                    <Icon id="i-reloj" className="icono h-4 w-4 shrink-0 text-naranja-700" />
                    <span>{item.time}</span>
                  </p>
                </div>
                <span
                  className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-naranja text-white shadow-md shadow-naranja/30 motion-safe:transition group-hover:bg-naranja-600"
                  aria-hidden="true"
                >
                  <Icon id="i-flecha" className="icono h-4 w-4" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
