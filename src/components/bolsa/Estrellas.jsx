export default function Estrellas({ valor = 0, className = 'h-4 w-4' }) {
  const llenas = Math.round(Number(valor) || 0)
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`${className} ${i < llenas ? 'text-[#e67700]' : 'text-tinta/15'}`}>
          <path fill="currentColor" d="M10 1.6 12.2 6.8l5.7.5-4.3 3.7 1.3 5.5L10 13.9 5.1 16.5 6.4 11 2.1 7.3l5.7-.5z" />
        </svg>
      ))}
    </span>
  )
}
