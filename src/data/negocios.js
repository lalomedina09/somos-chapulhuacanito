import fonda from '../assets/img/secciones/fonda.svg';
import abarrotes from '../assets/img/secciones/abarrotes.svg';
import taller from '../assets/img/secciones/taller.svg';
import artesanias from '../assets/img/secciones/artesanias.svg';
import posada from '../assets/img/secciones/posada.svg';
import tortilleria from '../assets/img/secciones/tortilleria.svg';

export const negocioCategories = [
  { id: 'todos', label: 'Todos' },
  { id: 'comida', label: 'Comida' },
  { id: 'abarrotes', label: 'Abarrotes' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'artesanias', label: 'Artesanías' },
  { id: 'hospedaje', label: 'Hospedaje' },
];

const whatsapp = 'https://wa.me/5214810000000';

export const negocios = [
  {
    id: 'cocina-dona-chela',
    title: 'Cocina de doña Chela',
    summary: 'Comida corrida, zacahuil los sábados y café de olla en la plaza.',
    categoryId: 'comida',
    category: 'Comida',
    badge: 'Comida',
    badgeClass: 'bg-naranja',
    image: fonda,
    alt: 'Ilustración de una fonda con toldo naranja, cazuelas y mesa',
    barrio: 'Centro',
    horario: 'Lun a sáb, 8:00 a 16:00',
    whatsapp,
    body: [
      'Doña Chela es un personaje de ejemplo. Su cocina da a la plaza y el menú del día se escribe en un pizarrón.',
      'El sábado hay zacahuil por encargo. El WhatsApp 481 000 0000 no existe: es un enlace de muestra.',
    ],
    facts: [
      { label: 'Horario', value: 'Lun a sáb, 8:00 a 16:00' },
      { label: 'Ubicación', value: 'Plaza, Centro' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
  {
    id: 'abarrotes-el-sabino',
    title: 'Abarrotes El Sabino',
    summary: 'Despensa, recargas y el periódico que llega de Tamazunchale.',
    categoryId: 'abarrotes',
    category: 'Abarrotes',
    badge: 'Abarrotes',
    badgeClass: 'bg-verde',
    image: abarrotes,
    alt: 'Ilustración de un abarrotes con anaqueles de frascos y costales',
    barrio: 'San José',
    horario: 'Todos los días, 7:00 a 21:00',
    whatsapp,
    body: [
      'Tienda de ejemplo en la esquina de San José. Fían hasta el domingo a quien ya es de la calle.',
      'También dejan ahí los avisos impresos cuando se va la luz y no se puede ver esta página.',
    ],
    facts: [
      { label: 'Horario', value: 'Todos los días, 7:00 a 21:00' },
      { label: 'Ubicación', value: 'Esquina principal, San José' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
  {
    id: 'taller-don-fidel',
    title: 'Taller de don Fidel',
    summary: 'Soldadura, rejas y compostura de bombas de agua.',
    categoryId: 'servicios',
    category: 'Servicios',
    badge: 'Servicios',
    badgeClass: 'bg-[#1C7ED6]',
    image: taller,
    alt: 'Ilustración de un taller con herramientas y una bomba',
    barrio: 'La Loma',
    horario: 'Lun a vie, 9:00 a 18:00',
    whatsapp,
    body: [
      'Don Fidel, de ejemplo, arregla la bomba antes de que se acabe el tinaco. No hace motos ni carros grandes.',
      'Si llevas la pieza, el trabajo sale el mismo día. El número de contacto es ficticio.',
    ],
    facts: [
      { label: 'Horario', value: 'Lun a vie, 9:00 a 18:00' },
      { label: 'Ubicación', value: 'Bajada de La Loma' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
  {
    id: 'artesanias-la-flor',
    title: 'Artesanías La Flor',
    summary: 'Máscaras de madera, servilletas bordadas y cempasúchil de papel.',
    categoryId: 'artesanias',
    category: 'Artesanías',
    badge: 'Artesanías',
    badgeClass: 'bg-[#C2255C]',
    image: artesanias,
    alt: 'Ilustración de máscaras, textiles y cempasúchil en un puesto',
    barrio: 'Arroyo Verde',
    horario: 'Mar a dom, 10:00 a 17:00',
    whatsapp,
    body: [
      'Taller familiar de ejemplo. En octubre apartan máscaras para la comparsa y el resto del año bordan por encargo.',
      'No envían paquetería. Quien viene de fuera las recoge en la posada.',
    ],
    facts: [
      { label: 'Horario', value: 'Mar a dom, 10:00 a 17:00' },
      { label: 'Ubicación', value: 'Arroyo Verde, junto al puente' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
  {
    id: 'posada-rio-claro',
    title: 'Posada Río Claro',
    summary: 'Cuatro cuartos, desayuno y hamaca en el corredor. A dos cuadras del sabino.',
    categoryId: 'hospedaje',
    category: 'Hospedaje',
    badge: 'Hospedaje',
    badgeClass: 'bg-[#9C36B5]',
    image: posada,
    alt: 'Ilustración de una posada con hamaca, palmas y techo de teja',
    barrio: 'El Sabinal',
    horario: 'Recepción 8:00 a 20:00',
    whatsapp,
    body: [
      'La posada es inventada para el directorio. Los cuartos tienen ventilador y el baño está al fondo del corredor.',
      'En Xantolo se llena con familia que regresa. Conviene apartar con el enlace de ejemplo.',
    ],
    facts: [
      { label: 'Horario', value: 'Recepción 8:00 a 20:00' },
      { label: 'Ubicación', value: 'El Sabinal' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
  {
    id: 'tortilleria-las-flores',
    title: 'Tortillería Las Flores',
    summary: 'Masa desde las 6:00. Los domingos solo hasta mediodía.',
    categoryId: 'comida',
    category: 'Comida',
    badge: 'Comida',
    badgeClass: 'bg-naranja',
    image: tortilleria,
    alt: 'Ilustración de una tortillería con tortillas apiladas y un comal',
    barrio: 'Las Flores',
    horario: 'Lun a sáb 6:00 a 14:00; dom 6:00 a 12:00',
    whatsapp,
    body: [
      'Tortillería de ejemplo. El kilo se anota en la libreta de quien pasa todos los días.',
      'Si hay corte de luz, muelen de madrugada y avisan en el chat del barrio, que aquí no está conectado.',
    ],
    facts: [
      { label: 'Horario', value: 'Desde las 6:00' },
      { label: 'Ubicación', value: 'Callejón de Las Flores' },
      { label: 'WhatsApp', value: '481 000 0000 (ejemplo)' },
    ],
  },
];
