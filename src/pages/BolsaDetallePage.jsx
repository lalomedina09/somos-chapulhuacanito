import { useId, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Dialogo from '../components/bolsa/Dialogo';
import Estrellas from '../components/bolsa/Estrellas';
import Icon from '../components/Icon';
import FormField, { fieldClass } from '../components/ui/FormField';
import { PrimaryLink } from '../components/ui/PrimaryButton';
import {
  categoriaPorId,
  enlaceWhatsapp,
  imagenDe,
  publicacionPorId,
  tipoPorId,
} from '../data/publicaciones';
import usePageTitle from '../hooks/usePageTitle';

const pestanas = [
  { id: 'descripcion', nombre: 'Descripción' },
  { id: 'galeria', nombre: 'Galería' },
  { id: 'resenas', nombre: 'Reseñas' },
  { id: 'ubicacion', nombre: 'Ubicación' },
];

const anillo = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja';

export default function BolsaDetallePage() {
  const { id } = useParams();
  const publicacion = publicacionPorId(id);
  usePageTitle(publicacion ? publicacion.nombre : 'Publicación no encontrada');

  if (!publicacion) {
    return (
      <section className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold">No encontramos esta publicación</h1>
        <p className="mt-3 text-tinta/70">Puede ser un ejemplo que solo estaba en otra pestaña del navegador, o un enlace incompleto.</p>
        <div className="mt-6 flex justify-center">
          <PrimaryLink to="/bolsa-de-trabajo">Volver a la bolsa</PrimaryLink>
        </div>
      </section>
    );
  }

  return <Ficha publicacion={publicacion} />;
}

function Ficha({ publicacion }) {
  const categoria = categoriaPorId(publicacion.categoria);
  const tipo = tipoPorId(publicacion.tipo);
  const fotos = useMemo(() => {
    const claves = [publicacion.imagen, ...(publicacion.galeria || [])];
    return [...new Set(claves)].map((clave) => ({ clave, src: imagenDe(clave) }));
  }, [publicacion]);
  const [foto, setFoto] = useState(0);
  const [pestana, setPestana] = useState('descripcion');
  const [solicitud, setSolicitud] = useState(false);
  const activa = fotos[foto] || fotos[0];
  const calificacion = Number(publicacion.calificacion) || 0;
  const info = publicacion.info || {};

  return (
    <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <nav aria-label="Ruta de navegación" className="text-sm text-tinta/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/" className={`rounded-sm font-medium hover:text-naranja-700 ${anillo}`}>Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/bolsa-de-trabajo" className={`rounded-sm font-medium hover:text-naranja-700 ${anillo}`}>Bolsa de trabajo</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-tinta" aria-current="page">{publicacion.nombre}</li>
        </ol>
      </nav>

      <div className="mt-5 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-tarjeta">
            <img src={activa?.src} alt={`Ilustración de ${publicacion.nombre}`} className="aspect-[16/9] w-full object-cover" />
            {fotos.length > 1 ? (
              <ul className="flex gap-2 overflow-x-auto p-3" aria-label="Galería de ilustraciones">
                {fotos.map((item, indice) => (
                  <li key={item.clave}>
                    <button
                      type="button"
                      aria-label={`Ver ilustración ${indice + 1} de ${fotos.length}`}
                      aria-current={indice === foto ? 'true' : undefined}
                      onClick={() => setFoto(indice)}
                      className={`h-16 w-24 overflow-hidden rounded-xl ring-2 ${indice === foto ? 'ring-naranja' : 'ring-transparent'} ${anillo}`}
                    >
                      <img src={item.src} alt="" className="h-full w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {categoria ? <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${categoria.tono}`}>{categoria.nombre}</span> : null}
            {tipo ? <span className="rounded-full bg-crema-200 px-3 py-1 text-xs font-semibold">{tipo.nombre}</span> : null}
            {publicacion.ejemplo ? <span className="rounded-full bg-naranja-50 px-3 py-1 text-xs font-semibold text-naranja-700">Ejemplo local</span> : null}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">{publicacion.nombre}</h1>
          <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-tinta/75">
            <span className="inline-flex items-center gap-1.5">
              <Estrellas valor={calificacion} />
              {publicacion.resenas > 0 ? (
                <span><span className="font-semibold text-tinta">{calificacion.toFixed(1)}</span> ({publicacion.resenas} reseñas)</span>
              ) : (
                <span>Sin reseñas aún</span>
              )}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon id="i-ubicacion" className="icono h-4 w-4" />
              {publicacion.ubicacion}
            </span>
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={enlaceWhatsapp(publicacion)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-verde px-5 font-semibold text-white hover:bg-verde-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde">
              <Icon id="i-telefono" className="icono h-5 w-5" />
              WhatsApp
            </a>
            <button type="button" onClick={() => setSolicitud(true)} className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 font-semibold text-naranja-700 ring-1 ring-naranja/40 hover:bg-naranja-50 ${anillo}`}>
              Solicitar información
            </button>
          </div>
          <p className="mt-2 text-xs text-tinta/55">El número de WhatsApp es de ejemplo y no corresponde a una persona real.</p>

          <div className="mt-8 border-b border-crema-200" role="tablist" aria-label="Secciones de la publicación">
            <div className="sin-scroll -mb-px flex gap-1 overflow-x-auto">
              {pestanas.map((item) => {
                const seleccionada = pestana === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={seleccionada}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => setPestana(item.id)}
                    className={`min-h-11 shrink-0 border-b-2 px-4 text-sm font-semibold ${seleccionada ? 'border-naranja text-naranja-700' : 'border-transparent text-tinta/70 hover:text-tinta'} ${anillo}`}
                  >
                    {item.nombre}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6" role="tabpanel" id={`panel-${pestana}`} aria-labelledby={`tab-${pestana}`}>
            {pestana === 'descripcion' ? (
              <div className="space-y-4 text-base leading-relaxed text-tinta/80">
                <p>{publicacion.descripcion}</p>
                {publicacion.incluye?.length ? (
                  <ul className="space-y-2">
                    {publicacion.incluye.map((punto) => (
                      <li key={punto} className="flex gap-2">
                        <Icon id="i-check" className="icono mt-1 h-4 w-4 shrink-0 text-verde" />
                        <span>{punto}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
            {pestana === 'galeria' ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {fotos.map((item, indice) => (
                  <li key={item.clave}>
                    <button type="button" className={`overflow-hidden rounded-2xl ${anillo}`} onClick={() => setFoto(indice)}>
                      <img src={item.src} alt={`Ilustración ${indice + 1} de ${publicacion.nombre}`} className="aspect-[4/3] w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
            {pestana === 'resenas' ? (
              publicacion.opiniones?.length ? (
                <ul className="space-y-4">
                  {publicacion.opiniones.map((opinion) => (
                    <li key={`${opinion.nombre}-${opinion.fecha}`} className="rounded-2xl bg-white p-4 shadow-tarjeta">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold">{opinion.nombre}</p>
                        <Estrellas valor={opinion.estrellas} />
                      </div>
                      <p className="mt-1 text-xs text-tinta/55">{opinion.fecha}</p>
                      <p className="mt-2 text-sm leading-relaxed text-tinta/80">{opinion.texto}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-tinta/70">Todavía no hay reseñas de ejemplo en esta publicación.</p>
              )
            ) : null}
            {pestana === 'ubicacion' ? (
              <div>
                <img src={imagenDe('mapa')} alt="Ilustración de un mapa sencillo con la zona de cobertura" className="aspect-[16/9] w-full rounded-2xl object-cover" />
                <p className="mt-3 text-sm text-tinta/75">{info.cobertura || publicacion.ubicacion}. El mapa es ilustrado: todavía no marca un punto real.</p>
              </div>
            ) : null}
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-5 shadow-tarjeta lg:sticky lg:top-24">
          <h2 className="text-lg font-bold">Información</h2>
          <dl className="mt-4 space-y-4 text-sm">
            {[
              ['Servicio', info.servicio],
              ['Zona de cobertura', info.cobertura],
              ['Horarios', info.horarios],
              ['Experiencia', info.experiencia],
              ['Tiempo de respuesta', info.respuesta],
            ].map(([etiqueta, valor]) => (
              <div key={etiqueta}>
                <dt className="text-xs font-semibold uppercase tracking-wide text-tinta/55">{etiqueta}</dt>
                <dd className="mt-1 font-medium">{valor || 'Por acordar'}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <Solicitud abierto={solicitud} nombre={publicacion.nombre} onCerrar={() => setSolicitud(false)} />
    </article>
  );
}

function Solicitud({ abierto, nombre, onCerrar }) {
  const tituloId = useId();
  const [valores, setValores] = useState({ nombre: '', contacto: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);

  function cambiar(campo, valor) {
    setValores((actual) => ({ ...actual, [campo]: valor }));
  }

  function enviar(evento) {
    evento.preventDefault();
    const siguientes = {};
    if (valores.nombre.trim().length < 3) siguientes.nombre = 'Escribe tu nombre.';
    if (valores.contacto.trim().length < 6) siguientes.contacto = 'Deja un teléfono o un correo de ejemplo.';
    if (valores.mensaje.trim().length < 12) siguientes.mensaje = 'Cuenta un poco más qué necesitas.';
    setErrores(siguientes);
    if (Object.keys(siguientes).length) {
      document.getElementById(`solicitud-${Object.keys(siguientes)[0]}`)?.focus();
      return;
    }
    setExito(true);
  }

  return (
    <Dialogo abierto={abierto} onCerrar={onCerrar} tituloId={tituloId} variante="modal">
      <div className="flex items-start justify-between gap-3">
        <h2 id={tituloId} className="text-xl font-extrabold">Solicitar información</h2>
        <button type="button" onClick={onCerrar} className={`grid h-11 w-11 place-items-center rounded-full hover:bg-white ${anillo}`} aria-label="Cerrar">
          <Icon id="i-cerrar" className="icono h-5 w-5" />
        </button>
      </div>
      {exito ? (
        <div className="mt-4 rounded-2xl bg-verde-50 p-5" role="status">
          <p className="font-semibold text-verde-700">Mensaje de ejemplo enviado</p>
          <p className="mt-2 text-sm text-tinta/80">
            En la versión real, «{nombre}» recibiría tu recado. Aquí no sale del navegador. Gracias por probar la bolsa.
          </p>
        </div>
      ) : (
        <form className="mt-4 grid gap-4" noValidate onSubmit={enviar}>
          <p className="text-sm text-tinta/70">Escribe a {nombre}. Este formulario no se envía a nadie.</p>
          <FormField id="solicitud-nombre" label="Tu nombre" error={errores.nombre}>
            <input id="solicitud-nombre" data-autofocus autoComplete="name" className={fieldClass} value={valores.nombre} aria-invalid={Boolean(errores.nombre)} aria-describedby={errores.nombre ? 'solicitud-nombre-error' : undefined} onChange={(evento) => cambiar('nombre', evento.target.value)} />
          </FormField>
          <FormField id="solicitud-contacto" label="Teléfono o correo" error={errores.contacto}>
            <input id="solicitud-contacto" autoComplete="off" className={fieldClass} value={valores.contacto} aria-invalid={Boolean(errores.contacto)} aria-describedby={errores.contacto ? 'solicitud-contacto-error' : undefined} onChange={(evento) => cambiar('contacto', evento.target.value)} />
          </FormField>
          <FormField id="solicitud-mensaje" label="Mensaje" error={errores.mensaje}>
            <textarea id="solicitud-mensaje" rows={4} className={fieldClass} value={valores.mensaje} aria-invalid={Boolean(errores.mensaje)} aria-describedby={errores.mensaje ? 'solicitud-mensaje-error' : undefined} onChange={(evento) => cambiar('mensaje', evento.target.value)} />
          </FormField>
          <button type="submit" className={`inline-flex min-h-11 items-center justify-center rounded-full bg-naranja px-5 font-semibold text-white hover:bg-naranja-600 ${anillo}`}>
            Enviar mensaje de ejemplo
          </button>
        </form>
      )}
    </Dialogo>
  );
}
