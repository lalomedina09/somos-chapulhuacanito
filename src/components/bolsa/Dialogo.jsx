import { useEffect, useRef } from 'react';

const foco = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Dialogo({ abierto, onCerrar, tituloId, children, variante = 'drawer' }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!abierto) return undefined;
    const nodo = ref.current;
    const anterior = document.activeElement;
    const lista = () => (nodo ? [...nodo.querySelectorAll(foco)] : []);
    const timer = window.setTimeout(() => {
      const preferido = nodo?.querySelector('[data-autofocus]');
      (preferido || lista()[0])?.focus();
    }, 20);

    function onKey(evento) {
      if (evento.key === 'Escape') {
        evento.preventDefault();
        onCerrar();
        return;
      }
      if (evento.key !== 'Tab') return;
      const items = lista();
      if (!items.length) return;
      const primero = items[0];
      const ultimo = items[items.length - 1];
      if (evento.shiftKey && document.activeElement === primero) {
        evento.preventDefault();
        ultimo.focus();
      } else if (!evento.shiftKey && document.activeElement === ultimo) {
        evento.preventDefault();
        primero.focus();
      }
    }

    const root = document.documentElement;
    const previo = root.style.overflow;
    root.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('keydown', onKey);
      root.style.overflow = previo;
      if (anterior instanceof HTMLElement) anterior.focus();
    };
  }, [abierto, onCerrar]);

  if (!abierto) return null;

  const esModal = variante === 'modal';

  return (
    <div className={`fixed inset-0 z-[70] flex ${esModal ? 'items-end justify-center sm:items-center sm:p-4' : 'justify-end'}`}>
      <button type="button" className="absolute inset-0 bg-tinta/55" aria-label="Cerrar ventana" onClick={onCerrar} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className={
          esModal
            ? 'relative max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-crema p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-suave sm:rounded-3xl sm:p-6'
            : 'relative h-full max-h-[100dvh] w-full max-w-md overflow-y-auto bg-crema pb-[env(safe-area-inset-bottom)] shadow-suave'
        }
      >
        {children}
      </div>
    </div>
  );
}
