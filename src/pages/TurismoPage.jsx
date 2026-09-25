import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/content/DetailPage';
import MediaCard from '../components/content/MediaCard';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import SearchBar from '../components/ui/SearchBar';
import { sections } from '../data/sections';
import { atractivos, turismoCategories } from '../data/turismo';
import usePageTitle from '../hooks/usePageTitle';
import { matchesQuery } from '../utils/text';

export default function TurismoPage() {
  const section = sections.turismo;
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  usePageTitle(section.title);

  const visible = useMemo(
    () =>
      atractivos.filter(
        (item) =>
          (category === 'todos' || item.categoryId === category) &&
          matchesQuery(query, item.title, item.summary, item.category),
      ),
    [category, query],
  );

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro}>
        <SearchBar id="buscar-turismo" value={query} onChange={setQuery} placeholder="Busca cascada, río o comida" label="Buscar atractivos" />
      </PageHero>
      <PageSection>
        <FilterChips label="Tipo de atractivo" options={turismoCategories} value={category} onChange={setCategory} />
        <p className="mt-4 text-sm text-tinta/60" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'lugar' : 'lugares'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No hay atractivos con esa búsqueda"
              text="Prueba con cascada, río o zacahuil."
              onClear={() => {
                setQuery('');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {visible.map((item) => (
              <li key={item.id}>
                <MediaCard
                  to={`/turismo/${item.id}`}
                  title={item.title}
                  summary={item.summary}
                  badge={item.badge}
                  badgeClass={item.badgeClass}
                  image={item.image}
                  alt={item.alt}
                />
              </li>
            ))}
          </ul>
        )}
      </PageSection>
    </>
  );
}

export function TurismoDetallePage() {
  const { id } = useParams();
  const item = atractivos.find((atractivo) => atractivo.id === id);
  return <DetailPage item={item} backTo="/turismo" backLabel="Turismo" kicker="Visita" />;
}
