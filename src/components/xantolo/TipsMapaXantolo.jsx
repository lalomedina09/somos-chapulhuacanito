import { useState } from 'react';
import { Link } from 'react-router-dom';
import cempasuchil from '../../assets/img/cempasuchil.svg';
import cempasuchilDer from '../../assets/img/cempasuchil-der.svg';
import mapa from '../../assets/img/xantolo/mapa-xantolo.svg';
import { leyendaXantolo, pinesXantolo, tipsXantolo } from '../../data/cultura';
import Icon from '../Icon';
import Encabezado from './Encabezado';
import { anillo, seccionAncla } from './estilos';
import TiraPapel from './TiraPapel';

export default function TipsMapaXantolo() {
  const [tipo, setTipo] = useState(null);
  const [pinId, setPinId] = useState(null);
  const pin = pinesXantolo.find((item) => item.id === pinId) ?? null;

  function elegirTipo(id) {
    if (tipo === id) {
      setTipo(null);
      setPinId(null);
      return;
    }
    setTipo(id);
    const primero = pinesXantolo.find((item) => item.tipo === id);
    setPinId(primero ? primero.id : null);
  }

  function elegirPin(item) {
    setPinId(item.id);
    setTipo(item.tipo);
  }

  return (
    <div className="relative pb-8">
      <TiraPapel className="opacity-90" />
      <img
        src={cempasuchil}
        alt=""
        width="200"
        height="200"
        className="pointer-events-none absolute left-0 top-10 z-10 hidden w-24 sm:block lg:left-2 lg:w-28"
      />
      <img
        src={cempasuchilDer}
        alt=""
        width="320"
        height="420"
        className="pointer-events-none absolute bottom-0 right-0 z-10 hidden w-36 md:block lg:w-44"
      />

      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <section aria-labelledby="titulo-tips" className="relative overflow-hidden rounded-3xl bg-[#e7f6ea] shadow-tarjeta ring-1 ring-black/5">
          <div className="grid h-full lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-6 sm:p-8">
              <h2 id="titulo-tips" tabIndex={-1} className="text-3xl font-extrabold tracking-tight text-tinta outline-none">
                Tips para vivir el Xantolo
              </h2>
              <ul className="mt-6 space-y-5">
                {tipsXantolo.items.map((tip) => (
                  <li key={tip.id} className="flex gap-3">
                    <span
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white"
                      style={{ backgroundColor: tip.color }}
                    >
                      <Icon id={tip.icono} className="icono h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold leading-snug">{tip.titulo}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-tinta/75">{tip.texto}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-64 bg-[#fff8ef] lg:min-h-full">
              <img
                src={tipsXantolo.src}
                alt={tipsXantolo.alt}
                width="1280"
                height="720"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_20%] mix-blend-multiply [mask-image:linear-gradient(to_bottom,transparent,black_18%)] lg:object-contain lg:[mask-image:linear-gradient(to_right,transparent,black_16%)]"
              />
            </div>
          </div>
        </section>

        <section id="mapa" className={seccionAncla} aria-labelledby="titulo-mapa">
          <Encabezado
            id="titulo-mapa"
            title="Mapa de actividades"
            accion={
              <Link to="/mapa" className={`inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-naranja-700 ${anillo}`}>
                Ver mapa completo
                <Icon id="i-flecha" className="icono h-4 w-4" />
              </Link>
            }
          />
          <div className="mt-5 overflow-hidden rounded-2xl bg-white shadow-tarjeta ring-1 ring-black/5">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_13.5rem]">
              <div className="relative aspect-[800/520] bg-[#e7f3dc]">
                <img
                  src={mapa}
                  alt="Mapa ilustrado del centro de Chapulhuacanito en Xantolo, con río, plaza, iglesia, casas y calles"
                  width="800"
                  height="520"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                {pinesXantolo.map((item) => {
                  const activo = item.id === pinId;
                  const apagado = tipo && item.tipo !== tipo;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => elegirPin(item)}
                      aria-pressed={activo}
                      aria-label={item.titulo}
                      style={{ left: `${item.x}%`, top: `${item.y}%` }}
                      className={`absolute z-10 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full ${anillo} ${
                        activo ? 'ring-4 ring-naranja' : ''
                      } ${apagado ? 'opacity-35' : ''}`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border-2 border-white shadow"
                        style={{ backgroundColor: leyendaXantolo.find((fila) => fila.id === item.tipo)?.color }}
                      />
                    </button>
                  );
                })}
              </div>
              <ul className="space-y-1 border-t border-crema-200 p-3 lg:border-l lg:border-t-0" aria-label="Leyenda del mapa">
                {leyendaXantolo.map((fila) => {
                  const activo = tipo === fila.id;
                  return (
                    <li key={fila.id}>
                      <button
                        type="button"
                        aria-pressed={activo}
                        onClick={() => elegirTipo(fila.id)}
                        className={`flex min-h-11 w-full items-center gap-2 rounded-xl px-2 text-left text-sm font-medium ${anillo} ${
                          activo ? 'bg-naranja-50 text-tinta' : 'hover:bg-crema'
                        }`}
                      >
                        <span className="h-3.5 w-3.5 shrink-0 rounded-full" style={{ backgroundColor: fila.color }} aria-hidden="true" />
                        {fila.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mt-3 rounded-2xl bg-white px-4 py-3 text-sm shadow-tarjeta ring-1 ring-black/5" aria-live="polite">
            {pin ? (
              <>
                <p className="font-bold">{pin.titulo}</p>
                <p className="mt-1 text-tinta/75">{pin.texto}</p>
              </>
            ) : (
              <p className="text-tinta/75">Toca un punto o una categoría para ver qué hay en la fiesta.</p>
            )}
          </div>
          <p className="mt-2 text-sm text-tinta/60">Mapa ilustrado de ejemplo. Los puntos no usan un servicio de mapas.</p>
        </section>
      </div>
    </div>
  );
}
