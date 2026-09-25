import { Link } from 'react-router-dom';
import { quickAccess } from '../data/quickAccess';
import Icon from './Icon';

export default function QuickAccess() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:-mt-24 lg:px-8" aria-label="Accesos rápidos">
      <ul className="grid grid-cols-4 gap-x-2 gap-y-5 rounded-3xl bg-white p-4 shadow-suave sm:p-6 lg:grid-cols-8 lg:gap-4">
        {quickAccess.map((item) => (
          <li key={item.id}>
            <Link to={item.to} className="group flex flex-col items-center gap-2 text-center">
              <span
                className={`grid h-14 w-14 place-items-center rounded-2xl transition group-hover:-translate-y-1 lg:h-16 lg:w-16 ${item.tileClass}`}
              >
                <Icon id={item.icon} className={item.iconClass} />
              </span>
              <span className="text-xs font-semibold sm:text-sm">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
