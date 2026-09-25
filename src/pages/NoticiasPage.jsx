import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailPage from '../components/content/DetailPage';
import MediaCard from '../components/content/MediaCard';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import Photo from '../components/ui/Photo';
import SearchBar from '../components/ui/SearchBar';
import { noticiaCategories, noticias } from '../data/noticias';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';
import { matchesQuery } from '../utils/text';

export default function NoticiasPage() {
  const section = sections.noticias;
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  usePageTitle(section.title);

  const featured = noticias.find((item) => item.featured);
  const visible = useMemo(
    () =>
      noticias.filter(
        (item) =>
          (category === 'todos' || item.categoryId === category) &&
          matchesQuery(query, item.title, item.summary, item.category),
      ),
    [category, query],
  );
  const showFeatured = category === 'todos' && !query && featured && visible.some((item) => item.id === featured.id);
  const rest = showFeatured ? visible.filter((item) => item.id !== featured.id) : visible;

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.noticias}>
        <SearchBar id="buscar-noticias" value={query} onChange={setQuery} placeholder="Busca una nota" label="Buscar noticias" />
      </PageHero>
      <PageSection>
        {showFeatured ? (
          <article className="grid overflow-hidden rounded-2xl bg-white shadow-tarjeta lg:grid-cols-2">
            <div className="min-h-56">
              <Photo src={featured.image} alt={featured.alt} className="h-full min-h-56 w-full object-cover" />
            </div>
            <div className="flex flex-col p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-naranja">Nota destacada</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-tinta/75">{featured.summary}</p>
              <p className="mt-3 text-sm text-tinta/60">{featured.date}</p>
              <Link
                to={`/noticias/${featured.id}`}
                className="mt-6 inline-flex w-fit rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
              >
                Leer nota
              </Link>
            </div>
          </article>
        ) : null}
        <div className="mt-8">
          <FilterChips label="Categoría de noticias" options={noticiaCategories} value={category} onChange={setCategory} />
        </div>
        <p className="mt-4 text-sm text-tinta/60" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'nota' : 'notas'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No hay notas con esa búsqueda"
              text="Prueba otra palabra o vuelve a ver todas."
              onClear={() => {
                setQuery('');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((item) => (
              <li key={item.id}>
                <MediaCard
                  to={`/noticias/${item.id}`}
                  title={item.title}
                  summary={item.summary}
                  badge={item.badge}
                  badgeClass={item.badgeClass}
                  image={item.image}
                  alt={item.alt}
                  meta={item.date}
                />
              </li>
            ))}
          </ul>
        )}
      </PageSection>
    </>
  );
}

export function NoticiaPage() {
  const { id } = useParams();
  const item = noticias.find((noticia) => noticia.id === id);
  return <DetailPage item={item} backTo="/noticias" backLabel="Noticias" kicker="Noticia" />;
}
