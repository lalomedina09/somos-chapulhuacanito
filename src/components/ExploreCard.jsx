import { Link } from 'react-router-dom';
import Icon from './Icon';

function Photo({ card }) {
  const className = 'h-full w-full object-cover transition duration-500 group-hover:scale-105';

  if (card.id === 'comunidad') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  if (card.id === 'negocios') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad (negocios locales) */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  if (card.id === 'transporte') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad (transporte) */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  if (card.id === 'turismo') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad (atractivos turísticos) */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  if (card.id === 'xantolo') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad (Xantolo) */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  if (card.id === 'reporta') {
    return (
      <>
        {/* REEMPLAZAR con foto real de la comunidad (participación ciudadana) */}
        <img src={card.image} alt={card.alt} className={className} loading="lazy" />
      </>
    );
  }

  return <img src={card.image} alt={card.alt} className={className} loading="lazy" />;
}

export default function ExploreCard({ card }) {
  return (
    <li>
      <Link to={card.to} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-tarjeta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja">
        <Photo card={card} />
        <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
          <span className="text-[15px] font-semibold leading-tight text-white md:text-sm md:leading-5! lg:text-base lg:leading-6! xl:text-lg xl:leading-7!">
            {card.title}
          </span>
          <Icon id="i-flecha" className="icono hidden h-5 w-5 shrink-0 text-white/90 transition group-hover:translate-x-1 sm:block" />
        </span>
      </Link>
    </li>
  );
}
