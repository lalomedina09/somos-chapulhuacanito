import { Link } from 'react-router-dom';
import Icon from './Icon';

function Arrow() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-naranja text-white" aria-hidden="true">
      <Icon id="i-flecha" className="icono h-4 w-4" />
    </span>
  );
}

function NewsPhoto({ item }) {
  const image = (
    <img
      src={item.image}
      alt={item.alt}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
  );

  if (item.id === 'xantolo') {
    return (
      <div className="relative h-36 overflow-hidden">
        {/* REEMPLAZAR con foto real de la comunidad (preparativos de Xantolo) */}
        {image}
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.badgeClass}`}>
          {item.badge}
        </span>
      </div>
    );
  }

  if (item.id === 'salud') {
    return (
      <div className="relative h-36 overflow-hidden">
        {/* REEMPLAZAR con foto real de la comunidad (Casa de Salud) */}
        {image}
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.badgeClass}`}>
          {item.badge}
        </span>
      </div>
    );
  }

  if (item.id === 'caminos') {
    return (
      <div className="relative h-36 overflow-hidden">
        {/* REEMPLAZAR con foto real de la comunidad (caminos) */}
        {image}
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.badgeClass}`}>
          {item.badge}
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-36 overflow-hidden">
      {image}
      <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.badgeClass}`}>
        {item.badge}
      </span>
    </div>
  );
}

export default function NewsCard({ item }) {
  if (item.variant === 'aviso') {
    return (
      <article className="relative flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-naranja-100 bg-gradient-to-br from-naranja-50 to-white p-5 shadow-tarjeta sm:w-[46%] lg:w-auto">
        <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-white ${item.badgeClass}`}>
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          {item.badge}
        </span>
        <div className="mt-4 flex items-start gap-4">
          <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl ${item.iconWrapClass}`}>
            <Icon id={item.icon} className={item.iconClass} />
          </span>
          <h3 className="line-clamp-3 text-lg font-bold leading-snug">
            <Link to={item.to} className="rounded-sm after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
              {item.title}
            </Link>
          </h3>
        </div>
        <p className="mt-3 line-clamp-3 text-sm text-tinta/70">{item.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-tinta/70">
            <Icon id="i-fecha" className="icono h-4 w-4" />
            <time dateTime={item.dateTime}>{item.date}</time>
          </span>
          <Arrow />
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta sm:w-[46%] lg:w-auto">
      <NewsPhoto item={item} />
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 font-bold leading-snug">
          <Link to={item.to} className="rounded-sm after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
            {item.title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-3 text-sm text-tinta/70">{item.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-tinta/70">
            <Icon id="i-fecha" className="icono h-4 w-4" />
            <time dateTime={item.dateTime}>{item.date}</time>
          </span>
          <Arrow />
        </div>
      </div>
    </article>
  );
}
