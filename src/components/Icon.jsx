export default function Icon({ id, className = 'icono' }) {
  return (
    <svg className={className} aria-hidden="true" strokeWidth="2">
      <use href={`#${id}`} />
    </svg>
  );
}
