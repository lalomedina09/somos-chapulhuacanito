import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import Photo from '../ui/Photo';

export default function MediaCard({ to, title, summary, badge, badgeClass, image, alt, meta }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-tarjeta transition hover:-translate-y-0.5">
      {image ? (
        <div className="relative h-40 overflow-hidden">
          <Photo
            src={image}
            alt={alt}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          {badge ? (
            <span className="absolute left-3 top-3">
              <Badge className={badgeClass}>{badge}</Badge>
            </span>
          ) : null}
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        {!image && badge ? <Badge className={badgeClass}>{badge}</Badge> : null}
        <h2 className={`${image || !badge ? '' : 'mt-3'} text-lg font-bold leading-snug`}>
          <Link
            to={to}
            className="rounded-sm after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
          >
            {title}
          </Link>
        </h2>
        {summary ? <p className="mt-2 text-sm leading-relaxed text-tinta/70">{summary}</p> : null}
        {meta ? <p className="mt-auto pt-4 text-sm font-medium text-tinta/70">{meta}</p> : null}
      </div>
    </article>
  );
}
