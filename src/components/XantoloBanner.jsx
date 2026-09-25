import { Link } from 'react-router-dom';
import banner from '../assets/img/xantolo-banner.svg';
import Icon from './Icon';

export default function XantoloBanner() {
  return (
    <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:mt-14 lg:px-8" aria-labelledby="titulo-xantolo">
      <div className="relative isolate overflow-hidden rounded-3xl bg-[#3B1030] shadow-suave">
        {/* REEMPLAZAR con foto real de la comunidad (celebración de Xantolo) */}
        <img
          src={banner}
          alt="Ilustración festiva de Xantolo con papel picado, máscaras tradicionales, velas y flores de cempasúchil"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_center]"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2A0B20]/95 via-[#2A0B20]/70 to-transparent sm:via-[#2A0B20]/55" />
        <div className="flex min-h-[240px] flex-col justify-center px-6 py-10 sm:min-h-[260px] sm:px-10 lg:px-14">
          <p className="font-mano text-2xl font-bold text-[#FFC078]">Del 30 de octubre al 2 de noviembre</p>
          <h2 id="titulo-xantolo" className="mt-1 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Xantolo <span className="block sm:inline">Chapulhuacanito</span>
          </h2>
          <p className="mt-2 text-lg text-white/90 sm:text-xl">Tradición que nos une</p>
          <Link
            to="/cultura"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-naranja-600"
          >
            Conoce más <Icon id="i-flecha" className="icono h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
