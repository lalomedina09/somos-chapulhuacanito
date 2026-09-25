export default function EmptyState({ title, text, onClear }) {
  return (
    <div className="rounded-3xl border border-dashed border-crema-200 bg-white px-6 py-12 text-center shadow-tarjeta">
      <p className="font-mano text-3xl font-bold text-naranja">Nada por aquí</p>
      <h2 className="mt-1 text-xl font-bold text-tinta">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm text-tinta/70">{text}</p>
      {onClear ? (
        <button
          type="button"
          onClick={onClear}
          className="mt-6 inline-flex rounded-full bg-naranja px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja"
        >
          Limpiar búsqueda
        </button>
      ) : null}
    </div>
  );
}
