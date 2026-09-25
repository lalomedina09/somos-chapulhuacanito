import { Link } from 'react-router-dom';

const className =
  'inline-flex w-fit scroll-mb-28 items-center gap-2 rounded-full bg-naranja px-6 py-3 font-semibold text-white shadow-md shadow-naranja/30 transition hover:bg-naranja-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja lg:scroll-mb-0';

export default function PrimaryButton({ children, type = 'button', className: extra = '', ...props }) {
  return (
    <button type={type} className={`${className} ${extra}`} {...props}>
      {children}
    </button>
  );
}

export function PrimaryLink({ to, children, className: extra = '' }) {
  return (
    <Link to={to} className={`${className} ${extra}`}>
      {children}
    </Link>
  );
}
