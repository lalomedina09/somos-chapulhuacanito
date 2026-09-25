import { useEffect, useId, useState } from 'react';
import { TIPOS, TODAS_CATEGORIAS, guardarEjemplo } from '../../data/publicaciones';
import Icon from '../Icon';
import FormField, { fieldClass } from '../ui/FormField';
import PrimaryButton from '../ui/PrimaryButton';
import Dialogo from './Dialogo';

const vacio = { tipo: 'servicio', categoria: '', titulo: '', descripcion: '' };
const anillo = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja';

export default function PanelPublicar({ abierto, onCerrar, tipoInicial = 'servicio', onPublicada }) {
  const tituloId = useId();
  const [valores, setValores] = useState({ ...vacio, tipo: tipoInicial });
  const [errores, setErrores] = useState({});
  const [archivos, setArchivos] = useState([]);
  const [exito, setExito] = useState(false);

  useEffect(() => {
    if (!abierto) return undefined;
    setValores({ ...vacio, tipo: tipoInicial || 'servicio' });
    setErrores({});
    setArchivos((prev) => {
      prev.forEach((archivo) => archivo.url && URL.revokeObjectURL(archivo.url));
      return [];
    });
    setExito(false);
    return undefined;
  }, [abierto, tipoInicial]);

  function cambiar(campo, valor) {
    setValores((actual) => ({ ...actual, [campo]: valor }));
    setErrores((actual) => ({ ...actual, [campo]: undefined }));
  }

  function alElegirArchivos(evento) {
    const lista = [...evento.target.files];
    evento.target.value = '';
    if (archivos.length + lista.length > 5) {
      setErrores((actual) => ({ ...actual, archivos: 'Puedes adjuntar hasta 5 archivos de ejemplo.' }));
      return;
    }
    if (lista.some((archivo) => archivo.size > 8 * 1024 * 1024)) {
      setErrores((actual) => ({ ...actual, archivos: 'Cada archivo de ejemplo debe pesar menos de 8 MB.' }));
      return;
    }
    const nuevos = lista.map((archivo) => ({
      id: `${archivo.name}-${archivo.size}-${Math.random().toString(16).slice(2)}`,
      nombre: archivo.name,
      url: archivo.type.startsWith('image/') ? URL.createObjectURL(archivo) : '',
    }));
    setArchivos((prev) => [...prev, ...nuevos]);
    setErrores((actual) => ({ ...actual, archivos: undefined }));
  }

  function quitarArchivo(id) {
    setArchivos((prev) => {
      const encontrado = prev.find((archivo) => archivo.id === id);
      if (encontrado?.url) URL.revokeObjectURL(encontrado.url);
      return prev.filter((archivo) => archivo.id !== id);
    });
  }

  function validar() {
    const siguientes = {};
    if (!valores.tipo) siguientes.tipo = 'Elige qué tipo de publicación es.';
    if (!valores.categoria) siguientes.categoria = 'Elige una categoría.';
    if (valores.titulo.trim().length < 8) siguientes.titulo = 'Escribe un título de al menos 8 caracteres.';
    if (valores.descripcion.trim().length < 30) siguientes.descripcion = 'Cuéntanos un poco más: al menos 30 caracteres.';
    return siguientes;
  }

  function enviar(evento) {
    evento.preventDefault();
    const siguientes = validar();
    setErrores(siguientes);
    if (Object.keys(siguientes).length) {
      document.getElementById(`campo-${Object.keys(siguientes)[0]}`)?.focus();
      return;
    }
    const hoy = new Date().toISOString().slice(0, 10);
    guardarEjemplo({
      id: `ejemplo-${Date.now()}`,
      nombre: valores.titulo.trim(),
      categoria: valores.categoria,
      tipo: valores.tipo,
      zona: 'centro',
      ubicacion: 'Centro, Chapulhuacanito',
      calificacion: 0,
      resenas: 0,
      estado: 'Ejemplo recién creado',
      tono: 'azul',
      destacado: false,
      fecha: hoy,
      imagen: valores.categoria,
      resumen: valores.descripcion.trim(),
      descripcion: valores.descripcion.trim(),
      incluye: ['Publicación de ejemplo guardada solo en este navegador', 'No se envió a un servidor'],
      info: {
        servicio: TIPOS.find((tipo) => tipo.id === valores.tipo)?.nombre || 'Servicio',
        cobertura: 'Centro',
        horarios: 'Por acordar',
        experiencia: 'Ejemplo local',
        respuesta: 'Solo en esta demostración',
      },
      opiniones: [],
      whatsapp: '5214831000000',
      ejemplo: true,
    });
    setExito(true);
    onPublicada?.();
  }

  return (
    <Dialogo abierto={abierto} onCerrar={onCerrar} tituloId={tituloId}>
      <div className="flex items-start justify-between gap-3 border-b border-crema-200 px-5 py-4">
        <div>
          <p className="font-mano text-2xl font-bold text-naranja">Tu aviso</p>
          <h2 id={tituloId} className="text-xl font-extrabold">Crear publicación</h2>
        </div>
        <button type="button" onClick={onCerrar} className={`grid h-11 w-11 shrink-0 place-items-center rounded-full hover:bg-white ${anillo}`} aria-label="Cerrar">
          <Icon id="i-cerrar" className="icono h-5 w-5" />
        </button>
      </div>
      {exito ? (
        <div className="px-5 py-6" role="status">
          <p className="font-semibold text-verde-700">Listo, quedó en este prototipo.</p>
          <p className="mt-2 text-sm leading-relaxed text-tinta/75">
            La guardamos solo en este navegador, como el resto de los formularios de muestra del sitio. Nadie la recibió. Cuando exista un servidor, este mismo formulario podrá enviarla de verdad.
          </p>
          <button type="button" onClick={onCerrar} className={`mt-5 inline-flex min-h-11 items-center rounded-full bg-naranja px-5 text-sm font-semibold text-white hover:bg-naranja-600 ${anillo}`}>
            Verla en la bolsa
          </button>
        </div>
      ) : (
        <form className="grid gap-4 px-5 py-5" noValidate onSubmit={enviar}>
          <fieldset>
            <legend className="text-sm font-semibold">Tipo de publicación</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {TIPOS.map((tipo) => (
                <label key={tipo.id} className={`flex min-h-11 cursor-pointer items-center justify-center rounded-full px-2 text-center text-sm font-semibold ${valores.tipo === tipo.id ? 'bg-naranja text-white' : 'bg-white text-tinta ring-1 ring-crema-200'}`}>
                  <input
                    id={tipo.id === 'servicio' ? 'campo-tipo' : undefined}
                    className="sr-only"
                    type="radio"
                    name="tipo"
                    value={tipo.id}
                    checked={valores.tipo === tipo.id}
                    onChange={() => cambiar('tipo', tipo.id)}
                  />
                  {tipo.id === 'servicio' ? 'Servicio' : tipo.nombre}
                </label>
              ))}
            </div>
            {errores.tipo ? <p id="campo-tipo-error" role="alert" className="mt-1 text-sm font-medium text-[#E03131]">{errores.tipo}</p> : null}
          </fieldset>

          <FormField id="campo-categoria" label="Categoría" error={errores.categoria}>
            <select id="campo-categoria" className={fieldClass} value={valores.categoria} data-autofocus aria-invalid={Boolean(errores.categoria)} aria-describedby={errores.categoria ? 'campo-categoria-error' : undefined} onChange={(evento) => cambiar('categoria', evento.target.value)}>
              <option value="">Selecciona una categoría</option>
              {TODAS_CATEGORIAS.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </FormField>

          <FormField id="campo-titulo" label="Título" error={errores.titulo}>
            <input id="campo-titulo" className={fieldClass} value={valores.titulo} maxLength={80} autoComplete="off" aria-invalid={Boolean(errores.titulo)} aria-describedby={errores.titulo ? 'campo-titulo-error' : undefined} onChange={(evento) => cambiar('titulo', evento.target.value)} />
          </FormField>

          <FormField id="campo-descripcion" label="Descripción" hint="Cuenta qué ofreces, tu experiencia, zona de cobertura y horarios." error={errores.descripcion}>
            <textarea id="campo-descripcion" rows={4} className={fieldClass} value={valores.descripcion} aria-invalid={Boolean(errores.descripcion)} aria-describedby={errores.descripcion ? 'campo-descripcion-error' : undefined} onChange={(evento) => cambiar('descripcion', evento.target.value)} />
          </FormField>

          <div>
            <p className="text-sm font-semibold">Fotos o videos</p>
            <p className="mt-0.5 text-xs text-tinta/70">Arrastra o elige archivos. Solo se previsualizan aquí. No se suben.</p>
            <label className="mt-2 flex min-h-28 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-naranja/40 bg-white px-4 py-6 text-center text-sm text-tinta/70 hover:bg-naranja-50">
              <Icon id="i-imagen" className="icono h-6 w-6 text-naranja" />
              <span className="mt-2 font-semibold text-tinta">Arrastra tus fotos o videos aquí</span>
              <span>o selecciónalos desde tu dispositivo</span>
              <input type="file" accept="image/*,video/*" multiple className="sr-only" onChange={alElegirArchivos} />
            </label>
            {errores.archivos ? <p role="alert" className="mt-1 text-sm font-medium text-[#E03131]">{errores.archivos}</p> : null}
            {archivos.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {archivos.map((archivo) => (
                  <li key={archivo.id} className="flex items-center gap-3 rounded-xl bg-white p-2">
                    {archivo.url ? <img src={archivo.url} alt="" className="h-12 w-12 rounded-lg object-cover" /> : <span className="grid h-12 w-12 place-items-center rounded-lg bg-crema text-xs">Video</span>}
                    <span className="min-w-0 flex-1 truncate text-sm">{archivo.nombre}</span>
                    <button type="button" className={`min-h-11 px-2 text-sm font-semibold text-naranja-700 ${anillo}`} onClick={() => quitarArchivo(archivo.id)}>Quitar</button>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <PrimaryButton type="submit" className="w-full justify-center">Publicar ahora</PrimaryButton>
          <p className="text-center text-xs text-tinta/55">Formulario de ejemplo. No se envía a ningún servidor.</p>
        </form>
      )}
    </Dialogo>
  );
}
