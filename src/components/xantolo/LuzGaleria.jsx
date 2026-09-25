import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import Icon from '../Icon';
import { anillo } from './estilos';

export default function LuzGaleria({ fotos, indice, alCerrar, alMover }) {
  const tituloId = useId();
  const dialogoRef = useRef(null);
  const cerrarRef = useRef(null);
  const toque = useRef(null);
  const indiceRef = useRef(indice);
  const cerrarRefFn = useRef(alCerrar);
  const moverRef = useRef(alMover);
  indiceRef.current = indice;
  cerrarRefFn.current = alCerrar;
  moverRef.current = alMover;

  const foto = fotos[indice];

  useEffect(() => {
    const previo = document.activeElement;
    cerrarRef.current?.focus();
    const root = document.documentElement;
    const overflow = root.style.overflow;
    root.style.overflow = 'hidden';

    function tecla(event) {
      const total = fotos.length;
      const actual = indiceRef.current;
      if (event.key === 'Escape') {
        event.preventDefault();
        cerrarRefFn.current();
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moverRef.current((actual + 1) % total);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moverRef.current((actual - 1 + total) % total);
        return;
      }
      if (event.key !== 'Tab' || !dialogoRef.current) return;
      const items = [...dialogoRef.current.querySelectorAll('button')];
      if (items.length === 0) return;
      const primero = items[0];
      const ultimo = items[items.length - 1];
      if (event.shiftKey && document.activeElement === primero) {
        event.preventDefault();
        ultimo.focus();
      } else if (!event.shiftKey && document.activeElement === ultimo) {
        event.preventDefault();
        primero.focus();
      }
    }

    document.addEventListener('keydown', tecla);
    return () => {
      document.removeEventListener('keydown', tecla);
      root.style.overflow = overflow;
      if (previo instanceof HTMLElement) previo.focus();
    };
  }, [fotos.length]);

  if (!foto) return null;

  function anterior() {
    alMover((indice - 1 + fotos.length) % fotos.length);
  }

  function siguiente() {
    alMover((indice + 1) % fotos.length);
  }

  return createPortal(
    <div
      ref={dialogoRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={tituloId}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-3 sm:p-6"
      onClick={(event) => {
        if (event.target === event.currentTarget) alCerrar();
      }}
    >
      <div className="relative w-full max-w-5xl">
        <div className="mb-3 flex items-center justify-between gap-3 text-white">
          <p className="text-sm font-medium">
            {indice + 1} de {fotos.length}
          </p>
          <button
            ref={cerrarRef}
            type="button"
            onClick={alCerrar}
            className={`grid h-11 w-11 place-items-center rounded-full bg-white text-tinta ${anillo}`}
            aria-label="Cerrar galería"
          >
            <Icon id="i-cerrar" className="icono h-5 w-5" />
          </button>
        </div>
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={anterior}
            className={`grid h-11 w-11 place-items-center rounded-full bg-white text-tinta shadow-tarjeta sm:h-12 sm:w-12 ${anillo}`}
            aria-label="Foto anterior"
          >
            <Icon id="i-chevron" className="icono h-5 w-5 rotate-180" />
          </button>
          <figure
            onTouchStart={(event) => {
              toque.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (toque.current == null) return;
              const dx = (event.changedTouches[0]?.clientX ?? toque.current) - toque.current;
              toque.current = null;
              if (Math.abs(dx) < 48) return;
              if (dx < 0) siguiente();
              else anterior();
            }}
          >
            <img
              src={foto.src}
              alt={foto.alt}
              width="1280"
              height="720"
              className="max-h-[min(70vh,720px)] w-full rounded-2xl bg-black object-contain"
            />
            <figcaption id={tituloId} className="mt-3 text-center text-base font-medium text-white">
              {foto.titulo}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={siguiente}
            className={`grid h-11 w-11 place-items-center rounded-full bg-white text-tinta shadow-tarjeta sm:h-12 sm:w-12 ${anillo}`}
            aria-label="Foto siguiente"
          >
            <Icon id="i-chevron" className="icono h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-white/75">Flechas para cambiar · Esc para cerrar</p>
        <p className="sr-only" aria-live="polite">
          {foto.titulo}. Fotografía {indice + 1} de {fotos.length}.
        </p>
      </div>
    </div>,
    document.body,
  );
}
