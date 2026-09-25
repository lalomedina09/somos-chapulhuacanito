import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import Badge from '../ui/Badge';
import PageHero from '../ui/PageHero';
import PageSection from '../ui/PageSection';
import Photo from '../ui/Photo';
import { PrimaryLink } from '../ui/PrimaryButton';

export default function DetailPage({ item, backTo, backLabel, kicker, children }) {
  usePageTitle(item ? item.title : 'No encontrado');

  if (!item) {
    return (
      <>
        <PageHero
          kicker="Prototipo"
          title="No está en este ejemplo"
          intro="Este identificador no forma parte de los datos de muestra. Puedes volver al listado."
        />
        <PageSection>
          <PrimaryLink to={backTo}>Volver a {backLabel}</PrimaryLink>
        </PageSection>
      </>
    );
  }

  return (
    <>
      <PageHero kicker={kicker || item.category} title={item.title} intro={item.summary}>
        <Link to={backTo} className="text-sm font-semibold text-verde hover:text-verde-700">
          ← {backLabel}
        </Link>
      </PageHero>
      <PageSection>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.8fr)]">
          <article className="rounded-2xl bg-white p-5 shadow-tarjeta sm:p-8">
            {item.image ? (
              <div className="mb-6 overflow-hidden rounded-2xl">
                <Photo src={item.image} alt={item.alt} className="h-56 w-full object-cover sm:h-72" />
              </div>
            ) : null}
            <div className="space-y-4 text-base leading-relaxed text-tinta/80">
              {item.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            {children}
          </article>
          <aside className="rounded-2xl bg-white p-5 shadow-tarjeta sm:p-6">
            {item.badge ? <Badge className={item.badgeClass}>{item.badge}</Badge> : null}
            <dl className="mt-4 space-y-4">
              {item.facts?.map((fact) => (
                <div key={fact.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-tinta/50">{fact.label}</dt>
                  <dd className="mt-1 text-sm font-medium text-tinta">{fact.value}</dd>
                </div>
              ))}
            </dl>
            {item.whatsapp ? (
              <a
                href={item.whatsapp}
                className="mt-6 inline-flex rounded-full bg-verde px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-verde-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
              >
                WhatsApp de ejemplo
              </a>
            ) : null}
          </aside>
        </div>
      </PageSection>
    </>
  );
}
