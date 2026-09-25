import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PanelPublicar from '../components/bolsa/PanelPublicar';
import TarjetaPublicacion from '../components/bolsa/TarjetaPublicacion';
import Icon from '../components/Icon';
import EmptyState from '../components/ui/EmptyState';
import cempasuchilDer from '../assets/img/cempasuchil-der.svg';
import cempasuchilIzq from '../assets/img/cempasuchil-izq.svg';
import {
  CATEGORIAS,
  CATEGORIAS_EXTRA,
  HERO_BOLSA,
  ORDENES,
  TIPOS,
  TODAS_CATEGORIAS,
  ZONAS,
  filtrarPublicaciones,
  todasLasPublicaciones,
} from '../data/publicaciones';
import usePageTitle from '../hooks/usePageTitle';

const claveFavoritos = 'somos-bolsa-favoritos';
const anillo = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja';

function listaParam(valor) {
  return (valor || '').split(',').map((parte) => parte.trim()).filter(Boolean);
}

function useFavoritos() {
  const [ids, setIds] = useState(() => {
    try {
      return new Set(JSON.parse(localStorage.getItem(claveFavoritos) || '[]'));
    } catch {
      return new Set();
    }
  });
  const alternar = useCallback((id) => {
    setIds((prev) => {
      const siguiente = new Set(prev);
      if (siguiente.has(id)) siguiente.delete(id);
      else siguiente.add(id);
      localStorage.setItem(claveFavoritos, JSON.stringify([...siguiente]));
      return siguiente;
    });
  }, []);
  return [ids, alternar];
}

export default function BolsaPage() {
  usePageTitle('Bolsa de trabajo y servicios locales');
  const [params, setParams] = useSearchParams();
  const [favoritos, alternarFavorito] = useFavoritos();
  const [masCategorias, setMasCategorias] = useState(false);
  const [filtrosAbiertos, setFiltrosAbiertos] = useState(false);
  const [verTodasRecientes, setVerTodasRecientes] = useState(false);
  const [panel, setPanel] = useState(false);
  const [tipoPanel, setTipoPanel] = useState('servicio');
  const [version, setVersion] = useState(0);

  const q = params.get('q') || '';
  const categorias = useMemo(() => listaParam(params.get('cat')), [params]);
  const zona = params.get('zona') || '';
  const tipos = useMemo(() => listaParam(params.get('tipo')), [params]);
  const orden = params.get('orden') || 'recientes';
  const soloDestacados = params.get('destacados') === '1';

  const actualizar = useCallback((parcial) => {
    const actual = {
      q,
      cat: categorias.join(','),
      zona,
      tipo: tipos.join(','),
      orden: orden === 'recientes' ? '' : orden,
      destacados: soloDestacados ? '1' : '',
      publicar: params.get('publicar') || '',
      ...parcial,
    };
    if (actual.orden === 'recientes') actual.orden = '';
    const limpio = Object.fromEntries(Object.entries(actual).filter(([, valor]) => valor));
    setParams(limpio, { replace: true });
  }, [q, categorias, zona, tipos, orden, soloDestacados, params, setParams]);

  useEffect(() => {
    if (params.get('publicar') === '1') {
      setTipoPanel('servicio');
      setPanel(true);
    }
  }, [params]);

  useEffect(() => {
    if (categorias.some((id) => CATEGORIAS_EXTRA.some((cat) => cat.id === id))) setMasCategorias(true);
  }, [categorias]);

  const publicaciones = useMemo(
    () => filtrarPublicaciones(todasLasPublicaciones(), { q, categorias, zona, tipos, orden, soloDestacados }),
    [q, categorias, zona, tipos, orden, soloDestacados, version],
  );

  const destacados = soloDestacados ? publicaciones : publicaciones.filter((item) => item.destacado);
  const recientesBase = soloDestacados ? [] : publicaciones.filter((item) => !item.destacado);
  const recientes = verTodasRecientes ? recientesBase : recientesBase.slice(0, 8);
  const filtrosActivos = Boolean(q || categorias.length || zona || tipos.length || soloDestacados || orden !== 'recientes');

  function abrirPublicar(tipo = 'servicio') {
    setTipoPanel(tipo);
    setPanel(true);
  }

  function cerrarPublicar() {
    setPanel(false);
    if (params.get('publicar')) {
      const siguiente = new URLSearchParams(params);
      siguiente.delete('publicar');
      setParams(siguiente, { replace: true });
    }
  }

  function alternarCategoria(id) {
    const siguiente = categorias.includes(id) ? categorias.filter((cat) => cat !== id) : [...categorias, id];
    actualizar({ cat: siguiente.join(','), destacados: '' });
  }

  function alternarTipo(id) {
    const siguiente = tipos.includes(id) ? tipos.filter((tipo) => tipo !== id) : [...tipos, id];
    actualizar({ tipo: siguiente.join(','), destacados: '' });
  }

  function limpiar() {
    setParams({}, { replace: true });
    setVerTodasRecientes(false);
  }

  function buscarEmpleo() {
    actualizar({ tipo: 'empleo', destacados: '', cat: '', q: '', publicar: '' });
    document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="pb-8">
      <section className="relative isolate overflow-hidden" aria-labelledby="titulo-bolsa">
        <img
          src={HERO_BOLSA}
          alt="Ilustración de la iglesia y las casas de Chapulhuacanito entre cerros de la Huasteca"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[70%_40%]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 via-40% to-transparent" />
        <img src={cempasuchilIzq} alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-6 -left-10 -z-10 w-28 sm:w-40" />
        <img src={cempasuchilDer} alt="" aria-hidden="true" className="pointer-events-none absolute -right-8 bottom-6 -z-10 hidden w-36 md:block" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-[0.16em] text-white/90 sm:text-sm">BOLSA DE TRABAJO Y SERVICIOS LOCALES</p>
            <div className="mt-3 flex flex-wrap items-start gap-4">
              <h1 id="titulo-bolsa" className="texto-sombra max-w-xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                Talento y servicios <span className="block">de nuestra gente</span>
              </h1>
              <p className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-naranja-700 shadow-tarjeta lg:mt-3 lg:-rotate-2">
                Apoyemos el talento local
              </p>
            </div>
            <p className="texto-sombra mt-4 max-w-xl text-base text-white/95 sm:text-lg">
              Conecta con personas y negocios locales. Encuentra servicios, empleos, profesionales y emprendimientos de nuestra comunidad.
            </p>
            <form
              className="mt-6 max-w-2xl"
              role="search"
              onSubmit={(evento) => {
                evento.preventDefault();
                document.getElementById('resultados')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <label htmlFor="buscar-bolsa" className="sr-only">¿Qué servicio o profesional estás buscando?</label>
              <div className="flex items-center rounded-full bg-white p-1.5 pl-4 shadow-suave ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-naranja">
                <Icon id="i-buscar" className="icono h-5 w-5 shrink-0 text-tinta/50" />
                <input
                  id="buscar-bolsa"
                  type="search"
                  value={q}
                  onChange={(evento) => actualizar({ q: evento.target.value, destacados: '' })}
                  placeholder="¿Qué servicio o profesional estás buscando?"
                  className="min-h-11 w-full min-w-0 bg-transparent px-3 py-2.5 text-base text-tinta placeholder:text-tinta/50 focus:outline-none"
                />
                <button type="submit" className={`shrink-0 rounded-full bg-naranja px-4 py-2.5 text-sm font-semibold text-white hover:bg-naranja-600 sm:px-5 ${anillo}`}>
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 -mt-6 rounded-3xl bg-white p-3 shadow-suave sm:p-4">
          <div className="sin-scroll flex gap-2 overflow-x-auto pb-1" role="toolbar" aria-label="Categorías">
            <button type="button" aria-pressed={categorias.length === 0 && !soloDestacados} onClick={() => actualizar({ cat: '', destacados: '' })} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold ${categorias.length === 0 && !soloDestacados ? 'bg-naranja text-white' : 'bg-crema text-tinta'} ${anillo}`}>
              <Icon id="i-cuadros" className="icono h-4 w-4" />
              Todos
            </button>
            {CATEGORIAS.map((cat) => {
              const activo = categorias.length === 1 && categorias[0] === cat.id;
              return (
                <button key={cat.id} type="button" aria-pressed={activo} onClick={() => actualizar({ cat: activo ? '' : cat.id, destacados: '' })} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-4 text-sm font-semibold ${activo ? `${cat.tono} text-white` : 'bg-crema text-tinta'} ${anillo}`}>
                  <Icon id={cat.icono} className="icono h-4 w-4" />
                  {cat.nombre}
                </button>
              );
            })}
            <button type="button" aria-expanded={masCategorias} onClick={() => setMasCategorias((valor) => !valor)} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-naranja/40 bg-white px-4 text-sm font-semibold text-naranja-700 ${anillo}`}>
              <Icon id="i-mas" className="icono h-4 w-4" />
              Más categorías
            </button>
          </div>
          {masCategorias ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {CATEGORIAS_EXTRA.map((cat) => {
                const activo = categorias.includes(cat.id);
                return (
                  <button key={cat.id} type="button" aria-pressed={activo} onClick={() => alternarCategoria(cat.id)} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold ${activo ? `${cat.tono} text-white` : 'bg-crema text-tinta'} ${anillo}`}>
                    <Icon id={cat.icono} className="icono h-4 w-4" />
                    {cat.nombre}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>

        <div className="mt-6 lg:grid lg:grid-cols-[17.5rem_minmax(0,1fr)] lg:items-start lg:gap-8">
          <div className="lg:sticky lg:top-24">
            <button type="button" className={`mb-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-4 font-semibold shadow-tarjeta lg:hidden ${anillo}`} aria-expanded={filtrosAbiertos} aria-controls="filtros-bolsa" onClick={() => setFiltrosAbiertos((valor) => !valor)}>
              <Icon id="i-filtro" className="icono h-5 w-5" />
              Filtros{filtrosActivos ? ` (${[q, zona, soloDestacados ? '1' : '', ...categorias, ...tipos].filter(Boolean).length})` : ''}
            </button>
            <aside id="filtros-bolsa" className={`${filtrosAbiertos ? 'block' : 'hidden'} rounded-3xl bg-white p-4 shadow-tarjeta lg:block lg:p-5`} aria-label="Filtros de la bolsa">
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-base font-bold">Filtros</h2>
                <button type="button" onClick={limpiar} className={`min-h-11 text-sm font-semibold text-naranja-700 hover:text-naranja ${anillo}`}>Limpiar filtros</button>
              </div>
              <label htmlFor="filtro-q" className="text-sm font-semibold">Buscar en esta sección</label>
              <div className="mt-2 flex items-center rounded-xl border border-crema-200 bg-crema px-3">
                <Icon id="i-buscar" className="icono h-4 w-4 text-tinta/50" />
                <input id="filtro-q" type="search" value={q} onChange={(evento) => actualizar({ q: evento.target.value, destacados: '' })} placeholder="Buscar en esta sección…" className="min-h-11 w-full bg-transparent px-2 text-base focus:outline-none" />
              </div>

              <label htmlFor="filtro-categoria" className="mt-4 block text-sm font-semibold">Categoría</label>
              <select id="filtro-categoria" className="mt-2 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3 text-base" value={categorias.length === 1 ? categorias[0] : ''} onChange={(evento) => actualizar({ cat: evento.target.value, destacados: '' })}>
                <option value="">{categorias.length > 1 ? 'Varias categorías' : 'Todas las categorías'}</option>
                {TODAS_CATEGORIAS.map((cat) => <option key={cat.id} value={cat.id}>{cat.nombre}</option>)}
              </select>
              <fieldset className="mt-3">
                <legend className="sr-only">Filtrar por varias categorías</legend>
                <ul className="max-h-52 space-y-1 overflow-auto pr-1">
                  {TODAS_CATEGORIAS.map((cat) => (
                    <li key={cat.id}>
                      <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-1 text-sm hover:bg-crema">
                        <input type="checkbox" className="h-5 w-5 accent-[#b84a0c]" checked={categorias.includes(cat.id)} onChange={() => alternarCategoria(cat.id)} />
                        {cat.nombre}
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>

              <label htmlFor="filtro-zona" className="mt-4 block text-sm font-semibold">Zona</label>
              <select id="filtro-zona" className="mt-2 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3 text-base" value={zona} onChange={(evento) => actualizar({ zona: evento.target.value, destacados: '' })}>
                <option value="">Todas las zonas</option>
                {ZONAS.map((item) => <option key={item.id} value={item.id}>{item.nombre}</option>)}
              </select>

              <fieldset className="mt-4">
                <legend className="text-sm font-semibold">Tipo de publicación</legend>
                <ul className="mt-1">
                  {TIPOS.map((tipo) => (
                    <li key={tipo.id}>
                      <label className="flex min-h-11 cursor-pointer items-center gap-3 text-sm">
                        <input type="checkbox" className="h-5 w-5 accent-[#b84a0c]" checked={tipos.includes(tipo.id)} onChange={() => alternarTipo(tipo.id)} />
                        {tipo.nombre}
                      </label>
                    </li>
                  ))}
                </ul>
              </fieldset>

              <label htmlFor="filtro-orden" className="mt-2 block text-sm font-semibold">Ordenar por</label>
              <select id="filtro-orden" className="mt-2 min-h-11 w-full rounded-xl border border-crema-200 bg-white px-3 text-base" value={orden} onChange={(evento) => actualizar({ orden: evento.target.value })}>
                {ORDENES.map((opcion) => <option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>)}
              </select>
            </aside>
          </div>

          <div id="resultados" className="mt-6 scroll-mt-28 lg:mt-0">
            <p className="text-sm text-tinta/70" aria-live="polite">
              {publicaciones.length === 1 ? '1 publicación de ejemplo' : `${publicaciones.length} publicaciones de ejemplo`}
            </p>

            {publicaciones.length === 0 ? (
              <div className="mt-4">
                <EmptyState title="No hay publicaciones con esos filtros" text="Prueba con otra palabra, otra zona o limpia los filtros para ver el talento de la comunidad." onClear={limpiar} />
              </div>
            ) : (
              <>
                {destacados.length > 0 ? (
                  <section className="mt-4" aria-labelledby="titulo-destacados">
                    <div className="mb-3 flex items-end justify-between gap-3">
                      <h2 id="titulo-destacados" className="text-xl font-bold sm:text-2xl">Servicios destacados</h2>
                      <button type="button" onClick={() => actualizar({ destacados: '1', cat: '', tipo: '', zona: '', q: '' })} className={`inline-flex min-h-11 shrink-0 items-center gap-1 text-sm font-semibold text-naranja-700 ${anillo}`}>
                        Ver todos
                        <Icon id="i-chevron" className="icono h-4 w-4" />
                      </button>
                    </div>
                    <div className="sin-scroll -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 xl:grid-cols-4">
                      {destacados.slice(0, soloDestacados ? destacados.length : 4).map((item) => (
                        <TarjetaPublicacion key={item.id} publicacion={item} destacada favorito={favoritos.has(item.id)} onFavorito={alternarFavorito} />
                      ))}
                    </div>
                  </section>
                ) : null}

                {recientesBase.length > 0 ? (
                  <section className="mt-10" aria-labelledby="titulo-recientes">
                    <div className="mb-3 flex items-end justify-between gap-3">
                      <h2 id="titulo-recientes" className="text-xl font-bold sm:text-2xl">Publicaciones recientes</h2>
                      {recientesBase.length > 8 && !verTodasRecientes ? (
                        <button type="button" onClick={() => setVerTodasRecientes(true)} className={`inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-naranja-700 ${anillo}`}>
                          Ver todos
                          <Icon id="i-chevron" className="icono h-4 w-4" />
                        </button>
                      ) : null}
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {recientes.map((item) => (
                        <TarjetaPublicacion key={item.id} publicacion={item} favorito={favoritos.has(item.id)} onFavorito={alternarFavorito} />
                      ))}
                    </div>
                  </section>
                ) : null}
              </>
            )}

            <section className="mt-10 rounded-3xl bg-white p-5 shadow-tarjeta sm:p-8" aria-labelledby="titulo-publica">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-xl">
                  <p className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-naranja-50 text-naranja" aria-hidden="true">
                    <Icon id="i-megafono" className="icono h-6 w-6" />
                  </p>
                  <h2 id="titulo-publica" className="mt-3 text-2xl font-extrabold leading-tight">Publica tus servicios o busca talento</h2>
                  <p className="mt-2 text-tinta/75">Forma parte de la comunidad. Publica tu perfil profesional, ofrece tus servicios o busca oportunidades en la comunidad.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button type="button" onClick={() => abrirPublicar('servicio')} className={`inline-flex min-h-12 items-center justify-center rounded-full bg-naranja px-5 font-semibold text-white shadow-md shadow-naranja/30 hover:bg-naranja-600 ${anillo}`}>
                    Publicar mi servicio
                  </button>
                  <button type="button" onClick={buscarEmpleo} className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 font-semibold text-naranja-700 ring-1 ring-naranja/40 hover:bg-naranja-50 ${anillo}`}>
                    Buscar empleo
                  </button>
                </div>
              </div>
              <h3 className="mt-8 text-lg font-bold">¿Qué puedes publicar?</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                {[
                  ['i-maletin', 'Tus servicios profesionales'],
                  ['i-tienda', 'Tus productos o emprendimiento'],
                  ['i-portapapeles', 'Trabajos o empleo'],
                  ['i-imagen', 'Fotos o videos de tu trabajo'],
                  ['i-ubicacion', 'Tu ubicación y horarios'],
                ].map(([icono, texto]) => (
                  <li key={texto} className="rounded-2xl bg-crema p-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-naranja shadow-sm">
                      <Icon id={icono} className="icono h-5 w-5" />
                    </span>
                    <p className="mt-3 text-sm font-semibold leading-snug">{texto}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      <PanelPublicar
        abierto={panel}
        tipoInicial={tipoPanel}
        onCerrar={cerrarPublicar}
        onPublicada={() => {
          setVersion((valor) => valor + 1);
          setVerTodasRecientes(true);
        }}
      />
    </div>
  );
}
