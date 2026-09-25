import profesionales from '../assets/img/il-profesionales.svg'
import hogar from '../assets/img/il-hogar.svg'
import salud from '../assets/img/il-salud.svg'
import belleza from '../assets/img/il-belleza.svg'
import eventos from '../assets/img/il-eventos.svg'
import educacion from '../assets/img/il-educacion.svg'
import alimentos from '../assets/img/il-alimentos.svg'
import transporte from '../assets/img/il-transporte.svg'
import agricultura from '../assets/img/il-agricultura.svg'
import oficios from '../assets/img/il-oficios.svg'
import trioFiesta from '../assets/img/il-trio-fiesta.svg'
import trioEscenario from '../assets/img/il-trio-escenario.svg'
import trioDetalle from '../assets/img/il-trio-detalle.svg'
import mapa from '../assets/img/il-mapa.svg'
import hero from '../assets/img/bolsa-hero.svg'
import { barrios } from './barrios.js'
import { matchesQuery } from '../utils/text.js'

export const HERO_BOLSA = hero

export const IMAGENES = {
  profesionales,
  hogar,
  salud,
  belleza,
  eventos,
  educacion,
  alimentos,
  transporte,
  agricultura,
  oficios,
  trioFiesta,
  trioEscenario,
  trioDetalle,
  mapa,
}

export const CATEGORIAS = [
  { id: 'profesionales', nombre: 'Profesionales', icono: 'i-maletin', tono: 'bg-[#1c7ed6]' },
  { id: 'hogar', nombre: 'Hogar y construcción', icono: 'i-casa', tono: 'bg-[#2f9e44]' },
  { id: 'salud', nombre: 'Salud y bienestar', icono: 'i-corazon', tono: 'bg-[#0ca678]' },
  { id: 'belleza', nombre: 'Belleza y cuidado personal', icono: 'i-estrella', tono: 'bg-[#9c36b5]' },
  { id: 'eventos', nombre: 'Eventos y entretenimiento', icono: 'i-musica', tono: 'bg-[#c2255c]' },
  { id: 'educacion', nombre: 'Educación y asesoría', icono: 'i-libro', tono: 'bg-[#7048e8]' },
  { id: 'alimentos', nombre: 'Alimentos', icono: 'i-plato', tono: 'bg-[#f26b1d]' },
  { id: 'transporte', nombre: 'Transporte', icono: 'i-bus', tono: 'bg-[#1c7ed6]' },
]

export const CATEGORIAS_EXTRA = [
  { id: 'agricultura', nombre: 'Campo y agricultura', icono: 'i-hoja', tono: 'bg-[#2b8a3e]' },
  { id: 'oficios', nombre: 'Oficios y reparaciones', icono: 'i-llave', tono: 'bg-[#9a4d00]' },
]

export const TODAS_CATEGORIAS = [...CATEGORIAS, ...CATEGORIAS_EXTRA]

export const ZONAS = [
  ...barrios.map((barrio) => ({ id: barrio.id, nombre: barrio.name })),
  { id: 'toda', nombre: 'Toda la comunidad' },
]

export const TIPOS = [
  { id: 'servicio', nombre: 'Servicios' },
  { id: 'empleo', nombre: 'Empleo' },
  { id: 'emprendimiento', nombre: 'Emprendimiento' },
]

export const ORDENES = [
  { id: 'recientes', nombre: 'Más recientes' },
  { id: 'calificacion', nombre: 'Mejor calificados' },
  { id: 'nombre', nombre: 'Nombre (A-Z)' },
]

const opinionesVecinos = (tema) => [
  { nombre: 'Lucía Hernández', estrellas: 5, fecha: 'Agosto 2026', texto: `Quedé contenta con ${tema}. Explicaron con calma y cumplieron lo que prometieron.` },
  { nombre: 'Rafael Bautista', estrellas: 4, fecha: 'Julio 2026', texto: 'Buen trato y precio justo para la comunidad. Volvería a escribirles.' },
]

function base(parcial) {
  return {
    destacado: false,
    galeria: [parcial.imagen, 'mapa'],
    opiniones: opinionesVecinos(parcial.nombre),
    whatsapp: '5214831000000',
    ...parcial,
  }
}

export const PUBLICACIONES = [
  base({
    id: 'trio-huasteco-los-morales',
    nombre: 'Trío Huasteco Los Morales',
    categoria: 'eventos',
    tipo: 'servicio',
    zona: 'centro',
    ubicacion: 'Centro, Chapulhuacanito',
    calificacion: 4.9,
    resenas: 28,
    estado: 'Disponible para eventos',
    tono: 'verde',
    destacado: true,
    fecha: '2026-09-20',
    imagen: 'eventos',
    galeria: ['trioEscenario', 'trioFiesta', 'trioDetalle'],
    whatsapp: '5214831000001',
    resumen: 'Sones huastecos para bodas, XV años, fiestas patronales y reuniones familiares.',
    descripcion: 'Somos un trío de Chapulhuacanito. Tocamos jarana, violín y guitarra quinta con el repertorio de la Huasteca: sones, huapangos y las mañanitas cuando la fiesta lo pide. Llevamos más de quince años amenizando celebraciones en la comunidad y en ranchos cercanos. El precio se acuerda según las horas y si hay que trasladarnos.',
    incluye: [
      'Repertorio de sones huastecos y huapangos',
      'Presentación de 2 a 4 horas',
      'Equipo de sonido básico para patio o salón pequeño',
      'Disponibles en fines de semana y fechas patronales',
    ],
    info: {
      servicio: 'Música en vivo · trío huasteco',
      cobertura: 'Chapulhuacanito, Tamazunchale y comunidades cercanas',
      horarios: 'Viernes a domingo, de 4:00 p.m. a 11:00 p.m.',
      experiencia: 'Más de 15 años',
      respuesta: 'Suele responder el mismo día',
    },
    opiniones: [
      { nombre: 'María Gómez', estrellas: 5, fecha: 'Septiembre 2026', texto: 'Tocaron en los XV de mi hija. La gente no se quería ir y los sones se oyeron hasta la calle.' },
      { nombre: 'Don Eusebio', estrellas: 5, fecha: 'Junio 2026', texto: 'Puntuales, bien vestidos y con un repertorio que sí es de aquí. Los recomendé en la familia.' },
      { nombre: 'Ana Ruiz', estrellas: 4, fecha: 'Abril 2026', texto: 'Muy buena música. El sonido alcanzó bien en el patio. Solo avisen con tiempo si la fiesta es entre semana.' },
    ],
  }),
  base({
    id: 'consultorio-dental-ana-lopez',
    nombre: 'Consultorio Dental Dra. Ana López',
    categoria: 'salud',
    tipo: 'servicio',
    zona: 'centro',
    ubicacion: 'Centro, Chapulhuacanito',
    calificacion: 4.8,
    resenas: 36,
    estado: 'Consultas con cita',
    tono: 'verde',
    destacado: true,
    fecha: '2026-09-18',
    imagen: 'salud',
    whatsapp: '5214831000002',
    resumen: 'Limpiezas, revisiones y urgencias dentales con cita en el centro.',
    descripcion: 'Consultorio de ejemplo en el centro de Chapulhuacanito. La doctora Ana López atiende revisión, limpieza y orientación cuando hay dolor. Este perfil es ficticio: sirve para mostrar cómo se vería un servicio de salud en la bolsa.',
    incluye: ['Revisión y limpieza', 'Orientación en caso de dolor', 'Citas por la tarde entre semana', 'Atención a niñas y niños acompañados'],
    info: {
      servicio: 'Salud dental',
      cobertura: 'Centro de Chapulhuacanito',
      horarios: 'Lunes a viernes, 3:00 p.m. a 7:00 p.m.',
      experiencia: '8 años de consulta',
      respuesta: 'Confirma cita en menos de un día',
    },
  }),
  base({
    id: 'construccion-y-remodelaciones',
    nombre: 'Construcción y remodelaciones',
    categoria: 'hogar',
    tipo: 'servicio',
    zona: 'toda',
    ubicacion: 'Toda la región',
    calificacion: 4.7,
    resenas: 19,
    estado: 'Agenda con cupo',
    tono: 'ambar',
    destacado: true,
    fecha: '2026-09-15',
    imagen: 'hogar',
    whatsapp: '5214831000003',
    resumen: 'Cuartos, firmes, losa y arreglos menores. Presupuesto sin compromiso.',
    descripcion: 'Cuadrilla de ejemplo para obras chicas en casa: un cuarto adicional, firme, repellado o una losa pequeña. Trabajan en Chapulhuacanito y salen a comunidades cercanas cuando el camino lo permite.',
    incluye: ['Visita para presupuesto', 'Obra de albañilería', 'Acabados sencillos', 'Material se cotiza aparte'],
    info: {
      servicio: 'Albañilería y remodelación',
      cobertura: 'Chapulhuacanito y toda la región',
      horarios: 'Lunes a sábado, de 8:00 a.m. a 5:00 p.m.',
      experiencia: '12 años en obra',
      respuesta: 'Visita en un plazo de 2 a 3 días',
    },
  }),
  base({
    id: 'estudio-belleza-lupita',
    nombre: 'Estudio de Belleza Lupita',
    categoria: 'belleza',
    tipo: 'servicio',
    zona: 'centro',
    ubicacion: 'Centro, Chapulhuacanito',
    calificacion: 4.9,
    resenas: 42,
    estado: 'Citas esta semana',
    tono: 'verde',
    destacado: true,
    fecha: '2026-09-12',
    imagen: 'belleza',
    whatsapp: '5214831000004',
    resumen: 'Corte, peinado de fiesta, maquillaje y uñas para graduaciones y XV años.',
    descripcion: 'Estudio de ejemplo junto al jardín. Lupita atiende cortes, peinados de fiesta y maquillaje sencillo. En temporada de XV años y bodas conviene apartar con una semana de anticipación.',
    incluye: ['Corte y peinado', 'Maquillaje de fiesta', 'Uñas', 'Atención a domicilio dentro del pueblo, con cargo extra'],
    info: {
      servicio: 'Estética y peinado',
      cobertura: 'Centro y colonias cercanas',
      horarios: 'Martes a domingo, 10:00 a.m. a 7:00 p.m.',
      experiencia: '10 años',
      respuesta: 'Responde por WhatsApp en el día',
    },
  }),
  base({
    id: 'asesoria-legal-huasteca',
    nombre: 'Asesoría legal · despacho Huasteca',
    categoria: 'profesionales',
    tipo: 'servicio',
    zona: 'centro',
    ubicacion: 'Centro, Chapulhuacanito',
    calificacion: 4.6,
    resenas: 11,
    estado: 'Primera orientación',
    tono: 'verde',
    destacado: false,
    fecha: '2026-09-10',
    imagen: 'profesionales',
    whatsapp: '5214831000005',
    resumen: 'Orientación sobre terrenos, actas y trámites. La primera plática es de ejemplo.',
    descripcion: 'Perfil de ejemplo de un despacho que orienta en trámites frecuentes: actas, predios y convenios familiares. No sustituye una consulta formal. Los datos son ficticios.',
    incluye: ['Orientación inicial', 'Revisión de documentos', 'Cita en el centro', 'Seguimiento por mensaje'],
    info: {
      servicio: 'Asesoría legal de ejemplo',
      cobertura: 'Chapulhuacanito y Tamazunchale',
      horarios: 'Lunes, miércoles y viernes, 10:00 a.m. a 2:00 p.m.',
      experiencia: '6 años',
      respuesta: 'En uno o dos días hábiles',
    },
  }),
  base({
    id: 'peluqueria-mireya',
    nombre: 'Peluquería y estética Mireya',
    categoria: 'belleza',
    tipo: 'servicio',
    zona: 'la-loma',
    ubicacion: 'La Loma',
    calificacion: 4.5,
    resenas: 17,
    estado: 'Sin cita previa en la mañana',
    tono: 'verde',
    fecha: '2026-09-08',
    imagen: 'belleza',
    whatsapp: '5214831000006',
    resumen: 'Corte para toda la familia y arreglo de barba.',
    descripcion: 'Peluquería de ejemplo en La Loma. Atiende cortes de cabello y barba, sobre todo por las mañanas, sin tanta fila entre semana.',
    incluye: ['Corte caballero y dama', 'Barba', 'Corte para niños'],
    info: {
      servicio: 'Peluquería',
      cobertura: 'La Loma',
      horarios: 'Miércoles a lunes, 9:00 a.m. a 6:00 p.m.',
      experiencia: '5 años',
      respuesta: 'El mismo día',
    },
  }),
  base({
    id: 'clases-guitarra-don-chemo',
    nombre: 'Clases de guitarra con don Chemo',
    categoria: 'educacion',
    tipo: 'servicio',
    zona: 'san-jose',
    ubicacion: 'Barrio San José',
    calificacion: 5,
    resenas: 9,
    estado: 'Grupos pequeños',
    tono: 'verde',
    fecha: '2026-09-07',
    imagen: 'educacion',
    whatsapp: '5214831000007',
    resumen: 'Guitarra desde cero para jóvenes y adultos, en la casa o en el salón ejidal.',
    descripcion: 'Clases de ejemplo para quien quiere acompañar una canción en la fiesta. Don Chemo enseña rasgueo, afinación y dos o tres canciones del gusto del grupo.',
    incluye: ['Clase semanal de una hora', 'Grupos de hasta 6 personas', 'Material impreso sencillo', 'Ensayo previo a una fiesta, si se aparta'],
    info: {
      servicio: 'Clases de guitarra',
      cobertura: 'Barrio San José y centro',
      horarios: 'Sábados, 4:00 p.m. a 7:00 p.m.',
      experiencia: '20 años tocando',
      respuesta: 'En el transcurso del día',
    },
  }),
  base({
    id: 'taquizas-sabor-huasteco',
    nombre: 'Taquizas y banquetes Sabor huasteco',
    categoria: 'alimentos',
    tipo: 'emprendimiento',
    zona: 'toda',
    ubicacion: 'Toda la región',
    calificacion: 4.8,
    resenas: 23,
    estado: 'Pedidos con tres días',
    tono: 'ambar',
    fecha: '2026-09-05',
    imagen: 'alimentos',
    whatsapp: '5214831000008',
    resumen: 'Zacahuil por pedido, taquizas y refrescos para reuniones de familia.',
    descripcion: 'Emprendimiento de ejemplo. Cocinan zacahuil, bocoles y taquizas para reuniones. El pedido se aparta con al menos tres días y se entrega en el domicilio dentro del pueblo.',
    incluye: ['Zacahuil por encargo', 'Taquiza para 20 personas o más', 'Agua fresca de la temporada', 'Entrega en Chapulhuacanito'],
    info: {
      servicio: 'Alimentos para eventos',
      cobertura: 'Toda la región',
      horarios: 'Pedidos de jueves a domingo',
      experiencia: '4 años',
      respuesta: 'Confirma el mismo día',
    },
  }),
  base({
    id: 'transporte-privado-los-cerros',
    nombre: 'Transporte privado Los Cerros',
    categoria: 'transporte',
    tipo: 'servicio',
    zona: 'arroyo-verde',
    ubicacion: 'Arroyo Verde',
    calificacion: 4.4,
    resenas: 15,
    estado: 'Salidas bajo reserva',
    tono: 'verde',
    fecha: '2026-09-03',
    imagen: 'transporte',
    whatsapp: '5214831000009',
    resumen: 'Viajes a Tamazunchale, clínica y encargos cuando no hay camión.',
    descripcion: 'Camioneta de ejemplo para traslados locales: clínica, mercado de Tamazunchale o un encargo. No es ruta pública. El costo se dice antes de salir.',
    incluye: ['Viaje local hasta 4 personas', 'Encargos al mercado', 'Salida desde Arroyo Verde o el centro'],
    info: {
      servicio: 'Transporte privado',
      cobertura: 'Arroyo Verde, Chapulhuacanito y Tamazunchale',
      horarios: 'Todos los días, de 6:00 a.m. a 8:00 p.m.',
      experiencia: '7 años',
      respuesta: 'En menos de una hora, si está en cobertura',
    },
  }),
  base({
    id: 'instalaciones-electricas-ramiro',
    nombre: 'Instalaciones eléctricas Ramiro',
    categoria: 'oficios',
    tipo: 'servicio',
    zona: 'toda',
    ubicacion: 'Toda la región',
    calificacion: 4.7,
    resenas: 21,
    estado: 'Atiende fallas',
    tono: 'verde',
    fecha: '2026-09-01',
    imagen: 'oficios',
    whatsapp: '5214831000010',
    resumen: 'Contactos, lámparas, bombas de agua y revisión de cortos.',
    descripcion: 'Oficio de ejemplo. Ramiro revisa cortos, cambia contactos y conecta bombas pequeñas. Si el trabajo es de la red general, orienta para el reporte correspondiente.',
    incluye: ['Revisión de corto', 'Contactos y apagadores', 'Lámparas', 'Conexión de bomba pequeña'],
    info: {
      servicio: 'Electricidad residencial',
      cobertura: 'Toda la región',
      horarios: 'Lunes a sábado, 8:00 a.m. a 6:00 p.m.',
      experiencia: '14 años',
      respuesta: 'El mismo día, salvo obra larga',
    },
  }),
  base({
    id: 'bienestar-y-caminata',
    nombre: 'Caminata y bienestar con Luna',
    categoria: 'salud',
    tipo: 'servicio',
    zona: 'centro',
    ubicacion: 'Centro, junto a la cancha',
    calificacion: 4.6,
    resenas: 8,
    estado: 'Grupo de la mañana',
    tono: 'verde',
    fecha: '2026-08-28',
    imagen: 'salud',
    whatsapp: '5214831000011',
    resumen: 'Caminata suave y estiramiento para adultas y adultos, al aire libre.',
    descripcion: 'Grupo de ejemplo tres mañanas por semana. No es consulta médica: es actividad ligera en la cancha, con pausas y agua. Conviene preguntar al centro de salud antes de empezar si hay alguna molestia.',
    incluye: ['Caminata de 40 minutos', 'Estiramiento', 'Grupo mixto', 'Primera visita sin costo de ejemplo'],
    info: {
      servicio: 'Actividad física comunitaria',
      cobertura: 'Cancha del centro',
      horarios: 'Lunes, miércoles y viernes, 6:30 a.m.',
      experiencia: '3 años guiando el grupo',
      respuesta: 'El mismo día',
    },
  }),
  base({
    id: 'eventos-flor-de-cempasuchil',
    nombre: 'Organización de eventos Flor de cempasúchil',
    categoria: 'eventos',
    tipo: 'emprendimiento',
    zona: 'las-flores',
    ubicacion: 'Las Flores',
    calificacion: 4.8,
    resenas: 13,
    estado: 'Fechas de octubre apartadas',
    tono: 'ambar',
    fecha: '2026-08-25',
    imagen: 'eventos',
    galeria: ['eventos', 'trioFiesta', 'mapa'],
    whatsapp: '5214831000012',
    resumen: 'Arreglo de patio, papel picado, mesas y coordinación el día de la fiesta.',
    descripcion: 'Emprendimiento de ejemplo para adornar patios y coordinar el día de una fiesta chica: XV años, bautizo o reunión de Xantolo. El adorno usa papel picado y cempasúchil de temporada.',
    incluye: ['Papel picado y flores de temporada', 'Acomodo de mesas', 'Coordinación el día del evento', 'Lista de pendientes con la familia'],
    info: {
      servicio: 'Organización de fiestas',
      cobertura: 'Chapulhuacanito',
      horarios: 'Citas de lunes a viernes por la tarde',
      experiencia: '5 temporadas de fiesta',
      respuesta: 'En 24 horas',
    },
  }),
  base({
    id: 'reposteria-dulce-raiz',
    nombre: 'Repostería artesanal Dulce raíz',
    categoria: 'alimentos',
    tipo: 'emprendimiento',
    zona: 'san-jose',
    ubicacion: 'Barrio San José',
    calificacion: 4.9,
    resenas: 18,
    estado: 'Encargos de fin de semana',
    tono: 'verde',
    fecha: '2026-08-22',
    imagen: 'alimentos',
    whatsapp: '5214831000013',
    resumen: 'Pasteles de tres leches, gelatinas y pan de elote por encargo.',
    descripcion: 'Horno de ejemplo en San José. Se aparta el pastel con cuatro días y se recoge en casa o se entrega en el centro si el pedido es grande.',
    incluye: ['Pastel de tres leches', 'Gelatinas', 'Pan de elote', 'Dedicatoria sencilla'],
    info: {
      servicio: 'Repostería por encargo',
      cobertura: 'Barrio San José y centro',
      horarios: 'Entregas viernes a domingo',
      experiencia: '6 años',
      respuesta: 'El mismo día',
    },
  }),
  base({
    id: 'guia-caminos-verdes',
    nombre: 'Guía de caminos verdes',
    categoria: 'profesionales',
    tipo: 'servicio',
    zona: 'el-sabinal',
    ubicacion: 'El Sabinal',
    calificacion: 5,
    resenas: 7,
    estado: 'Salidas los sábados',
    tono: 'verde',
    fecha: '2026-08-18',
    imagen: 'profesionales',
    galeria: ['profesionales', 'agricultura', 'mapa'],
    whatsapp: '5214831000014',
    resumen: 'Recorrido a pie por veredas, milpa y un mirador. Grupos chicos.',
    descripcion: 'Guía local de ejemplo. El recorrido dura cerca de tres horas, con paradas para explicar plantas y el camino seguro. No es un tour masivo: máximo ocho personas y se camina con calma.',
    incluye: ['Guía de la comunidad', 'Recorrido de 3 horas', 'Indicaciones de seguridad', 'Grupo máximo de 8 personas'],
    info: {
      servicio: 'Guía local',
      cobertura: 'El Sabinal y veredas cercanas',
      horarios: 'Sábados, salida 8:00 a.m.',
      experiencia: 'Nacido en la comunidad',
      respuesta: 'En el día',
    },
  }),
  base({
    id: 'empleo-ayudante-albanil',
    nombre: 'Se busca ayudante de albañil',
    categoria: 'hogar',
    tipo: 'empleo',
    zona: 'la-loma',
    ubicacion: 'Obra en La Loma',
    calificacion: 0,
    resenas: 0,
    estado: 'Vacante abierta',
    tono: 'azul',
    fecha: '2026-09-19',
    imagen: 'hogar',
    whatsapp: '5214831000015',
    resumen: 'Apoyo en una obra de cuatro semanas. Pago semanal, de ejemplo.',
    descripcion: 'Aviso de empleo de ejemplo. La obra necesita una persona que apoye con mezcla, acarreo y limpieza. Se pide disponibilidad de lunes a sábado y ganas de aprender. Este aviso no es una contratación real.',
    incluye: ['Obra de unas 4 semanas', 'Pago semanal de ejemplo', 'Herramienta básica la pone la obra', 'Se da de alta el acuerdo por escrito'],
    info: {
      servicio: 'Empleo temporal · albañilería',
      cobertura: 'La Loma',
      horarios: 'Lunes a sábado, 8:00 a.m. a 4:00 p.m.',
      experiencia: 'No indispensable; sí disponibilidad',
      respuesta: 'Se responden mensajes en dos días',
    },
    opiniones: [],
  }),
  base({
    id: 'empleo-apoyo-cocina',
    nombre: 'Apoyo de cocina para fines de semana',
    categoria: 'alimentos',
    tipo: 'empleo',
    zona: 'centro',
    ubicacion: 'Centro, Chapulhuacanito',
    calificacion: 0,
    resenas: 0,
    estado: 'Vacante de fin de semana',
    tono: 'azul',
    fecha: '2026-09-16',
    imagen: 'alimentos',
    whatsapp: '5214831000016',
    resumen: 'Ayuda para preparar pedidos de taquiza. Turnos de viernes a domingo.',
    descripcion: 'Empleo de ejemplo en un negocio de comida para eventos. Las tareas son picar, servir y dejar limpia la mesa de trabajo. Se busca a alguien de la comunidad, mayor de edad.',
    incluye: ['Turnos de viernes a domingo', 'Comida durante el turno', 'Pago por día de ejemplo', 'Indicaciones el primer sábado'],
    info: {
      servicio: 'Empleo · cocina',
      cobertura: 'Centro',
      horarios: 'Viernes a domingo, desde las 8:00 a.m.',
      experiencia: 'Ganas de aprender; no se pide escuela de cocina',
      respuesta: 'Antes del viernes',
    },
    opiniones: [],
  }),
  base({
    id: 'miel-de-monte-el-carrizal',
    nombre: 'Miel de monte El Sabinal',
    categoria: 'agricultura',
    tipo: 'emprendimiento',
    zona: 'el-sabinal',
    ubicacion: 'El Sabinal',
    calificacion: 4.9,
    resenas: 12,
    estado: 'Hay frascos esta semana',
    tono: 'verde',
    fecha: '2026-08-14',
    imagen: 'agricultura',
    whatsapp: '5214831000017',
    resumen: 'Miel por frasco, de colmenas del monte. Entrega en el tianguis.',
    descripcion: 'Emprendimiento familiar de ejemplo. Venden miel en frasco de medio litro y de litro. Se recoge en El Sabinal o en el tianguis del centro cuando avisan.',
    incluye: ['Frasco de medio litro o litro', 'Miel de la temporada', 'Entrega en tianguis', 'Puede apartarse por mensaje'],
    info: {
      servicio: 'Producto local · miel',
      cobertura: 'El Sabinal y tianguis del centro',
      horarios: 'Visitas sábados por la mañana',
      experiencia: 'Colmenas de la familia',
      respuesta: 'El mismo día',
    },
  }),
]

export function categoriaPorId(id) {
  return TODAS_CATEGORIAS.find((c) => c.id === id)
}

export function zonaPorId(id) {
  return ZONAS.find((z) => z.id === id)
}

export function tipoPorId(id) {
  return TIPOS.find((t) => t.id === id)
}

export function publicacionPorId(id) {
  return PUBLICACIONES.find((p) => p.id === id) || leerEjemplos().find((p) => p.id === id) || null
}

export function imagenDe(clave) {
  return IMAGENES[clave] || IMAGENES.mapa
}

const CLAVE_EJEMPLOS = 'somos-bolsa-ejemplos'

export function leerEjemplos() {
  try {
    const crudo = sessionStorage.getItem(CLAVE_EJEMPLOS)
    const lista = crudo ? JSON.parse(crudo) : []
    return Array.isArray(lista) ? lista : []
  } catch {
    return []
  }
}

export function guardarEjemplo(publicacion) {
  const todas = [publicacion, ...leerEjemplos().filter((p) => p.id !== publicacion.id)]
  sessionStorage.setItem(CLAVE_EJEMPLOS, JSON.stringify(todas))
  return todas
}

export function todasLasPublicaciones() {
  const ejemplos = leerEjemplos()
  const ids = new Set(ejemplos.map((p) => p.id))
  return [...ejemplos, ...PUBLICACIONES.filter((p) => !ids.has(p.id))]
}

export function filtrarPublicaciones(lista, { q = '', categorias = [], zona = '', tipos = [], orden = 'recientes', soloDestacados = false }) {
  const resultado = lista.filter((p) => {
    if (soloDestacados && !p.destacado) return false
    if (categorias.length && !categorias.includes(p.categoria)) return false
    if (zona === 'toda' && p.zona !== 'toda') return false
    if (zona && zona !== 'toda' && p.zona !== zona && p.zona !== 'toda') return false
    if (tipos.length && !tipos.includes(p.tipo)) return false
    const cat = categoriaPorId(p.categoria)?.nombre || ''
    const zonaNombre = zonaPorId(p.zona)?.nombre || ''
    if (!matchesQuery(q, p.nombre, p.resumen, p.descripcion, cat, zonaNombre, p.ubicacion, p.estado)) return false
    return true
  })

  return resultado.sort((a, b) => {
    if (orden === 'calificacion') return (b.calificacion || 0) - (a.calificacion || 0) || b.resenas - a.resenas
    if (orden === 'nombre') return a.nombre.localeCompare(b.nombre, 'es')
    return String(b.fecha).localeCompare(String(a.fecha))
  })
}

export function enlaceWhatsapp(publicacion) {
  const texto = encodeURIComponent(`Hola, vi «${publicacion.nombre}» en la bolsa de Somos Chapulhuacanito y me gustaría más información.`)
  return `https://wa.me/${publicacion.whatsapp}?text=${texto}`
}
