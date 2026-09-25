import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';

export default function SectionPage({ title, kicker, intro }) {
  useEffect(() => {
    document.title = `${title} · Somos Chapulhuacanito`;
  }, [title]);

  return (
    <>
      <section className="border-b border-crema-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="font-mano text-3xl font-bold text-naranja sm:text-4xl">{kicker}</p>
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-tinta sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-tinta/75">{intro}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-3xl bg-white p-6 shadow-tarjeta sm:p-10">
          <p className="max-w-2xl text-base leading-relaxed text-tinta/80">
            Esta pantalla es un prototipo navegable. El contenido completo de la sección se integrará en una siguiente etapa.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600"
          >
            Volver al inicio
            <Icon id="i-flecha" className="icono h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
