import papel from '../../assets/img/secciones/papel-picado.svg';

export default function TiraPapel({ className = '' }) {
  return (
    <div
      className={`h-6 w-full bg-[length:136px_24px] bg-repeat-x ${className}`}
      style={{ backgroundImage: `url("${papel}")` }}
      aria-hidden="true"
    />
  );
}
