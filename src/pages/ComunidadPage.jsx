import { Link } from 'react-router-dom';
import { barrios } from '../data/barrios';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';

const valores = [
  { title: 'Raíz', text: 'El Xantolo, el huapango y la comida se cuentan en casa antes que en un folleto.' },
  { title: 'Faena', text: 'El camino y la cancha se cuidan entre barrios. Quien no puede ir, manda herramienta.' },
  { title: 'Puerta abierta', text: 'Quien llega de Tamazunchale pregunta en la plaza. Alguien siempre sabe.' },
];

const enlaces = [
  { label: 'Avisos de hoy', to: '/avisos' },
  { label: 'Directorio de negocios', to: '/negocios' },
  { label: 'Cómo moverse', to: '/transporte' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Agenda', to: '/eventos' },
  { label: 'Xantolo', to: '/cultura' },
  { label: 'Qué visitar', to: '/turismo' },
  { label: 'Mapa ilustrado', to: '/mapa' },
];

export default function ComunidadPage() {
  const section = sections.comunidad;
  usePageTitle(section.title);

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} />
      <PageSection>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <article className="rounded-2xl bg-white p-6 shadow-tarjeta sm:p-8">
            <h2 className="text-2xl font-bold">Un pueblo chico entre cerros</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-tinta/80">
              <p>
                Chapulhuacanito, en este prototipo, es una comunidad de la Huasteca Potosina donde la plaza todavía ordena el día: ahí sale la camioneta, se pega el aviso y se arma el arco de octubre.
              </p>
              <p>
                Los barrios, los negocios y los teléfonos de esta página son de ejemplo. No hay padrón real ni directorio oficial detrás.
              </p>
            </div>
          </article>
          <aside className="rounded-2xl bg-verde p-6 text-white shadow-tarjeta sm:p-8">
            <p className="font-mano text-3xl font-bold text-[#FFB27A]">Participa</p>
            <p className="mt-2 text-sm text-white/85">
              Un reporte, un negocio o una faena. El prototipo no envía nada: solo muestra el camino.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link to="/reportar" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-verde">
                Reportar
              </Link>
              <Link to="/negocios#registrar" className="rounded-full bg-naranja px-4 py-2 text-sm font-semibold text-white">
                Registrar negocio
              </Link>
            </div>
          </aside>
        </div>

        <h2 className="mt-12 text-2xl font-bold">Barrios y localidades</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {barrios.map((barrio) => (
            <li key={barrio.id} className="rounded-2xl bg-white p-5 shadow-tarjeta">
              <h3 className="text-lg font-bold">{barrio.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/70">{barrio.summary}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Lo que nos junta</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {valores.map((valor) => (
            <li key={valor.title} className="rounded-2xl border border-crema-200 bg-white p-5 shadow-tarjeta">
              <p className="font-mano text-3xl font-bold text-naranja">{valor.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-tinta/75">{valor.text}</p>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Sigue por aquí</h2>
        <ul className="mt-5 flex flex-wrap gap-2">
          {enlaces.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-tinta shadow-sm ring-1 ring-crema-200 transition hover:text-naranja focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
