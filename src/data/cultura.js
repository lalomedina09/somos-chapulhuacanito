import hero from '../assets/img/xantolo/xantolo-hero.webp';
import historiaFoto from '../assets/img/xantolo/xantolo-historia.webp';
import catrinaTips from '../assets/img/xantolo/tips-catrina.webp';
import altarFoto from '../assets/img/xantolo/evento-altares.webp';
import g1 from '../assets/img/xantolo/galeria-1.webp';
import g2 from '../assets/img/xantolo/galeria-2.webp';
import g3 from '../assets/img/xantolo/galeria-3.webp';
import g4 from '../assets/img/xantolo/galeria-4.webp';
import g5 from '../assets/img/xantolo/galeria-5.webp';
import g6 from '../assets/img/xantolo/galeria-6.webp';

export const heroXantolo = {
  src: hero,
  alt: 'Mujer con maquillaje de catrina, sombrero de cempasúchil y velas encendidas entre flores de naranja',
};

export const atajosXantolo = [
  { id: 'historia', label: 'Historia', icono: 'i-libro', color: '#f26b1d', seccion: 'historia' },
  { id: 'eventos', label: 'Eventos', icono: 'i-calendario', color: '#2f9e44', seccion: 'eventos' },
  { id: 'galeria', label: 'Galería', icono: 'i-imagen', color: '#d6336c', seccion: 'galeria' },
  { id: 'personajes', label: 'Personajes', icono: 'i-mascara-trazo', color: '#f59f00', seccion: 'personajes' },
  { id: 'altares', label: 'Altares', icono: 'i-vela', color: '#37b24d', seccion: 'altares' },
  { id: 'comparte', label: 'Comparte', icono: 'i-compartir', color: '#7950f2' },
  { id: 'mapa', label: 'Mapa del Xantolo', icono: 'i-ubicacion', color: '#1c7ed6', seccion: 'mapa' },
];

export const historiaXantolo = {
  src: historiaFoto,
  alt: 'Collage del Xantolo: portada de la celebración, iglesia entre montañas, comparsa con máscaras y ofrenda con velas',
  lead: 'El Xantolo es una de las tradiciones más importantes de la Huasteca Potosina. En Chapulhuacanito, esta celebración representa la unión de nuestras raíces, nuestras costumbres y la memoria de nuestros seres queridos.',
  mas: [
    'La palabra llega del latín sanctorum, el día de los santos. En la Huasteca se vive en casa y en la calle: arco de cempasúchil, copal, pan y los nombres dichos en voz alta.',
    'Del 31 de octubre al 2 de noviembre salen las comparsas. Los huehues —los viejos, con máscara— bailan al son del huapango. En la plaza se prende la ofrenda de todos.',
    'Este relato es una guía de la tradición para el prototipo de Chapulhuacanito. No sustituye lo que cada familia cuenta en su mesa ni un programa oficial.',
  ],
};

export const eventosXantoloIds = [
  'desfile-xantolo',
  'concurso-altares',
  'muestra-musica-huasteca',
  'danza-huehues',
];

export const galeriaXantolo = [
  {
    id: 'catrina-corona',
    titulo: 'Catrina con corona de cempasúchil',
    alt: 'Mujer con maquillaje de catrina, corona de cempasúchil, medias velas y listones de colores',
    src: g1,
    posicion: 'object-[center_25%]',
  },
  {
    id: 'pareja-altar',
    titulo: 'Pareja frente al altar',
    alt: 'Pareja con maquillaje de catrina y trajes bordados frente a un altar con velas y cempasúchil',
    src: g2,
    posicion: 'object-center',
  },
  {
    id: 'danzantes',
    titulo: 'Danzantes en el escenario',
    alt: 'Danzantes enmascarados con capas moradas en un escenario adornado con papel picado',
    src: g3,
    posicion: 'object-center',
  },
  {
    id: 'mascara-iglesia',
    titulo: 'Máscara frente a la iglesia',
    alt: 'Persona con máscara tradicional y sombrero de palma frente a la iglesia del pueblo',
    src: g4,
    posicion: 'object-[center_30%]',
  },
  {
    id: 'ofrenda-pan',
    titulo: 'Ofrenda de pan y flor',
    alt: 'Manos con pulseras de cempasúchil sosteniendo una ofrenda de pan dulce',
    src: g5,
    posicion: 'object-center',
  },
  {
    id: 'trio-huasteco',
    titulo: 'Trío huasteco',
    alt: 'Trío huasteco tocando jarana, violín y huapanguera bajo el papel picado',
    src: g6,
    posicion: 'object-center',
  },
];

export const personajesXantolo = [
  {
    id: 'catrina',
    nombre: 'La catrina',
    texto: 'El rostro florido que recuerda con alegría, no con miedo.',
    src: g1,
    alt: 'Retrato de catrina con corona de cempasúchil y listones',
    posicion: 'object-[center_20%]',
  },
  {
    id: 'huehues',
    nombre: 'Los huehues',
    texto: 'Danzantes enmascarados. En la Huasteca, el viejo sale a bailar.',
    src: g3,
    alt: 'Danzantes con máscara y capa en la fiesta del Xantolo',
    posicion: 'object-[center_35%]',
  },
  {
    id: 'musicos',
    nombre: 'Músicos de huapango',
    texto: 'Violín, jarana y huapanguera le ponen voz a la plaza.',
    src: g6,
    alt: 'Músicos de huapango con instrumentos de cuerda',
    posicion: 'object-center',
  },
  {
    id: 'ofrenda',
    nombre: 'Quienes ofrendan',
    texto: 'Manos de la casa: flor, pan, copal y el nombre en voz alta.',
    src: g5,
    alt: 'Manos sosteniendo pan de ofrenda con pulseras de cempasúchil',
    posicion: 'object-center',
  },
];

export const altaresXantolo = {
  src: altarFoto,
  alt: 'Altar de Xantolo con cempasúchil, velas, pan y retratos, frente a una iglesia iluminada',
  texto:
    'En las casas y en la plaza se tiende el arco de cempasúchil, el pan, la fruta y el retrato. El altar es la mesa donde la familia se vuelve a sentar con quien ya no está.',
};

export const tipsXantolo = {
  src: catrinaTips,
  alt: 'Catrina con sombrero de cempasúchil y vestido bordado, figura de la tradición del Xantolo',
  items: [
    {
      id: 'tradiciones',
      icono: 'i-pergamino',
      color: '#1f6b3a',
      titulo: 'Respeta nuestras tradiciones',
      texto: 'El Xantolo es parte de nuestra identidad.',
    },
    {
      id: 'fotos',
      icono: 'i-camara',
      color: '#f26b1d',
      titulo: 'Toma fotografías con respeto',
      texto: 'Pregunta antes de fotografiar a los participantes.',
    },
    {
      id: 'comunidad',
      icono: 'i-corazon',
      color: '#d6336c',
      titulo: 'Apoya a la comunidad',
      texto: 'Consume productos locales y artesanías.',
    },
    {
      id: 'participa',
      icono: 'i-gente',
      color: '#7950f2',
      titulo: 'Participa en las actividades',
      texto: 'Vive la experiencia y sé parte de nuestra cultura.',
    },
  ],
};

export const leyendaXantolo = [
  { id: 'eventos', label: 'Eventos principales', color: '#f26b1d' },
  { id: 'altares', label: 'Altares', color: '#9c36b5' },
  { id: 'musica', label: 'Música y danza', color: '#2f9e44' },
  { id: 'puestos', label: 'Puestos y artesanías', color: '#f59f00' },
  { id: 'estacionamiento', label: 'Estacionamiento', color: '#1c7ed6' },
  { id: 'servicios', label: 'Servicios / Emergencias', color: '#e03131' },
];

export const pinesXantolo = [
  {
    id: 'plaza',
    tipo: 'eventos',
    x: 51,
    y: 62,
    titulo: 'Plaza principal',
    texto: 'Desfile, concurso de altares y el cierre de la fiesta.',
  },
  {
    id: 'iglesia',
    tipo: 'altares',
    x: 48,
    y: 46,
    titulo: 'Atrio de la iglesia',
    texto: 'Altares comunitarios y arco de cempasúchil.',
  },
  {
    id: 'casas',
    tipo: 'altares',
    x: 22,
    y: 70,
    titulo: 'Altares de las casas',
    texto: 'Cada familia prende su mesa y dice los nombres.',
  },
  {
    id: 'kiosco',
    tipo: 'musica',
    x: 62,
    y: 64,
    titulo: 'Kiosco',
    texto: 'Huapango y danza de los huehues.',
  },
  {
    id: 'puestos',
    tipo: 'puestos',
    x: 78,
    y: 54,
    titulo: 'Puestos y artesanías',
    texto: 'Flor, pan, café y piezas hechas en la comunidad.',
  },
  {
    id: 'estacionamiento',
    tipo: 'estacionamiento',
    x: 82,
    y: 82,
    titulo: 'Estacionamiento',
    texto: 'Deja el carro aquí y camina hacia la plaza.',
  },
  {
    id: 'servicios',
    tipo: 'servicios',
    x: 18,
    y: 40,
    titulo: 'Servicios y emergencias',
    texto: 'Punto de apoyo y primeros auxilios. Dato de ejemplo.',
  },
];
