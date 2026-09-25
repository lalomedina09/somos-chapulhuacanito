import { useEffect, useState } from 'react';
import Badge from '../components/ui/Badge';
import FormField, { fieldClass } from '../components/ui/FormField';
import PageHero from '../components/ui/PageHero';
import PageSection from '../components/ui/PageSection';
import PrimaryButton from '../components/ui/PrimaryButton';
import { barrios } from '../data/barrios';
import { reporteImagenes, reportesIniciales, tiposReporte } from '../data/reportes';
import { sectionArt } from '../data/sectionArt';
import { sections } from '../data/sections';
import usePageTitle from '../hooks/usePageTitle';

const emptyForm = {
  tipo: '',
  descripcion: '',
  barrio: '',
  contacto: '',
};

function contactoValido(value) {
  const text = value.trim();
  if (!text) return true;
  if (text.includes('@')) return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(text);
  return /^\d{10}$/.test(text.replace(/\s/g, ''));
}

export default function ReportarPage() {
  const section = sections.reportar;
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState('');
  const [fileName, setFileName] = useState('');
  const [success, setSuccess] = useState(null);
  const [reportes, setReportes] = useState(reportesIniciales);
  usePageTitle(section.title);

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview);
  }, [preview]);

  function update(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onPhoto(event) {
    const file = event.target.files?.[0];
    if (preview) URL.revokeObjectURL(preview);
    if (!file) {
      setPreview('');
      setFileName('');
      return;
    }
    setFileName(file.name);
    setPreview(URL.createObjectURL(file));
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.tipo) next.tipo = 'Elige el tipo de reporte.';
    if (form.descripcion.trim().length < 20) next.descripcion = 'Describe el problema en al menos 20 caracteres.';
    if (!form.barrio) next.barrio = 'Indica el barrio.';
    if (!contactoValido(form.contacto)) next.contacto = 'Usa un correo (ejemplo@correo.ejemplo) o 10 dígitos.';
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    const folio = `RP-2026-${String(1900 + form.descripcion.trim().length).slice(-4)}`;
    const barrio = barrios.find((item) => item.id === form.barrio);
    const tipo = tiposReporte.find((item) => item.id === form.tipo);
    const nuevo = {
      id: folio,
      image: reporteImagenes[form.tipo] ?? reporteImagenes.otro,
      alt: 'Ilustración del tipo de reporte',
      folio,
      tipo: tipo?.label ?? 'Otro',
      titulo: form.descripcion.trim().slice(0, 80),
      barrio: barrio?.name ?? form.barrio,
      estado: 'Recibido',
      estadoClass: 'bg-[#1C7ED6]',
      fecha: 'Ahora, en este prototipo',
    };
    setReportes((current) => [nuevo, ...current]);
    setSuccess({ folio, tipo: nuevo.tipo, barrio: nuevo.barrio });
  }

  return (
    <>
      <PageHero kicker={section.kicker} title={section.title} intro={section.intro} art={sectionArt.reportar} />
      <PageSection>
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="rounded-2xl bg-white p-5 shadow-tarjeta sm:p-8">
            {success ? (
              <div role="status">
                <p className="font-mano text-3xl font-bold text-naranja">Recibido</p>
                <h2 className="mt-1 text-2xl font-bold">Folio de ejemplo {success.folio}</h2>
                <p className="mt-3 text-sm leading-relaxed text-tinta/75">
                  {success.tipo} en {success.barrio}. Nadie lo está atendiendo: el folio solo aparece en esta pantalla para que puedas enseñar el flujo.
                </p>
                <button
                  type="button"
                  className="mt-6 rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white"
                  onClick={() => {
                    setSuccess(null);
                    setForm(emptyForm);
                    if (preview) URL.revokeObjectURL(preview);
                    setPreview('');
                    setFileName('');
                  }}
                >
                  Hacer otro reporte
                </button>
              </div>
            ) : (
              <form className="grid gap-4" noValidate onSubmit={submit}>
                <FormField id="tipo" label="Tipo de reporte" error={errors.tipo}>
                  <select id="tipo" className={fieldClass} value={form.tipo} aria-invalid={Boolean(errors.tipo)} aria-describedby={errors.tipo ? 'tipo-error' : undefined} onChange={(event) => update('tipo', event.target.value)}>
                    <option value="">Elige uno</option>
                    {tiposReporte.map((tipo) => (
                      <option key={tipo.id} value={tipo.id}>{tipo.label}</option>
                    ))}
                  </select>
                </FormField>
                <FormField id="descripcion" label="Descripción" hint="Qué pasa y desde cuándo, con tus palabras." error={errors.descripcion}>
                  <textarea id="descripcion" rows={5} className={fieldClass} value={form.descripcion} aria-invalid={Boolean(errors.descripcion)} aria-describedby={errors.descripcion ? 'descripcion-error' : undefined} onChange={(event) => update('descripcion', event.target.value)} />
                </FormField>
                <FormField id="barrio" label="Ubicación o barrio" error={errors.barrio}>
                  <select id="barrio" className={fieldClass} value={form.barrio} aria-invalid={Boolean(errors.barrio)} aria-describedby={errors.barrio ? 'barrio-error' : undefined} onChange={(event) => update('barrio', event.target.value)}>
                    <option value="">Elige un barrio</option>
                    {barrios.map((barrio) => (
                      <option key={barrio.id} value={barrio.id}>{barrio.name}</option>
                    ))}
                  </select>
                </FormField>
                <FormField id="foto" label="Foto (opcional)" hint="Solo se previsualiza en tu navegador. No se sube.">
                  <input id="foto" type="file" accept="image/*" className={`${fieldClass} file:mr-3 file:rounded-full file:border-0 file:bg-naranja-50 file:px-3 file:py-1 file:text-sm file:font-semibold file:text-naranja-700`} onChange={onPhoto} />
                </FormField>
                {preview ? (
                  <div>
                    <p className="text-sm font-semibold">Vista previa{fileName ? `: ${fileName}` : ''}</p>
                    <img src={preview} alt="Vista previa de la foto que elegiste para el reporte" className="mt-2 max-h-48 w-full rounded-2xl object-cover" />
                  </div>
                ) : null}
                <FormField id="contacto" label="Contacto (opcional)" hint="Correo o 10 dígitos. Ejemplo: ejemplo@correo.ejemplo" error={errors.contacto}>
                  <input id="contacto" className={fieldClass} value={form.contacto} aria-invalid={Boolean(errors.contacto)} aria-describedby={errors.contacto ? 'contacto-error' : undefined} onChange={(event) => update('contacto', event.target.value)} />
                </FormField>
                <PrimaryButton type="submit">Enviar reporte de ejemplo</PrimaryButton>
              </form>
            )}
          </div>
          <aside>
            <h2 className="text-xl font-bold">Reportes recientes</h2>
            <p className="mt-1 text-sm text-tinta/60">Lista de ejemplo. El que acabas de capturar aparece arriba.</p>
            <ul className="mt-4 space-y-3">
              {reportes.map((reporte) => (
                <li key={reporte.id} className="rounded-2xl bg-white p-4 shadow-tarjeta">
                  <div className="flex gap-3">
                    <img src={reporte.image} alt={reporte.alt} className="h-16 w-20 shrink-0 rounded-xl object-cover" loading="lazy" />
                    <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-tinta/50">{reporte.folio}</p>
                    <Badge className={reporte.estadoClass}>{reporte.estado}</Badge>
                  </div>
                  <h3 className="mt-2 font-bold">{reporte.titulo}</h3>
                  <p className="mt-1 text-sm text-tinta/70">
                    {reporte.tipo} · {reporte.barrio}
                  </p>
                  <p className="mt-1 text-xs text-tinta/50">{reporte.fecha}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </PageSection>
    </>
  );
}
