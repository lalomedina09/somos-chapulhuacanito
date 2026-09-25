import { Link } from 'react-router-dom';
import { newsItems } from '../data/news';
import Icon from './Icon';
import NewsCard from './NewsCard';

export default function NewsSection() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:mt-16 lg:px-8" aria-labelledby="titulo-hoy">
      <div className="mb-5 flex items-end justify-between gap-4">
        <h2 id="titulo-hoy" className="text-xl font-bold tracking-tight sm:text-3xl">
          Lo más importante hoy
        </h2>
        <Link to="/avisos" className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-naranja hover:text-naranja-700">
          Ver todos <Icon id="i-chevron" className="icono h-4 w-4" />
        </Link>
      </div>

      <div className="sin-scroll -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-0">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
