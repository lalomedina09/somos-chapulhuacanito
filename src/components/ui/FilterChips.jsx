export default function FilterChips({ label, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map((option) => {
        const selected = value === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(option.id)}
            className={
              selected
                ? 'inline-flex min-h-11 items-center rounded-full bg-naranja px-4 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja'
                : 'inline-flex min-h-11 items-center rounded-full bg-white px-4 text-sm font-medium text-tinta shadow-sm ring-1 ring-crema-200 transition hover:text-naranja-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja'
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
