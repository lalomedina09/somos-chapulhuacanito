export default function Photo({ src, alt, className = 'h-full w-full object-cover' }) {
  return (
    <>
      {/* REEMPLAZAR con foto real de la comunidad */}
      <img src={src} alt={alt} className={className} loading="lazy" />
    </>
  );
}
