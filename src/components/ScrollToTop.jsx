import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function scrollForLocation(hash) {
  if (!hash) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return;
  }

  const el = document.getElementById(hash.slice(1));
  if (!el) {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return;
  }

  const headerH = document.querySelector('header')?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' });
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    scrollForLocation(hash);
    const frame = requestAnimationFrame(() => scrollForLocation(hash));
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
