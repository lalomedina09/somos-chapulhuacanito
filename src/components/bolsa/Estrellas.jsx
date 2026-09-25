import Icon from '../Icon';

export default function Estrellas({ valor = 0 }) {
  const llenas = Math.round(Number(valor) || 0);
  return (
    <span className="inline-flex text-[#e67700]" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((indice) => (
        <Icon
          key={indice}
          id={indice < llenas ? 'i-estrella-llena' : 'i-estrella'}
          className={indice < llenas ? 'h-4 w-4 fill-current stroke-current' : 'icono h-4 w-4'}
        />
      ))}
    </span>
  );
}
