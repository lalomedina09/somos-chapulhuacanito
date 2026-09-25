import { Link } from 'react-router-dom';
import { sections } from '../data/sections';
import { servicios } from '../data/servicios';
import usePageTitle from '../hooks/usePageTitle';
import Icon from '../components/Icon';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import Photo from '../components/ui/Photo';

export default function ServiciosPage() {
  const section = sections.servicios;
  usePageTitle(section.title);

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={`${section.intro} Teléfonos y correos son de ejemplo.`} />
      <PageSection>
        <ul className="grid gap-4 lg:grid-cols-2">
          {servicios.map((item) => (
            <li key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-tarjeta">
              <div className="grid sm:grid-cols-[9rem_minmax(0,1fr)]">
                <div className="h-36 sm:h-full">
                  <Photo src={item.image} alt={item.alt} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-verde-50 text-verde">
                    <Icon id={item.icon} className="icono h-5 w-5" />
                  </span>
                  <h2 className="mt-3 text-xl font-bold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-tinta/70">{item.summary}</p>
                  <dl className="mt-4 space-y-1 text-sm">
                    <div>
                      <dt className="inline font-semibold">Horario: </dt>
                      <dd className="inline text-tinta/80">{item.horario}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Lugar: </dt>
                      <dd className="inline text-tinta/80">{item.lugar}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Teléfono: </dt>
                      <dd className="inline text-tinta/80">{item.phone}</dd>
                    </div>
                    <div>
                      <dt className="inline font-semibold">Correo: </dt>
                      <dd className="inline break-all text-tinta/80">{item.email}</dd>
                    </div>
                  </dl>
                  <Link to={item.link.to} className="mt-4 inline-flex text-sm font-semibold text-naranja hover:text-naranja-700">
                    {item.link.label} →
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
