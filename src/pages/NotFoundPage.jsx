import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'Página no encontrada · Somos Chapulhuacanito';
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="font-mano text-3xl font-bold text-naranja sm:text-4xl">Esta ruta no existe</p>
      <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-tinta sm:text-5xl">Página no encontrada</h1>
      <p className="mt-4 max-w-xl text-lg text-tinta/75">
        No encontramos lo que buscas. El enlace pudo cambiar o la dirección está incompleta.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
      >
        Volver al inicio
        <Icon id="i-flecha" className="icono h-4 w-4" />
      </Link>
      <ul className="mt-8 flex flex-wrap gap-2">
        {[
          ['Comunidad', '/comunidad'],
          ['Avisos', '/avisos'],
          ['Negocios', '/negocios'],
          ['Mapa', '/mapa'],
          ['Reportar', '/reportar'],
        ].map(([label, to]) => (
          <li key={to}>
            <Link
              to={to}
              className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-semibold text-tinta shadow-sm ring-1 ring-crema-200 hover:text-naranja-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
