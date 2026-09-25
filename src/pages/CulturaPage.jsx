import { Link } from 'react-router-dom';
import Photo from '../components/ui/Photo';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import { galeriaCultura, otrasTradiciones, xantoloDias } from '../data/cultura';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';

export default function CulturaPage() {
  const section = sections.cultura;
  usePageTitle(section.title);

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.cultura} />
      <PageSection>
        <div className="rounded-2xl bg-white p-6 shadow-tarjeta sm:p-8">
          <p className="font-mano text-3xl font-bold text-naranja">Xantolo</p>
          <h2 className="mt-1 text-2xl font-bold">Cuatro días, contados en corto</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-tinta/75">
            En la Huasteca el Xantolo se vive en casa y en la calle. Esta línea de tiempo es un resumen de ejemplo para Chapulhuacanito, no un programa oficial.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {xantoloDias.map((dia, index) => (
              <li key={dia.id} className="rounded-2xl bg-crema p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-tinta/70">Día {index + 1}</p>
                <p className="font-mano text-3xl font-bold text-naranja">{dia.day}</p>
                <h3 className="mt-1 font-bold">{dia.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-tinta/75">{dia.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <h2 className="mt-12 text-2xl font-bold">Galería de ejemplo</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galeriaCultura.map((item) => (
            <li key={item.id}>
              <Link to={item.to} className="group block overflow-hidden rounded-2xl bg-white shadow-tarjeta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
                <div className="h-44 overflow-hidden bg-crema">
                  <Photo src={item.image} alt={item.alt} className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm text-tinta/70">{item.text}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 text-2xl font-bold">Otras costumbres de la muestra</h2>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {otrasTradiciones.map((item) => (
            <li key={item.title} className="rounded-2xl bg-white p-5 shadow-tarjeta">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-tinta/70">{item.text}</p>
              {item.to ? (
                <Link to={item.to} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-naranja-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
                  Ver más →
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
