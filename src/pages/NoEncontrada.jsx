import { Link } from 'react-router'
import { useTitulo } from '../lib/useTitulo.js'

export default function NoEncontrada() {
  useTitulo('Página no encontrada · Somos Chapulhuacanito')
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="font-mano text-3xl text-naranja">Aquí no hay camino</p>
      <h1 className="mt-2 text-3xl font-extrabold">No encontramos esta página</h1>
      <p className="mt-3 text-tinta/70">El enlace puede estar incompleto. Puedes volver al inicio o revisar la bolsa de trabajo.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/" className="rounded-full bg-naranja px-5 py-3 font-semibold text-white hover:bg-naranja-600">Ir al inicio</Link>
        <Link to="/bolsa-de-trabajo" className="rounded-full bg-white px-5 py-3 font-semibold text-naranja ring-1 ring-naranja/30 hover:bg-naranja-50">Ver la bolsa</Link>
      </div>
    </section>
  )
}
