import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** Copia index.html a 404.html para que GitHub Pages sirva la SPA en rutas directas. */
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve('dist');
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'));
    },
  };
}

export default defineConfig(({ mode }) => ({
  // Desarrollo en /. El build y `vite preview` (mode production) usan el subpath de GitHub Pages.
  base: mode === 'production' ? '/somos-chapulhuacanito/' : '/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
}));
