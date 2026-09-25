import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailPage from '../components/content/DetailPage';
import MediaCard from '../components/content/MediaCard';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import { eventoCategories, eventoMonths, eventos } from '../data/eventos';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';

export default function EventosPage() {
  const section = sections.eventos;
  const [month, setMonth] = useState('todos');
  const [category, setCategory] = useState('todos');
  usePageTitle(section.title);

  const visible = useMemo(
    () =>
      eventos.filter(
        (item) =>
          (month === 'todos' || item.monthId === month) &&
          (category === 'todos' || item.categoryId === category),
      ),
    [month, category],
  );

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} />
      <PageSection>
        <div className="space-y-3">
          <FilterChips label="Mes" options={eventoMonths} value={month} onChange={setMonth} />
          <FilterChips label="Tipo de evento" options={eventoCategories} value={category} onChange={setCategory} />
        </div>
        <p className="mt-4 text-sm text-tinta/60" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'evento' : 'eventos'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="Ese mes no tiene eventos de ese tipo"
              text="Cambia el mes o la categoría."
              onClear={() => {
                setMonth('todos');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.id}>
                <MediaCard
                  to={`/eventos/${item.id}`}
                  title={item.title}
                  summary={item.summary}
                  badge={item.date}
                  badgeClass={item.badgeClass}
                  image={item.image}
                  alt={item.alt}
                  meta={`${item.time} · ${item.place}`}
                />
              </li>
            ))}
          </ul>
        )}
      </PageSection>
    </>
  );
}

export function EventoPage() {
  const { id } = useParams();
  const item = eventos.find((evento) => evento.id === id);
  return <DetailPage item={item} backTo="/eventos" backLabel="Eventos" kicker="Agenda" />;
}
