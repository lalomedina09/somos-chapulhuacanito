export default function Badge({ children, className = 'bg-naranja' }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold text-white ${className}`}>
      {children}
    </span>
  );
}
