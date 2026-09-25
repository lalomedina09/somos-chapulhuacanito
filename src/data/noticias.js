import camino from '../assets/img/camino.svg';
import tinaco from '../assets/img/secciones/tinaco-cancha.svg';
import huerta from '../assets/img/secciones/huerta.svg';
import arco from '../assets/img/secciones/arco.svg';

export const noticiaCategories = [
  { id: 'todos', label: 'Todas' },
  { id: 'obras', label: 'Obras' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'cultura', label: 'Cultura' },
];

export const noticias = [
  {
    id: 'mejora-caminos',
    title: 'Mejora de caminos en Chapulhuacanito',
    summary: 'Avance de obras comunitarias en el tramo que baja hacia El Sabinal.',
    categoryId: 'obras',
    category: 'Obras',
    badge: 'Obras',
    badgeClass: 'bg-[#1C7ED6]',
    featured: true,
    date: '14 de oct. 2026',
    dateTime: '2026-10-14',
    image: camino,
    alt: 'Ilustración de un camino rural entre cerros verdes',
    body: [
      'Nota de ejemplo: el revestimiento del camino al Sabinal lleva dos semanas. Falta el tramo del crucero, que se atora cuando pasa la pipa.',
      'La faena del sábado completa lo que la maquinaria no alcanza en la orilla. No hay presupuesto oficial detrás de este texto.',
    ],
    facts: [
      { label: 'Fecha', value: '14 de octubre de 2026' },
      { label: 'Zona', value: 'Camino a El Sabinal' },
      { label: 'Fuente', value: 'Redacción de ejemplo' },
    ],
  },
  {
    id: 'tinaco-apoyo',
    title: 'El comité deja un tinaco de apoyo en la cancha',
    summary: 'Mientras dure el mantenimiento de San José, hay agua para garrafón en el Centro.',
    categoryId: 'comunidad',
    category: 'Comunidad',
    badge: 'Comunidad',
    badgeClass: 'bg-verde',
    date: '15 de oct. 2026',
    dateTime: '2026-10-15',
    image: tinaco,
    alt: 'Ilustración de un tinaco junto a la cancha',
    body: [
      'Nota ligada al aviso de suspensión. El tinaco es de ejemplo y el horario también: 8:00 a 13:00.',
    ],
    facts: [
      { label: 'Fecha', value: '15 de octubre de 2026' },
      { label: 'Lugar', value: 'Cancha del Centro' },
    ],
  },
  {
    id: 'huerta-escolar',
    title: 'La primaria Río Claro siembra su huerta',
    summary: 'Chile, cilantro y cempasúchil para la ofrenda de noviembre.',
    categoryId: 'comunidad',
    category: 'Comunidad',
    badge: 'Comunidad',
    badgeClass: 'bg-verde',
    date: '10 de oct. 2026',
    dateTime: '2026-10-10',
    image: huerta,
    alt: 'Ilustración de una huerta escolar junto a la primaria',
    body: [
      'La escuela del prototipo aparta un cuadro junto al cerco. Las familias llevan semilla; la delegación, la manguera.',
    ],
    facts: [
      { label: 'Fecha', value: '10 de octubre de 2026' },
      { label: 'Lugar', value: 'Escuela primaria Río Claro' },
    ],
  },
  {
    id: 'feria-flor',
    title: 'Se alista el arco de la plaza',
    summary: 'Las Flores ya cortó la primera carga de cempasúchil para el 30 de octubre.',
    categoryId: 'cultura',
    category: 'Cultura',
    badge: 'Cultura',
    badgeClass: 'bg-[#C2255C]',
    date: '12 de oct. 2026',
    dateTime: '2026-10-12',
    image: arco,
    alt: 'Ilustración de un arco de cempasúchil',
    body: [
      'Crónica corta de ejemplo. El arco se arma el 30 y la foto real todavía no está: hoy se ve la ilustración.',
    ],
    facts: [
      { label: 'Fecha', value: '12 de octubre de 2026' },
      { label: 'Barrio', value: 'Las Flores y Centro' },
    ],
  },
];
