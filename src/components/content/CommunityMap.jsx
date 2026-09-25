import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import mapa from '../../assets/img/mapa.svg';
import { lugarCategories, lugares } from '../../data/lugares';
import { matchesQuery } from '../../utils/text';
import Badge from '../ui/Badge';
import EmptyState from '../ui/EmptyState';
import FilterChips from '../ui/FilterChips';
import SearchBar from '../ui/SearchBar';

export default function CommunityMap() {
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(lugares[0].id);

  const visible = useMemo(
    () =>
      lugares.filter(
        (place) =>
          (category === 'todos' || place.categoryId === category) &&
          matchesQuery(query, place.name, place.summary, place.barrio, place.category),
      ),
    [category, query],
  );

  const selected = visible.find((place) => place.id === selectedId) ?? null;

  function choose(id) {
    setSelectedId(id);
    document.getElementById(`pin-${id}`)?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }

  return (
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(18rem,0.8fr)]">
      <div>
        <div className="overflow-hidden rounded-2xl bg-white shadow-tarjeta">
          <div className="relative aspect-[8/5] w-full">
            {/* REEMPLAZAR con foto real de la comunidad si el mapa ilustrado se sustituye por una imagen */}
            <img src={mapa} alt="Mapa ilustrado de ejemplo de Chapulhuacanito, con calles, río y casas" className="h-full w-full object-cover" />
            {visible.map((place) => {
              const active = place.id === selected?.id;
              return (
                <button
                  key={place.id}
                  id={`pin-${place.id}`}
                  type="button"
                  aria-pressed={active}
                  aria-label={place.name}
                  onClick={() => setSelectedId(place.id)}
                  style={{ left: `${place.x}%`, top: `${place.y}%` }}
                  className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja ${
                    place.overlay ? 'h-12 w-12 bg-transparent' : 'h-5 w-5 border-2 border-white shadow'
                  } ${place.overlay ? '' : place.pinClass} ${active ? 'ring-4 ring-naranja' : 'hover:ring-2 hover:ring-white'}`}
                />
              );
            })}
          </div>
        </div>
        <p className="mt-3 text-sm text-tinta/60">
          Mapa ilustrado de ejemplo. Los pines no usan un servicio externo.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-4 shadow-tarjeta sm:p-5">
        <SearchBar id="buscar-mapa" value={query} onChange={setQuery} placeholder="Busca un lugar o barrio" label="Buscar en el mapa" />
        <div className="mt-4">
          <FilterChips label="Categoría del mapa" options={lugarCategories} value={category} onChange={setCategory} />
        </div>
        <p className="mt-4 text-sm text-tinta/60" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'lugar' : 'lugares'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              title="Ningún lugar coincide"
              text="Prueba con otro barrio o quita el filtro."
              onClear={() => {
                setQuery('');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-3 max-h-[28rem] space-y-2 overflow-auto">
            {visible.map((place) => {
              const active = place.id === selected?.id;
              return (
                <li key={place.id}>
                  <button
                    type="button"
                    onClick={() => choose(place.id)}
                    aria-pressed={active}
                    className={`w-full rounded-2xl px-4 py-3 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja ${
                      active ? 'bg-naranja-50 ring-2 ring-naranja' : 'bg-crema hover:bg-naranja-50'
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-tinta">{place.name}</span>
                      <Badge className="bg-verde">{place.category}</Badge>
                    </span>
                    <span className="mt-1 block text-sm text-tinta/70">
                      {place.barrio} · {place.summary}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {selected ? (
          <Link
            to={selected.to}
            className="mt-4 inline-flex rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
          >
            Ver {selected.name}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
