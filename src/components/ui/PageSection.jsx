export default function PageSection({ children, className = '' }) {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ${className}`}>
      {children}
    </section>
  );
}
