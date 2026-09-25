import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function jump(top) {
  const root = document.documentElement;
  root.style.scrollBehavior = 'auto';
  // Fuerza el recálculo para que scroll-behavior: smooth del <html> no anime este salto.
  void root.offsetHeight;
  window.scrollTo(0, top);
}

function scrollForLocation(hash) {
  if (!hash) {
    jump(0);
    return;
  }

  const el = document.getElementById(hash.slice(1));
  if (!el) {
    jump(0);
    return;
  }

  const headerH = document.querySelector('header')?.offsetHeight ?? 0;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
  jump(Math.max(0, top));
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    const root = document.documentElement;
    scrollForLocation(hash);
    const frame = requestAnimationFrame(() => {
      scrollForLocation(hash);
      root.style.scrollBehavior = '';
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
