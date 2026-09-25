import { Link } from 'react-router'
import { Icono } from '../Iconos.jsx'
import Estrellas from './Estrellas.jsx'
import { categoriaPorId, enlaceWhatsapp, imagenDe, zonaPorId } from '../../data/publicaciones.js'

const TONOS = {
  verde: 'bg-[#e8f6ee] text-[#145c32]',
  ambar: 'bg-[#fff4df] text-[#8a5a00]',
  azul: 'bg-[#e7f5ff] text-[#1864ab]',
}

export default function TarjetaPublicacion({ publicacion, favorito, onFavorito, destacada = false }) {
  const categoria = categoriaPorId(publicacion.categoria)
  const zona = zonaPorId(publicacion.zona)
  const calificacion = Number(publicacion.calificacion) || 0

  return (
    <article className={`flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta ${destacada ? 'w-[86%] shrink-0 snap-start sm:w-[46%] lg:w-auto' : ''}`}>
      <div className={`relative overflow-hidden ${destacada ? 'h-44 sm:h-48' : 'h-36'}`}>
        <img
          src={imagenDe(publicacion.imagen)}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <span className={`absolute left-3 top-3 max-w-[70%] truncate rounded-full px-3 py-1 text-xs font-semibold text-white ${categoria?.tono || 'bg-naranja'}`}>
          {categoria?.nombre}
        </span>
        <button
          type="button"
          className="absolute right-2 top-2 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-naranja shadow"
          aria-pressed={favorito}
          aria-label={favorito ? `Quitar ${publicacion.nombre} de favoritos` : `Guardar ${publicacion.nombre} en favoritos`}
          onClick={() => onFavorito(publicacion.id)}
        >
          <Icono id={favorito ? 'i-corazon-lleno' : 'i-corazon'} className="icono h-5 w-5" />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-bold leading-snug">
          <Link to={`/bolsa-de-trabajo/${publicacion.id}`} className="hover:text-naranja focus-visible:outline-naranja">
            {publicacion.nombre}
          </Link>
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-tinta/70">
          <Icono id="i-ubicacion" className="icono h-4 w-4 shrink-0" />
          <span>{publicacion.ubicacion || zona?.nombre}</span>
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-1.5 text-sm">
          <Estrellas valor={calificacion} />
          {publicacion.resenas > 0 ? (
            <span>
              <span className="font-semibold">{calificacion.toFixed(1)}</span>
              <span className="text-tinta/60"> ({publicacion.resenas})</span>
              <span className="sr-only">{`Calificación ${calificacion.toFixed(1)} de 5, ${publicacion.resenas} reseñas`}</span>
            </span>
          ) : (
            <span className="text-tinta/60">Sin reseñas aún</span>
          )}
        </p>
        {publicacion.estado && (
          <p className="mt-3">
            <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${TONOS[publicacion.tono] || TONOS.verde}`}>
              {publicacion.estado}
            </span>
          </p>
        )}
        <div className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
          <Link to={`/bolsa-de-trabajo/${publicacion.id}`} className="inline-flex min-h-11 items-center justify-center rounded-full border border-naranja/30 px-3 text-sm font-semibold text-naranja hover:bg-naranja-50">
            Ver detalles
          </Link>
          <a href={enlaceWhatsapp(publicacion)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-[#1f8f4e] px-3 text-sm font-semibold text-white hover:bg-[#187a42]">
            <Icono id="i-whatsapp" className="icono h-4 w-4" />WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
