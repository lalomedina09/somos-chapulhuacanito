import Icon from '../Icon';

export default function SearchBar({ id, value, onChange, placeholder, label = 'Buscar' }) {
  return (
    <div className="max-w-xl">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <div className="flex items-center rounded-full bg-white p-1.5 pl-5 shadow-tarjeta ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-naranja">
        <Icon id="i-buscar" className="icono h-5 w-5 shrink-0 text-tinta/50" />
        <input
          id={id}
          type="search"
          value={value}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className="w-full min-w-0 bg-transparent px-3 py-2.5 text-base text-tinta placeholder:text-tinta/50 focus:outline-none"
        />
      </div>
    </div>
  );
}
