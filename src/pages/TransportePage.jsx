import { useMemo, useState } from 'react';
import { destinos, rutas } from '../data/rutas';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import Photo from '../components/ui/Photo';

export default function TransportePage() {
  const section = sections.transporte;
  const [destino, setDestino] = useState('todos');
  usePageTitle(section.title);

  const visible = useMemo(
    () => rutas.filter((ruta) => destino === 'todos' || ruta.destinoId === destino || (destino === 'arroyo-verde' && ruta.id === 'colectivo-loma')),
    [destino],
  );

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={`${section.intro} Horarios y tarifas son de ejemplo.`} art={sectionArt.transporte} />
      <PageSection>
        <FilterChips label="Destino" options={destinos} value={destino} onChange={setDestino} />
        <p className="mt-4 text-sm text-tinta/70" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'ruta' : 'rutas'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState title="No hay ruta a ese destino" text="Elige otro destino de la lista." onClear={() => setDestino('todos')} />
          </div>
        ) : (
          <ul className="mt-6 space-y-6">
            {visible.map((ruta) => (
              <li key={ruta.id} className="overflow-hidden rounded-2xl bg-white shadow-tarjeta">
                <Photo src={ruta.image} alt={ruta.alt} className="h-40 w-full object-cover" />
                <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{ruta.name}</h2>
                    <p className="mt-1 text-sm text-tinta/70">{ruta.resumen}</p>
                  </div>
                  <p className="rounded-full bg-naranja-50 px-4 py-1.5 text-sm font-bold text-naranja-700">Tarifa {ruta.tarifa}</p>
                </div>
                <p className="mt-4 text-sm font-semibold">Paradas</p>
                <ol className="mt-2 flex flex-wrap gap-2">
                  {ruta.paradas.map((parada, index) => (
                    <li key={parada} className="rounded-full bg-crema px-3 py-1 text-sm text-tinta">
                      {index + 1}. {parada}
                    </li>
                  ))}
                </ol>
                <div className="mt-5 hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[28rem] text-left text-sm">
                    <caption className="sr-only">Horarios de {ruta.name}</caption>
                    <thead>
                      <tr className="border-b border-crema-200 text-tinta/70">
                        <th className="py-2 pr-4 font-semibold">Sale</th>
                        <th className="py-2 pr-4 font-semibold">Llega</th>
                        <th className="py-2 font-semibold">Nota</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ruta.horarios.map((horario) => (
                        <tr key={`${horario.sale}-${horario.nota}`} className="border-b border-crema-100 last:border-0">
                          <td className="py-3 pr-4 font-semibold">{horario.sale}</td>
                          <td className="py-3 pr-4">{horario.llega}</td>
                          <td className="py-3 text-tinta/70">{horario.nota}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className="mt-4 space-y-2 md:hidden">
                  {ruta.horarios.map((horario) => (
                    <li key={`${horario.sale}-${horario.nota}`} className="rounded-2xl bg-crema px-4 py-3">
                      <p className="font-semibold">
                        {horario.sale} → {horario.llega}
                      </p>
                      <p className="text-sm text-tinta/70">{horario.nota}</p>
                    </li>
                  ))}
                </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageSection>
    </>
  );
}
