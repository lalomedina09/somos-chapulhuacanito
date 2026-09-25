import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/content/DetailPage';
import MediaCard from '../components/content/MediaCard';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import SearchBar from '../components/ui/SearchBar';
import { avisoCategories, avisos } from '../data/avisos';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';
import { matchesQuery } from '../utils/text';

export default function AvisosPage() {
  const section = sections.avisos;
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  usePageTitle(section.title);

  const visible = useMemo(
    () =>
      avisos.filter(
        (item) =>
          (category === 'todos' || item.categoryId === category) &&
          matchesQuery(query, item.title, item.summary, item.barrio, item.category, item.badge),
      ),
    [category, query],
  );

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.avisos}>
        <SearchBar id="buscar-avisos" value={query} onChange={setQuery} placeholder="Busca por barrio o tema" label="Buscar avisos" />
      </PageHero>
      <PageSection>
        <FilterChips label="Categoría de avisos" options={avisoCategories} value={category} onChange={setCategory} />
        <p className="mt-4 text-sm text-tinta/70" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'aviso' : 'avisos'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No hay avisos con ese filtro"
              text="Prueba con otra palabra o vuelve a ver todos."
              onClear={() => {
                setQuery('');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.id}>
                <MediaCard
                  to={`/avisos/${item.id}`}
                  title={item.title}
                  summary={item.summary}
                  badge={item.badge}
                  badgeClass={item.badgeClass}
                  meta={`${item.date} · ${item.barrio}`}
                />
              </li>
            ))}
          </ul>
        )}
      </PageSection>
    </>
  );
}

export function AvisoPage() {
  const { id } = useParams();
  const item = avisos.find((aviso) => aviso.id === id);
  return <DetailPage item={item} backTo="/avisos" backLabel="Avisos" kicker="Aviso" />;
}
