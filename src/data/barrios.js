import centro from '../assets/img/secciones/barrio-centro.svg';
import sanJose from '../assets/img/secciones/barrio-san-jose.svg';
import loma from '../assets/img/secciones/barrio-loma.svg';
import arroyo from '../assets/img/secciones/barrio-arroyo.svg';
import sabinal from '../assets/img/secciones/barrio-sabinal.svg';
import flores from '../assets/img/secciones/barrio-flores.svg';

export const barrios = [
  {
    id: 'centro',
    image: centro,
    alt: 'Ilustración de la plaza del Centro con casas y papel picado',
    name: 'Centro',
    summary: 'La plaza, la delegación y las tiendas de todos los días. Aquí empieza casi cualquier recado.',
  },
  {
    id: 'san-jose',
    image: sanJose,
    alt: 'Ilustración de casas y un tinaco en San José',
    name: 'San José',
    summary: 'Barrio de casas con solar, cisternas y la red de agua que más se menciona en los avisos.',
  },
  {
    id: 'la-loma',
    image: loma,
    alt: 'Ilustración de una casa en la subida de La Loma',
    name: 'La Loma',
    summary: 'Subida corta con vista al valle. En la tarde se oye el colectivo que baja al centro.',
  },
  {
    id: 'arroyo-verde',
    image: arroyo,
    alt: 'Ilustración del arroyo entre plátanos y palmas',
    name: 'Arroyo Verde',
    summary: 'Junto al arroyo. En temporada de lluvia el camino de terracería pide más cuidado.',
  },
  {
    id: 'el-sabinal',
    image: sabinal,
    alt: 'Ilustración de árboles grandes y una casa en El Sabinal',
    name: 'El Sabinal',
    summary: 'Huertos, un sabino viejo y la posada que recibe a quien viene de Tamazunchale.',
  },
  {
    id: 'las-flores',
    image: flores,
    alt: 'Ilustración de cempasúchil frente a una casa en Las Flores',
    name: 'Las Flores',
    summary: 'Callejón de cempasúchil y una tortillería que abre antes de que salga el sol.',
  },
];
