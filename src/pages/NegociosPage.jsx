import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DetailPage from '../components/content/DetailPage';
import Badge from '../components/ui/Badge';
import EmptyState from '../components/ui/EmptyState';
import FilterChips from '../components/ui/FilterChips';
import FormField, { fieldClass } from '../components/ui/FormField';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import Photo from '../components/ui/Photo';
import PrimaryButton from '../components/ui/PrimaryButton';
import SearchBar from '../components/ui/SearchBar';
import { barrios } from '../data/barrios';
import { negocioCategories, negocios } from '../data/negocios';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';
import { matchesQuery } from '../utils/text';

const emptyForm = {
  nombre: '',
  categoria: '',
  barrio: '',
  descripcion: '',
  horario: '',
  whatsapp: '',
};

export default function NegociosPage() {
  const section = sections.negocios;
  const [category, setCategory] = useState('todos');
  const [query, setQuery] = useState('');
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [folio, setFolio] = useState('');
  usePageTitle(section.title);

  const visible = useMemo(
    () =>
      negocios.filter(
        (item) =>
          (category === 'todos' || item.categoryId === category) &&
          matchesQuery(query, item.title, item.summary, item.barrio, item.category),
      ),
    [category, query],
  );

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (form.nombre.trim().length < 3) next.nombre = 'Escribe el nombre del negocio.';
    if (!form.categoria) next.categoria = 'Elige una categoría.';
    if (!form.barrio) next.barrio = 'Elige el barrio.';
    if (form.descripcion.trim().length < 20) next.descripcion = 'Cuéntalo en al menos 20 caracteres.';
    if (form.horario.trim().length < 3) next.horario = 'Indica un horario.';
    if (form.whatsapp.trim() && !/^\d{10}$/.test(form.whatsapp.replace(/\s/g, ''))) {
      next.whatsapp = 'Si lo pones, usa 10 dígitos. Ejemplo: 4810000000.';
    }
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setFolio(`NG-2026-${String(140 + form.nombre.length).padStart(3, '0')}`);
  }

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.negocios}>
        <SearchBar id="buscar-negocios" value={query} onChange={setQuery} placeholder="Busca una cocina, tienda o taller" label="Buscar negocios" />
      </PageHero>
      <PageSection>
        <FilterChips label="Categoría de negocios" options={negocioCategories} value={category} onChange={setCategory} />
        <p className="mt-4 text-sm text-tinta/60" aria-live="polite">
          {visible.length} {visible.length === 1 ? 'negocio' : 'negocios'}
        </p>
        {visible.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No hay negocios con esa búsqueda"
              text="Prueba otra categoría o limpia el texto."
              onClear={() => {
                setQuery('');
                setCategory('todos');
              }}
            />
          </div>
        ) : (
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item) => (
              <li key={item.id} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta">
                <div className="relative h-40 overflow-hidden">
                  <Photo src={item.image} alt={item.alt} />
                  <span className="absolute left-3 top-3">
                    <Badge className={item.badgeClass}>{item.badge}</Badge>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-lg font-bold leading-snug">{item.title}</h2>
                  <p className="mt-2 text-sm text-tinta/70">{item.summary}</p>
                  <p className="mt-3 text-sm font-medium text-tinta/80">{item.horario}</p>
                  <p className="text-sm text-tinta/60">{item.barrio}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link
                      to={`/negocios/${item.id}`}
                      className="rounded-full bg-naranja px-4 py-2 text-sm font-semibold text-white transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
                    >
                      Ver ficha
                    </Link>
                    <a
                      href={item.whatsapp}
                      className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-verde ring-1 ring-verde/30 transition hover:bg-verde-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </PageSection>

      <PageSection className="pt-0">
        <div id="registrar" className="scroll-mt-28 rounded-2xl bg-white p-5 shadow-tarjeta sm:p-8">
          <p className="font-mano text-3xl font-bold text-naranja">Hecho en casa</p>
          <h2 className="mt-1 text-2xl font-bold">Registra tu negocio</h2>
          <p className="mt-2 max-w-2xl text-sm text-tinta/70">
            Formulario de ejemplo. No se envía a ningún servidor. Si los datos están completos, verás un folio ficticio.
          </p>
          {folio ? (
            <div className="mt-6 rounded-2xl bg-verde-50 p-5" role="status">
              <p className="font-semibold text-verde-700">Listo, quedó en este prototipo.</p>
              <p className="mt-2 text-sm text-tinta/80">
                Folio de ejemplo <span className="font-bold">{folio}</span>. Nadie lo recibió: solo vive en esta pantalla.
              </p>
              <button
                type="button"
                className="mt-4 text-sm font-semibold text-naranja"
                onClick={() => {
                  setFolio('');
                  setForm(emptyForm);
                }}
              >
                Registrar otro
              </button>
            </div>
          ) : (
            <form className="mt-6 grid gap-4 sm:grid-cols-2" noValidate onSubmit={submit}>
              <FormField id="nombre" label="Nombre del negocio" error={errors.nombre}>
                <input id="nombre" className={fieldClass} value={form.nombre} aria-invalid={Boolean(errors.nombre)} aria-describedby={errors.nombre ? 'nombre-error' : undefined} onChange={(event) => update('nombre', event.target.value)} />
              </FormField>
              <FormField id="categoria" label="Categoría" error={errors.categoria}>
                <select id="categoria" className={fieldClass} value={form.categoria} aria-invalid={Boolean(errors.categoria)} aria-describedby={errors.categoria ? 'categoria-error' : undefined} onChange={(event) => update('categoria', event.target.value)}>
                  <option value="">Elige una</option>
                  {negocioCategories.filter((item) => item.id !== 'todos').map((item) => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                  ))}
                </select>
              </FormField>
              <FormField id="barrio" label="Barrio" error={errors.barrio}>
                <select id="barrio" className={fieldClass} value={form.barrio} aria-invalid={Boolean(errors.barrio)} aria-describedby={errors.barrio ? 'barrio-error' : undefined} onChange={(event) => update('barrio', event.target.value)}>
                  <option value="">Elige un barrio</option>
                  {barrios.map((barrio) => (
                    <option key={barrio.id} value={barrio.id}>{barrio.name}</option>
                  ))}
                </select>
              </FormField>
              <FormField id="horario" label="Horario" error={errors.horario}>
                <input id="horario" className={fieldClass} value={form.horario} placeholder="Lun a sáb, 8:00 a 16:00" aria-invalid={Boolean(errors.horario)} aria-describedby={errors.horario ? 'horario-error' : undefined} onChange={(event) => update('horario', event.target.value)} />
              </FormField>
              <div className="sm:col-span-2">
                <FormField id="descripcion" label="Descripción" error={errors.descripcion}>
                  <textarea id="descripcion" rows={4} className={fieldClass} value={form.descripcion} aria-invalid={Boolean(errors.descripcion)} aria-describedby={errors.descripcion ? 'descripcion-error' : undefined} onChange={(event) => update('descripcion', event.target.value)} />
                </FormField>
              </div>
              <FormField id="whatsapp" label="WhatsApp (opcional)" hint="10 dígitos, sin lada. Ejemplo: 4810000000" error={errors.whatsapp}>
                <input id="whatsapp" inputMode="numeric" className={fieldClass} value={form.whatsapp} aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined} onChange={(event) => update('whatsapp', event.target.value)} />
              </FormField>
              <div className="sm:col-span-2">
                <PrimaryButton type="submit">Guardar en el prototipo</PrimaryButton>
              </div>
            </form>
          )}
        </div>
      </PageSection>
    </>
  );
}

export function NegocioPage() {
  const { id } = useParams();
  const item = negocios.find((negocio) => negocio.id === id);
  return <DetailPage item={item} backTo="/negocios" backLabel="Negocios" kicker="Negocio" />;
}
