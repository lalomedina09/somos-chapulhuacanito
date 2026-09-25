import xantoloMascara from '../assets/img/xantolo-mascara.svg';
import xantoloAltar from '../assets/img/xantolo-altar.svg';
import xantoloBanner from '../assets/img/xantolo-banner.svg';
import cempasuchil from '../assets/img/cempasuchil.svg';

export const xantoloDias = [
  {
    id: 'recibimiento',
    day: '30 oct',
    title: 'Recibimiento',
    text: 'Se tiende el arco y se enciende la primera vela. La casa huele a flor y a pan.',
  },
  {
    id: 'comparsa',
    day: '31 oct',
    title: 'Comparsa',
    text: 'Las máscaras salen a la calle. El recorrido de ejemplo pasa por el Centro y San José.',
  },
  {
    id: 'ofrenda',
    day: '1 nov',
    title: 'Ofrenda',
    text: 'Se comparten los nombres y la comida. La plaza queda abierta todo el día.',
  },
  {
    id: 'despedida',
    day: '2 nov',
    title: 'Despedida',
    text: 'Se agradece, se apagan las velas y la flor que sirve regresa a las casas.',
  },
];

export const galeriaCultura = [
  {
    id: 'mascara',
    title: 'Máscaras de la comparsa',
    text: 'Madera, listón y una sonrisa que no es de nadie en particular. Pieza de ejemplo.',
    image: xantoloMascara,
    alt: 'Ilustración de una máscara de Xantolo',
    to: '/eventos/comparsa-xantolo',
  },
  {
    id: 'altar',
    title: 'Altar de la plaza',
    text: 'Arco de cempasúchil, velas y el retrato de quien la familia quiera recordar.',
    image: xantoloAltar,
    alt: 'Ilustración de un altar de Xantolo',
    to: '/eventos/ofrenda-comunitaria',
  },
  {
    id: 'arco',
    title: 'Arco de bienvenida',
    text: 'Se arma entre varias casas. En el prototipo es una ilustración, no una foto.',
    image: xantoloBanner,
    alt: 'Ilustración del arco floral de Xantolo',
    to: '/eventos/preparativos-xantolo',
  },
  {
    id: 'flor',
    title: 'Cempasúchil del huerto',
    text: 'En Las Flores todavía se corta del solar. El ramo del dibujo espera una foto real.',
    image: cempasuchil,
    alt: 'Ilustración de cempasúchil',
    to: '/eventos/despedida-xantolo',
  },
];

export const otrasTradiciones = [
  {
    title: 'Huapango en la plaza',
    text: 'Los domingos de feria, de ejemplo, suena un trío bajo el kiosco. No hay cartelera real.',
  },
  {
    title: 'Zacahuil de encargo',
    text: 'Se pide con dos días. La cocina de doña Chela lo anota en el pizarrón.',
    to: '/negocios/cocina-dona-chela',
  },
  {
    title: 'Faena y tequio',
    text: 'El camino y la cancha se mantienen entre barrios. El aviso sale en la agenda.',
    to: '/eventos/faena-camino',
  },
];
