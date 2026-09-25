export const fieldClass =
  'mt-1.5 w-full rounded-2xl border border-crema-200 bg-crema px-4 py-3 text-base text-tinta outline-none transition focus:border-naranja focus:ring-2 focus:ring-naranja/30';

export default function FormField({ id, label, hint, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-tinta">
        {label}
      </label>
      {hint ? <p className="mt-0.5 text-xs text-tinta/60">{hint}</p> : null}
      <div className={error ? '[&_input]:border-[#E03131] [&_select]:border-[#E03131] [&_textarea]:border-[#E03131]' : undefined}>
        {children}
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-sm font-medium text-[#E03131]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
