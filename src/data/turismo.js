import cascada from '../assets/img/turismo-cascada.svg';
import rio from '../assets/img/secciones/rio.svg';
import mirador from '../assets/img/secciones/mirador.svg';
import zacahuil from '../assets/img/secciones/zacahuil.svg';

export const turismoCategories = [
  { id: 'todos', label: 'Todo' },
  { id: 'cascadas', label: 'Cascadas' },
  { id: 'rios', label: 'Ríos' },
  { id: 'miradores', label: 'Miradores' },
  { id: 'gastronomia', label: 'Gastronomía' },
];

export const atractivos = [
  {
    id: 'cascada-el-salto',
    title: 'Cascada El Salto',
    summary: 'Caída corta entre hoja verde. El sendero de ejemplo se pone resbaloso si llovió.',
    categoryId: 'cascadas',
    category: 'Cascadas',
    badge: 'Cascadas',
    badgeClass: 'bg-[#1C7ED6]',
    image: cascada,
    alt: 'Ilustración de una cascada entre vegetación de la Huasteca',
    body: [
      'El Salto es un lugar inventado para el prototipo, inspirado en el paisaje de la Huasteca, no en un predio con dueño identificado.',
      'Se llega a pie desde Arroyo Verde en unos veinte minutos. Lleva agua y no dejes basura: el aviso del prototipo lo repite a propósito.',
    ],
    facts: [
      { label: 'Desde', value: 'Arroyo Verde' },
      { label: 'Tiempo de ejemplo', value: '20 minutos a pie' },
      { label: 'Mejor hora', value: 'Mañana, antes del calor' },
    ],
  },
  {
    id: 'rio-claro',
    title: 'Río Claro',
    summary: 'Remanso para mojarse los pies. No es balneario y no hay salvavidas.',
    categoryId: 'rios',
    category: 'Ríos',
    badge: 'Ríos',
    badgeClass: 'bg-verde',
    image: rio,
    alt: 'Ilustración de un río entre palmas y cerros',
    body: [
      'El nombre es de ejemplo. En creciente el agua sube rápido: el prototipo pide no entrar si el color está chocolate.',
      'La posada del mismo nombre está en El Sabinal, no a la orilla.',
    ],
    facts: [
      { label: 'Acceso', value: 'Camino de El Sabinal' },
      { label: 'Temporada', value: 'Todo el año; más caudal en lluvia' },
    ],
  },
  {
    id: 'mirador-la-loma',
    title: 'Mirador de La Loma',
    summary: 'Una banca y el valle. Al atardecer se ve la línea de Tamazunchale.',
    categoryId: 'miradores',
    category: 'Miradores',
    badge: 'Miradores',
    badgeClass: 'bg-naranja',
    image: mirador,
    alt: 'Ilustración de una banca mirador frente al valle',
    body: [
      'El mirador de ejemplo es la última curva antes de bajar a Arroyo Verde. No hay puesto de comida: eso está en el Centro.',
    ],
    facts: [
      { label: 'Barrio', value: 'La Loma' },
      { label: 'Cómo llegar', value: 'Colectivo hasta el alto' },
    ],
  },
  {
    id: 'zacahuil-de-la-casa',
    title: 'Zacahuil de la casa',
    summary: 'El sabor que se lleva quien visita. Se encarga, no se improvisa.',
    categoryId: 'gastronomia',
    category: 'Gastronomía',
    badge: 'Gastronomía',
    badgeClass: 'bg-[#C2255C]',
    image: zacahuil,
    alt: 'Ilustración de un zacahuil en hoja sobre una mesa',
    body: [
      'En el prototipo el zacahuil se pide en la cocina de doña Chela. La receta no está aquí: solo el modo de encargarlo.',
      'Los sábados de feria también hay bocoles y café de olla en la plaza, como dato de muestra.',
    ],
    facts: [
      { label: 'Dónde', value: 'Cocina de doña Chela, Centro' },
      { label: 'Encargo', value: 'Con dos días' },
    ],
  },
];
