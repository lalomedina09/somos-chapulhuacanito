export const destinos = [
  { id: 'todos', label: 'Todos los destinos' },
  { id: 'tamazunchale', label: 'Tamazunchale' },
  { id: 'centro', label: 'Centro' },
  { id: 'la-loma', label: 'La Loma' },
  { id: 'arroyo-verde', label: 'Arroyo Verde' },
  { id: 'san-jose', label: 'San José' },
  { id: 'el-sabinal', label: 'El Sabinal' },
];

export const rutas = [
  {
    id: 'tamazunchale',
    name: 'Chapulhuacanito – Tamazunchale',
    destino: 'Tamazunchale',
    destinoId: 'tamazunchale',
    tarifa: '$35',
    resumen: 'Camioneta de pasaje. Sale del kiosco cuando junta ocho personas.',
    paradas: ['Plaza (Centro)', 'Entrada de San José', 'Crucero El Sabinal', 'Terminal de ejemplo, Tamazunchale'],
    horarios: [
      { sale: '6:30', llega: '7:40', nota: 'Primera, entre semana' },
      { sale: '9:00', llega: '10:10', nota: 'Todos los días' },
      { sale: '13:00', llega: '14:10', nota: 'Regreso de la plaza' },
      { sale: '17:30', llega: '18:40', nota: 'Última; el domingo sale 16:00' },
    ],
  },
  {
    id: 'colectivo-loma',
    name: 'Colectivo Centro – La Loma – Arroyo Verde',
    destino: 'La Loma y Arroyo Verde',
    destinoId: 'la-loma',
    tarifa: '$12',
    resumen: 'Da la vuelta por la subida y baja al arroyo. Cabe en la calle angosta.',
    paradas: ['Plaza (Centro)', 'Escuela Río Claro', 'Alto de La Loma', 'Puente de Arroyo Verde'],
    horarios: [
      { sale: '7:00', llega: '7:25', nota: 'Hacia Arroyo Verde' },
      { sale: '7:40', llega: '8:05', nota: 'Regreso al Centro' },
      { sale: '12:00', llega: '12:25', nota: 'Mediodía' },
      { sale: '18:10', llega: '18:35', nota: 'Última vuelta' },
    ],
  },
  {
    id: 'escolar',
    name: 'Ruta escolar Centro – San José',
    destino: 'San José',
    destinoId: 'san-jose',
    tarifa: '$10',
    resumen: 'Solo en ciclo escolar, de ejemplo. Lleva y trae a la primaria.',
    paradas: ['Escuela Río Claro', 'Cancha de San José', 'Tortillería Las Flores'],
    horarios: [
      { sale: '7:10', llega: '7:30', nota: 'Entrada' },
      { sale: '13:20', llega: '13:40', nota: 'Salida de turno' },
    ],
  },
  {
    id: 'sabinal',
    name: 'Camioneta al Sabinal',
    destino: 'El Sabinal',
    destinoId: 'el-sabinal',
    tarifa: '$15',
    resumen: 'Pasa por el camino recién bacheado. Si llueve, confirma en la plaza.',
    paradas: ['Plaza (Centro)', 'Comité de agua', 'Posada Río Claro'],
    horarios: [
      { sale: '8:00', llega: '8:30', nota: 'Ida' },
      { sale: '11:00', llega: '11:30', nota: 'Ida' },
      { sale: '15:00', llega: '15:30', nota: 'Última ida' },
    ],
  },
];
