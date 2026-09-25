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
                ? 'rounded-full bg-naranja px-4 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja'
                : 'rounded-full bg-white px-4 py-1.5 text-sm font-medium text-tinta shadow-sm ring-1 ring-crema-200 transition hover:text-naranja focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja'
            }
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
