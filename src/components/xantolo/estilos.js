export const anillo =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja';

export const anilloClaro =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export const seccionAncla = 'scroll-mt-24 outline-none lg:scroll-mt-28';

export const clipRasgado =
  'polygon(1% 5%, 5% 1%, 9% 4%, 14% 0%, 19% 4%, 24% 1%, 29% 5%, 34% 1%, 40% 4%, 45% 0%, 51% 4%, 56% 1%, 62% 5%, 67% 1%, 73% 4%, 78% 0%, 84% 4%, 89% 1%, 94% 5%, 99% 2%, 100% 8%, 98% 14%, 100% 21%, 98% 28%, 100% 35%, 99% 42%, 100% 50%, 98% 57%, 100% 64%, 98% 71%, 100% 78%, 99% 85%, 100% 93%, 97% 99%, 91% 96%, 85% 100%, 79% 96%, 73% 100%, 67% 96%, 61% 100%, 55% 96%, 49% 100%, 43% 96%, 37% 100%, 31% 97%, 25% 100%, 19% 96%, 13% 100%, 7% 97%, 2% 100%, 0% 93%, 2% 86%, 0% 79%, 2% 72%, 0% 65%, 1% 58%, 0% 51%, 2% 44%, 0% 37%, 2% 30%, 0% 23%, 2% 16%, 0% 9%)';

export function prefiereMenosMovimiento() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function irASeccion(id) {
  const seccion = document.getElementById(id);
  if (!seccion) return;
  seccion.scrollIntoView({ behavior: prefiereMenosMovimiento() ? 'auto' : 'smooth', block: 'start' });
  const titulo = seccion.querySelector('h1, h2, h3');
  if (titulo instanceof HTMLElement) titulo.focus({ preventScroll: true });
  const url = new URL(window.location.href);
  url.hash = id;
  window.history.replaceState(null, '', url);
}
