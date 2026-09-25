import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router'
import { Icono } from '../components/Iconos.jsx'
import Dialogo from '../components/bolsa/Dialogo.jsx'
import Estrellas from '../components/bolsa/Estrellas.jsx'
import {
  categoriaPorId,
  enlaceWhatsapp,
  imagenDe,
  publicacionPorId,
  tipoPorId,
} from '../data/publicaciones.js'
import { useTitulo } from '../lib/useTitulo.js'

const PESTANAS = [
  { id: 'descripcion', nombre: 'Descripción' },
  { id: 'galeria', nombre: 'Galería' },
  { id: 'resenas', nombre: 'Reseñas' },
  { id: 'ubicacion', nombre: 'Ubicación' },
]

export default function BolsaDetallePage() {
  const { id } = useParams()
  const publicacion = publicacionPorId(id)
  useTitulo(publicacion ? `${publicacion.nombre} · Bolsa de trabajo` : 'Publicación no encontrada · Somos Chapulhuacanito')

  if (!publicacion) {
    return (
      <section className="mx-auto max-w-xl px-4 py-20 text-center">
        <h1 className="text-3xl font-extrabold">No encontramos esta publicación</h1>
        <p className="mt-3 text-tinta/70">Puede ser un ejemplo que solo estaba en otra pestaña del navegador, o un enlace incompleto.</p>
        <Link to="/bolsa-de-trabajo" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-naranja px-5 font-semibold text-white hover:bg-naranja-600">Volver a la bolsa</Link>
      </section>
    )
  }

  return <Ficha publicacion={publicacion} />
}

function Ficha({ publicacion }) {
  const categoria = categoriaPorId(publicacion.categoria)
  const tipo = tipoPorId(publicacion.tipo)
  const fotos = useMemo(() => {
    const claves = [publicacion.imagen, ...(publicacion.galeria || [])]
    return [...new Set(claves)].map((clave) => ({ clave, src: imagenDe(clave) }))
  }, [publicacion])
  const [foto, setFoto] = useState(0)
  const [pestana, setPestana] = useState('descripcion')
  const [solicitud, setSolicitud] = useState(false)
  const activa = fotos[foto] || fotos[0]
  const calificacion = Number(publicacion.calificacion) || 0

  return (
    <article className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <nav aria-label="Ruta de navegación" className="text-sm text-tinta/70">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li><Link to="/" className="font-medium hover:text-naranja">Inicio</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link to="/bolsa-de-trabajo" className="font-medium hover:text-naranja">Bolsa de trabajo</Link></li>
          <li aria-hidden="true">/</li>
          <li className="font-semibold text-tinta" aria-current="page">{publicacion.nombre}</li>
        </ol>
      </nav>

      <div className="mt-5 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div>
          <div className="overflow-hidden rounded-3xl bg-white shadow-tarjeta">
            <img src={activa?.src} alt={`Ilustración de ${publicacion.nombre}`} className="aspect-[16/9] w-full object-cover" />
            {fotos.length > 1 && (
              <ul className="flex gap-2 overflow-x-auto p-3" aria-label="Galería de ilustraciones">
                {fotos.map((item, indice) => (
                  <li key={item.clave}>
                    <button
                      type="button"
                      aria-label={`Ver ilustración ${indice + 1} de ${fotos.length}`}
                      aria-current={indice === foto ? 'true' : undefined}
                      onClick={() => setFoto(indice)}
                      className={`h-16 w-24 overflow-hidden rounded-xl ring-2 ${indice === foto ? 'ring-naranja' : 'ring-transparent'}`}
                    >
                      <img src={item.src} alt="" className="h-full w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {categoria && <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${categoria.tono}`}>{categoria.nombre}</span>}
            {tipo && <span className="rounded-full bg-crema-200 px-3 py-1 text-xs font-semibold">{tipo.nombre}</span>}
            {publicacion.ejemplo && <span className="rounded-full bg-naranja-50 px-3 py-1 text-xs font-semibold text-naranja">Ejemplo local</span>}
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
            <span className="inline-flex items-center gap-1.5"><Icono id="i-ubicacion" className="icono h-4 w-4" />{publicacion.ubicacion}</span>
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a href={enlaceWhatsapp(publicacion)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1f8f4e] px-5 font-semibold text-white hover:bg-[#187a42]">
              <Icono id="i-whatsapp" className="icono h-5 w-5" />WhatsApp
            </a>
            <button type="button" onClick={() => setSolicitud(true)} className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 font-semibold text-naranja ring-1 ring-naranja/40 hover:bg-naranja-50">
              Solicitar información
            </button>
          </div>
          <p className="mt-2 text-xs text-tinta/55">El número de WhatsApp es de ejemplo y no corresponde a una persona real.</p>

          <div className="mt-8 border-b border-crema-200" role="tablist" aria-label="Secciones de la publicación">
            <div className="sin-scroll -mb-px flex gap-1 overflow-x-auto">
              {PESTANAS.map((item) => {
                const seleccionada = pestana === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    id={`tab-${item.id}`}
                    aria-selected={seleccionada}
                    aria-controls={`panel-${item.id}`}
                    tabIndex={seleccionada ? 0 : -1}
                    onClick={() => setPestana(item.id)}
                    className={`min-h-11 shrink-0 border-b-2 px-4 text-sm font-semibold ${seleccionada ? 'border-naranja text-naranja' : 'border-transparent text-tinta/70 hover:text-tinta'}`}
                  >
                    {item.nombre}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-5" role="tabpanel" id={`panel-${pestana}`} aria-labelledby={`tab-${pestana}`}>
            {pestana === 'descripcion' && (
              <div>
                <p className="text-base leading-relaxed text-tinta/85">{publicacion.descripcion}</p>
                {publicacion.incluye?.length > 0 && (
                  <ul className="mt-5 space-y-3">
                    {publicacion.incluye.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#e8f6ee] text-verde"><Icono id="i-check" className="icono h-4 w-4" /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            {pestana === 'galeria' && (
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {fotos.map((item, indice) => (
                  <li key={item.clave}>
                    <button type="button" className="block w-full overflow-hidden rounded-2xl" onClick={() => { setFoto(indice); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                      <img src={item.src} alt={`Ilustración ${indice + 1} de ${publicacion.nombre}`} className="aspect-[4/3] w-full object-cover" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {pestana === 'resenas' && (
              publicacion.opiniones?.length ? (
                <ul className="space-y-4">
                  {publicacion.opiniones.map((opinion) => (
                    <li key={`${opinion.nombre}-${opinion.fecha}`} className="rounded-2xl bg-white p-4 shadow-tarjeta">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="font-semibold">{opinion.nombre}</p>
                        <p className="text-sm text-tinta/60">{opinion.fecha}</p>
                      </div>
                      <p className="mt-1 flex items-center gap-2 text-sm">
                        <Estrellas valor={opinion.estrellas} />
                        <span className="sr-only">{opinion.estrellas} de 5 estrellas</span>
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-tinta/80">{opinion.texto}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="rounded-2xl bg-white p-5 text-tinta/70 shadow-tarjeta">Todavía no hay reseñas de ejemplo en esta publicación.</p>
              )
            )}
            {pestana === 'ubicacion' && (
              <div className="overflow-hidden rounded-2xl bg-white shadow-tarjeta">
                <img src={imagenDe('mapa')} alt="Ilustración de un mapa de la comunidad. El mapa real se agregará más adelante." className="aspect-[16/9] w-full object-cover" />
                <div className="p-4">
                  <p className="font-semibold">{publicacion.ubicacion}</p>
                  <p className="mt-1 text-sm text-tinta/70">{publicacion.info?.cobertura}</p>
                  <p className="mt-2 text-sm text-tinta/60">Esta imagen es un dibujo de referencia. Más adelante podrá enlazar a un mapa de la comunidad.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-3xl bg-white p-5 shadow-tarjeta lg:sticky lg:top-24">
          <h2 className="text-lg font-bold">Información</h2>
          <dl className="mt-4 space-y-4 text-sm">
            <Dato icono="i-maletin" etiqueta="Servicio" valor={publicacion.info?.servicio} />
            <Dato icono="i-ubicacion" etiqueta="Zona de cobertura" valor={publicacion.info?.cobertura} />
            <Dato icono="i-reloj" etiqueta="Horarios" valor={publicacion.info?.horarios} />
            <Dato icono="i-estrella" etiqueta="Experiencia" valor={publicacion.info?.experiencia} />
            <Dato icono="i-calendario" etiqueta="Tiempo de respuesta" valor={publicacion.info?.respuesta} />
          </dl>
        </aside>
      </div>

      <Solicitud abierto={solicitud} onCerrar={() => setSolicitud(false)} nombre={publicacion.nombre} />
    </article>
  )
}

function Dato({ icono, etiqueta, valor }) {
  return (
    <div className="flex gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-naranja-50 text-naranja"><Icono id={icono} className="icono h-5 w-5" /></span>
      <div>
        <dt className="text-xs font-semibold uppercase tracking-wide text-tinta/50">{etiqueta}</dt>
        <dd className="mt-0.5 font-medium">{valor}</dd>
      </div>
    </div>
  )
}

function Solicitud({ abierto, onCerrar, nombre }) {
  const [valores, setValores] = useState({ persona: '', contacto: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [exito, setExito] = useState(false)

  function cerrar() {
    setExito(false)
    setErrores({})
    setValores({ persona: '', contacto: '', mensaje: '' })
    onCerrar()
  }

  function enviar(evento) {
    evento.preventDefault()
    const siguientes = {}
    if (valores.persona.trim().length < 3) siguientes.persona = 'Escribe tu nombre.'
    if (valores.contacto.trim().length < 6) siguientes.contacto = 'Deja un teléfono o correo de ejemplo.'
    if (valores.mensaje.trim().length < 12) siguientes.mensaje = 'Cuéntanos qué necesitas, aunque sea breve.'
    setErrores(siguientes)
    if (Object.keys(siguientes).length) return
    setExito(true)
  }

  return (
    <Dialogo abierto={abierto} onCerrar={cerrar} tituloId="titulo-solicitud" variante="modal">
      <div className="flex items-start justify-between gap-3">
        <h2 id="titulo-solicitud" className="text-xl font-bold">Solicitar información</h2>
        <button type="button" onClick={cerrar} className="grid h-11 w-11 place-items-center rounded-full hover:bg-white" aria-label="Cerrar solicitud">
          <Icono id="i-cerrar" className="icono h-5 w-5" />
        </button>
      </div>
      {exito ? (
        <div className="mt-4" role="status">
          <p className="font-mano text-3xl text-verde">Mensaje de ejemplo enviado</p>
          <p className="mt-2 text-sm leading-relaxed text-tinta/75">
            En la versión real, «{nombre}» recibiría tu recado. Aquí no sale del navegador. Gracias por probar la bolsa.
          </p>
          <button type="button" onClick={cerrar} className="mt-5 inline-flex min-h-11 items-center rounded-full bg-naranja px-5 font-semibold text-white" data-autofocus>Cerrar</button>
        </div>
      ) : (
        <form className="mt-4 space-y-4" onSubmit={enviar} noValidate>
          <p className="text-sm text-tinta/70">Escribe a «{nombre}». Este formulario es de muestra, igual que los demás del sitio.</p>
          <div>
            <label htmlFor="sol-persona" className="text-sm font-semibold">Tu nombre</label>
            <input id="sol-persona" data-autofocus value={valores.persona} onChange={(e) => setValores({ ...valores, persona: e.target.value })} className="mt-1 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3" aria-invalid={Boolean(errores.persona)} />
            {errores.persona && <p className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.persona}</p>}
          </div>
          <div>
            <label htmlFor="sol-contacto" className="text-sm font-semibold">Teléfono o correo</label>
            <input id="sol-contacto" value={valores.contacto} onChange={(e) => setValores({ ...valores, contacto: e.target.value })} className="mt-1 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3" aria-invalid={Boolean(errores.contacto)} />
            {errores.contacto && <p className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.contacto}</p>}
          </div>
          <div>
            <label htmlFor="sol-mensaje" className="text-sm font-semibold">Mensaje</label>
            <textarea id="sol-mensaje" rows={4} value={valores.mensaje} onChange={(e) => setValores({ ...valores, mensaje: e.target.value })} className="mt-1 w-full rounded-xl border border-crema-200 bg-white px-3 py-3" aria-invalid={Boolean(errores.mensaje)} />
            {errores.mensaje && <p className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.mensaje}</p>}
          </div>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-naranja font-semibold text-white hover:bg-naranja-600">Enviar solicitud</button>
        </form>
      )}
    </Dialogo>
  )
}
