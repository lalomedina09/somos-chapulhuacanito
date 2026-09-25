import comunidad from '../assets/img/comunidad.svg';
import negocios from '../assets/img/negocios.svg';
import transporte from '../assets/img/transporte.svg';
import turismo from '../assets/img/turismo-cascada.svg';
import xantolo from '../assets/img/xantolo-mascara.svg';
import mapa from '../assets/img/mapa.svg';
import reporta from '../assets/img/reporta.svg';
import informado from '../assets/img/informado.svg';

export const exploreCards = [
  {
    id: 'comunidad',
    title: 'Conoce nuestra comunidad',
    to: '/comunidad',
    image: comunidad,
    alt: 'Ilustración de casas con techos de teja entre cerros y palmeras',
  },
  {
    id: 'negocios',
    title: 'Directorio de negocios locales',
    to: '/negocios',
    image: negocios,
    alt: 'Ilustración de una calle con tiendas de colores, toldos y papel picado',
  },
  {
    id: 'transporte',
    title: 'Rutas y transporte',
    to: '/transporte',
    image: transporte,
    alt: 'Ilustración de una camioneta de pasajeros en una carretera entre montañas',
  },
  {
    id: 'turismo',
    title: 'Atractivos turísticos',
    to: '/turismo',
    image: turismo,
    alt: 'Ilustración de una cascada con poza turquesa rodeada de vegetación',
  },
  {
    id: 'xantolo',
    title: 'Vive el Xantolo',
    to: '/cultura',
    image: xantolo,
    alt: 'Ilustración de una máscara de Xantolo rodeada de flores de cempasúchil y velas',
  },
  {
    id: 'mapa',
    title: 'Mapa de la comunidad',
    to: '/mapa',
    image: mapa,
    alt: 'Ilustración de un mapa con calles, río y marcadores de ubicación',
  },
  {
    id: 'reporta',
    title: 'Reporta y participa',
    to: '/reportar',
    image: reporta,
    alt: 'Ilustración de una mano con un teléfono enviando un reporte ciudadano',
  },
  {
    id: 'informado',
    title: 'Mantente informado',
    to: '/noticias',
    image: informado,
    alt: 'Ilustración de un tablero comunitario con avisos y noticias',
  },
];
