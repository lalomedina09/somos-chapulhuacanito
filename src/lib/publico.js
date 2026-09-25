export function publico(ruta) {
  return `${import.meta.env.BASE_URL}${String(ruta).replace(/^\//, '')}`
}
