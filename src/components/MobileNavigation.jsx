import { Link, NavLink } from 'react-router-dom';
import { bottomNav } from '../data/nav';
import Icon from './Icon';

function itemClass(isActive) {
  return isActive
    ? 'flex flex-col items-center gap-0.5 py-1 text-[11px] font-semibold text-naranja'
    : 'flex flex-col items-center gap-0.5 py-1 text-[11px] font-medium text-tinta/60';
}

export default function MobileNavigation() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 lg:hidden" aria-label="Navegación inferior">
      <ul className="mx-auto grid max-w-md grid-cols-5 items-end rounded-t-3xl border-t border-crema-200 bg-white/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_24px_-12px_rgba(92,52,20,0.3)] backdrop-blur">
        {bottomNav.map((item) => {
          if (item.center) {
            return (
              <li key={item.label} className="flex justify-center">
                <NavLink
                  to={item.to}
                  className="-mt-7 grid h-14 w-14 place-items-center rounded-full border-0 bg-naranja text-white shadow-lg shadow-naranja/40 ring-4 ring-white transition hover:bg-naranja-600"
                  aria-label={item.label}
                >
                  <Icon id={item.icon} className="icono h-7 w-7" />
                </NavLink>
              </li>
            );
          }

          if (item.disabled) {
            return (
              <li key={item.label}>
                <button type="button" className={`${itemClass(false)} w-full border-0 bg-transparent font-sans`}>
                  <Icon id={item.icon} className="icono h-6 w-6" />
                  {item.label}
                </button>
              </li>
            );
          }

          if (item.hash) {
            return (
              <li key={item.label}>
                <Link to={item.to} className={itemClass(false)}>
                  <Icon id={item.icon} className="icono h-6 w-6" />
                  {item.label}
                </Link>
              </li>
            );
          }

          return (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => `${itemClass(isActive)}${item.badge ? ' relative' : ''}`}
              >
                <Icon id={item.icon} className="icono h-6 w-6" />
                {item.label}
                {item.badge ? <span className="absolute right-[26%] top-0.5 h-2 w-2 rounded-full bg-naranja" /> : null}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
