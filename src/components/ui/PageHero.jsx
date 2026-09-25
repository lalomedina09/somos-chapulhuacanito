export default function PageHero({ kicker, title, intro, children }) {
  return (
    <section className="border-b border-crema-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="font-mano text-3xl font-bold text-naranja sm:text-4xl">{kicker}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-tinta sm:text-5xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-2xl text-lg text-tinta/75">{intro}</p> : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </section>
  );
}
