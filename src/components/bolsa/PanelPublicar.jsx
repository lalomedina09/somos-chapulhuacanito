import { useEffect, useId, useState } from 'react'
import { Icono } from '../Iconos.jsx'
import Dialogo from './Dialogo.jsx'
import { TIPOS, TODAS_CATEGORIAS, guardarEjemplo, tipoPorId } from '../../data/publicaciones.js'

const VACIO = { tipo: 'servicio', categoria: '', titulo: '', descripcion: '' }

export default function PanelPublicar({ abierto, onCerrar, tipoInicial = 'servicio', onPublicada }) {
  const tituloId = useId()
  const [valores, setValores] = useState({ ...VACIO, tipo: tipoInicial })
  const [errores, setErrores] = useState({})
  const [archivos, setArchivos] = useState([])
  const [exito, setExito] = useState(false)

  useEffect(() => {
    if (!abierto) return
    setValores({ ...VACIO, tipo: tipoInicial || 'servicio' })
    setErrores({})
    setArchivos((prev) => {
      prev.forEach((a) => a.url && URL.revokeObjectURL(a.url))
      return []
    })
    setExito(false)
  }, [abierto, tipoInicial])

  function cambiar(campo, valor) {
    setValores((v) => ({ ...v, [campo]: valor }))
    setErrores((e) => ({ ...e, [campo]: undefined }))
  }

  function alElegirArchivos(evento) {
    const lista = [...evento.target.files]
    evento.target.value = ''
    if (archivos.length + lista.length > 5) {
      setErrores((e) => ({ ...e, archivos: 'Puedes adjuntar hasta 5 archivos de ejemplo.' }))
      return
    }
    const pesados = lista.filter((f) => f.size > 8 * 1024 * 1024)
    if (pesados.length) {
      setErrores((e) => ({ ...e, archivos: 'Cada archivo de ejemplo debe pesar menos de 8 MB.' }))
      return
    }
    const nuevos = lista.map((archivo) => ({
      id: `${archivo.name}-${archivo.size}-${Math.random().toString(16).slice(2)}`,
      nombre: archivo.name,
      tipo: archivo.type,
      url: archivo.type.startsWith('image/') ? URL.createObjectURL(archivo) : '',
    }))
    setArchivos((prev) => [...prev, ...nuevos])
    setErrores((e) => ({ ...e, archivos: undefined }))
  }

  function quitarArchivo(id) {
    setArchivos((prev) => {
      const encontrado = prev.find((a) => a.id === id)
      if (encontrado?.url) URL.revokeObjectURL(encontrado.url)
      return prev.filter((a) => a.id !== id)
    })
  }

  function validar() {
    const siguientes = {}
    if (!valores.tipo) siguientes.tipo = 'Elige qué tipo de publicación es.'
    if (!valores.categoria) siguientes.categoria = 'Elige una categoría.'
    if (valores.titulo.trim().length < 8) siguientes.titulo = 'Escribe un título de al menos 8 caracteres.'
    if (valores.descripcion.trim().length < 30) siguientes.descripcion = 'Cuéntanos un poco más: al menos 30 caracteres.'
    return siguientes
  }

  function enviar(evento) {
    evento.preventDefault()
    const siguientes = validar()
    setErrores(siguientes)
    if (Object.keys(siguientes).length) {
      const primero = Object.keys(siguientes)[0]
      document.getElementById(`campo-${primero}`)?.focus()
      return
    }
    const hoy = new Date().toISOString().slice(0, 10)
    const publicacion = {
      id: `ejemplo-${Date.now()}`,
      nombre: valores.titulo.trim(),
      categoria: valores.categoria,
      tipo: valores.tipo,
      zona: 'chapulhuacanito',
      ubicacion: 'Chapulhuacanito · ejemplo',
      calificacion: 0,
      resenas: 0,
      estado: 'Ejemplo recién creado',
      tono: 'ambar',
      destacado: false,
      fecha: hoy,
      imagen: valores.categoria,
      galeria: [valores.categoria, 'mapa'],
      whatsapp: '5214831000000',
      resumen: valores.descripcion.trim().slice(0, 160),
      descripcion: valores.descripcion.trim(),
      incluye: ['Publicación de ejemplo guardada solo en este navegador', 'No se envió a un servidor'],
      info: {
        servicio: tipoPorId(valores.tipo)?.nombre || 'Publicación',
        cobertura: 'Chapulhuacanito',
        horarios: 'Por confirmar',
        experiencia: 'Dato de ejemplo',
        respuesta: 'Mensaje de ejemplo',
      },
      opiniones: [],
      ejemplo: true,
    }
    guardarEjemplo(publicacion)
    onPublicada?.(publicacion)
    setExito(true)
  }

  return (
    <Dialogo abierto={abierto} onCerrar={onCerrar} tituloId={tituloId} variante="drawer">
      <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-crema-200 bg-crema/95 px-5 py-4 backdrop-blur">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-naranja">Ejemplo</p>
          <h2 id={tituloId} className="text-xl font-bold">Crear publicación</h2>
        </div>
        <button type="button" onClick={onCerrar} className="grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-white" aria-label="Cerrar panel de publicación">
          <Icono id="i-cerrar" className="icono h-5 w-5" />
        </button>
      </div>

      {exito ? (
        <div className="px-5 py-8" role="status">
          <p className="font-mano text-3xl text-verde">¡Listo!</p>
          <p className="mt-2 text-lg font-bold">Tu publicación de ejemplo ya aparece en la bolsa</p>
          <p className="mt-2 text-sm leading-relaxed text-tinta/75">
            La guardamos solo en este navegador, como el resto de los formularios de muestra del sitio. Cuando exista un servidor, este mismo formulario podrá enviarla de verdad.
          </p>
          <button type="button" onClick={onCerrar} className="mt-6 inline-flex min-h-11 items-center rounded-full bg-naranja px-5 font-semibold text-white hover:bg-naranja-600" data-autofocus>
            Ver la bolsa
          </button>
        </div>
      ) : (
        <form className="space-y-5 px-5 py-5" onSubmit={enviar} noValidate>
          <fieldset>
            <legend className="text-sm font-semibold">Tipo de publicación</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {TIPOS.map((tipo, indice) => (
                <label key={tipo.id} className={`flex min-h-11 cursor-pointer items-center justify-center rounded-xl border px-2 text-center text-sm font-semibold ${valores.tipo === tipo.id ? 'border-naranja bg-naranja text-white' : 'border-crema-200 bg-white'}`}>
                  <input
                    id={indice === 0 ? 'campo-tipo' : undefined}
                    className="sr-only"
                    type="radio"
                    name="tipo"
                    value={tipo.id}
                    checked={valores.tipo === tipo.id}
                    data-autofocus={indice === 0 ? true : undefined}
                    onChange={() => cambiar('tipo', tipo.id)}
                  />
                  {tipo.nombre === 'Servicios' ? 'Servicio' : tipo.nombre}
                </label>
              ))}
            </div>
            {errores.tipo && <p className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.tipo}</p>}
          </fieldset>

          <div>
            <label htmlFor="campo-categoria" className="text-sm font-semibold">Categoría</label>
            <select
              id="campo-categoria"
              value={valores.categoria}
              onChange={(e) => cambiar('categoria', e.target.value)}
              aria-invalid={Boolean(errores.categoria)}
              aria-describedby={errores.categoria ? 'error-categoria' : undefined}
              className="mt-2 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3 text-base"
            >
              <option value="">Selecciona una categoría</option>
              {TODAS_CATEGORIAS.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
            {errores.categoria && <p id="error-categoria" className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.categoria}</p>}
          </div>

          <div>
            <label htmlFor="campo-titulo" className="text-sm font-semibold">Título</label>
            <input
              id="campo-titulo"
              value={valores.titulo}
              onChange={(e) => cambiar('titulo', e.target.value)}
              maxLength={80}
              aria-invalid={Boolean(errores.titulo)}
              aria-describedby={errores.titulo ? 'error-titulo' : undefined}
              placeholder="Por ejemplo, Tamales y atole los domingos"
              className="mt-2 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3 text-base"
            />
            {errores.titulo && <p id="error-titulo" className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.titulo}</p>}
          </div>

          <div>
            <label htmlFor="campo-descripcion" className="text-sm font-semibold">Descripción</label>
            <textarea
              id="campo-descripcion"
              value={valores.descripcion}
              onChange={(e) => cambiar('descripcion', e.target.value)}
              rows={5}
              maxLength={600}
              aria-invalid={Boolean(errores.descripcion)}
              aria-describedby={errores.descripcion ? 'error-descripcion' : 'ayuda-descripcion'}
              placeholder="Cuéntanos qué ofreces, tu experiencia, zona de cobertura y horarios."
              className="mt-2 w-full rounded-xl border border-crema-200 bg-white px-3 py-3 text-base"
            />
            <p id="ayuda-descripcion" className="mt-1 text-xs text-tinta/60">{valores.descripcion.trim().length}/600</p>
            {errores.descripcion && <p id="error-descripcion" className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.descripcion}</p>}
          </div>

          <div>
            <p className="text-sm font-semibold" id="etiqueta-fotos">Fotos o videos</p>
            <label htmlFor="campo-archivos" className="mt-2 flex min-h-32 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-naranja/40 bg-white px-4 py-6 text-center">
              <Icono id="i-imagen" className="icono h-8 w-8 text-naranja" />
              <span className="mt-2 text-sm font-medium">Arrastra tus fotos o videos aquí</span>
              <span className="text-xs text-tinta/60">o tócalo para elegirlos. No se suben a ningún lado.</span>
              <input id="campo-archivos" type="file" accept="image/*,video/*" multiple className="sr-only" aria-describedby="etiqueta-fotos error-archivos" onChange={alElegirArchivos} />
            </label>
            {errores.archivos && <p id="error-archivos" className="mt-1 text-sm text-[#9b1c1c]" role="alert">{errores.archivos}</p>}
            {archivos.length > 0 && (
              <ul className="mt-3 space-y-2">
                {archivos.map((archivo) => (
                  <li key={archivo.id} className="flex items-center gap-3 rounded-xl bg-white p-2">
                    {archivo.url ? <img src={archivo.url} alt="" className="h-12 w-12 rounded-lg object-cover" /> : <span className="grid h-12 w-12 place-items-center rounded-lg bg-naranja-50 text-naranja"><Icono id="i-imagen" className="icono h-5 w-5" /></span>}
                    <span className="min-w-0 flex-1 truncate text-sm">{archivo.nombre}</span>
                    <button type="button" className="grid h-11 w-11 place-items-center rounded-full hover:bg-crema" aria-label={`Quitar ${archivo.nombre}`} onClick={() => quitarArchivo(archivo.id)}>
                      <Icono id="i-cerrar" className="icono h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-naranja text-base font-semibold text-white shadow-md shadow-naranja/30 hover:bg-naranja-600">
            Publicar ahora
          </button>
          <p className="text-center text-xs text-tinta/60">Formulario de ejemplo. No guarda datos en un servidor.</p>
        </form>
      )}
    </Dialogo>
  )
}
