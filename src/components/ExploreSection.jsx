import { Link } from 'react-router-dom';
import { exploreCards } from '../data/explore';
import ExploreCard from './ExploreCard';
import Icon from './Icon';

export default function ExploreSection() {
  return (
    <section id="explora" className="mx-auto mt-10 max-w-7xl scroll-mt-24 px-4 sm:px-6 lg:mt-14 lg:px-8" aria-labelledby="titulo-explora">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div>
          <h2 id="titulo-explora" className="text-xl font-bold tracking-tight sm:text-3xl">
            Explora Chapulhuacanito
          </h2>
          <p className="mt-1 text-tinta/70">Conoce, participa y vive nuestras tradiciones.</p>
        </div>
        <Link to="/comunidad" className="inline-flex min-h-11 items-center gap-1 rounded-lg text-sm font-semibold text-naranja-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
          Ver todas las secciones <Icon id="i-chevron" className="icono h-4 w-4" />
        </Link>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-5">
        {exploreCards.map((card) => (
          <ExploreCard key={card.id} card={card} />
        ))}
      </ul>
    </section>
  );
}
