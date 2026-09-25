import bache from '../assets/img/secciones/bache.svg';
import fuga from '../assets/img/secciones/fuga.svg';
import alumbrado from '../assets/img/secciones/alumbrado.svg';
import basura from '../assets/img/secciones/basura.svg';

export const reporteImagenes = {
  bache,
  agua: fuga,
  luz: alumbrado,
  basura,
  otro: bache,
};

export const tiposReporte = [
  { id: 'bache', label: 'Bache o camino' },
  { id: 'agua', label: 'Agua o fuga' },
  { id: 'luz', label: 'Alumbrado' },
  { id: 'basura', label: 'Basura' },
  { id: 'otro', label: 'Otro' },
];

export const reportesIniciales = [
  {
    id: 'rp-1821',
    image: bache,
    alt: 'Ilustración de un bache en el camino',
    folio: 'RP-2026-1821',
    tipo: 'Bache o camino',
    titulo: 'Bache frente a la cancha',
    barrio: 'Centro',
    estado: 'En proceso',
    estadoClass: 'bg-naranja',
    fecha: '14 de oct. 2026',
  },
  {
    id: 'rp-1828',
    image: fuga,
    alt: 'Ilustración de una fuga de agua en una toma',
    folio: 'RP-2026-1828',
    tipo: 'Agua o fuga',
    titulo: 'Goteo en la toma de la esquina',
    barrio: 'San José',
    estado: 'Recibido',
    estadoClass: 'bg-[#1C7ED6]',
    fecha: '15 de oct. 2026',
  },
  {
    id: 'rp-1790',
    image: alumbrado,
    alt: 'Ilustración de una luminaria frente a una casa',
    folio: 'RP-2026-1790',
    tipo: 'Alumbrado',
    titulo: 'Luminaria apagada del callejón',
    barrio: 'Las Flores',
    estado: 'Resuelto',
    estadoClass: 'bg-verde',
    fecha: '2 de oct. 2026',
  },
  {
    id: 'rp-1804',
    image: basura,
    alt: 'Ilustración de un contenedor y basura junto al camino',
    folio: 'RP-2026-1804',
    tipo: 'Basura',
    titulo: 'Basura acumulada junto al puente',
    barrio: 'Arroyo Verde',
    estado: 'En proceso',
    estadoClass: 'bg-naranja',
    fecha: '9 de oct. 2026',
  },
];
