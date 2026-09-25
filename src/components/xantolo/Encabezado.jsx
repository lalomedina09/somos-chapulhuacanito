export default function Encabezado({ id, eyebrow, title, accion }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-naranja-700">{eyebrow}</p>
        ) : null}
        <h2
          id={id}
          tabIndex={-1}
          className="mt-1 text-3xl font-extrabold tracking-tight text-tinta outline-none sm:text-4xl"
        >
          {title}
        </h2>
      </div>
      {accion}
    </div>
  );
}
