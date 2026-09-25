import papel from '../../assets/img/secciones/papel-picado.svg';

export default function PageHero({ kicker, title, intro, children, art }) {
  return (
    <section className="relative overflow-hidden border-b border-crema-200 bg-white">
      {art ? (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] lg:block" aria-hidden="true">
          <img src={art} alt="" className="h-full w-full object-cover object-left" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0.96)_16%,rgba(255,255,255,0.72)_40%,rgba(255,255,255,0)_72%)]" />
        </div>
      ) : null}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-balance font-mano text-3xl font-bold text-naranja sm:text-4xl">{kicker}</p>
        <h1 className="mt-1 text-balance text-3xl font-extrabold tracking-tight text-tinta sm:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-tinta/75">{intro}</p> : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3 bg-repeat-x"
        style={{ backgroundImage: `url(${papel})`, backgroundSize: 'auto 100%' }}
      />
    </section>
  );
}
