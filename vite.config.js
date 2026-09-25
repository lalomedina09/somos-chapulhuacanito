import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Copia index.html a 404.html para que GitHub Pages sirva la SPA
// en enlaces directos (/bolsa-de-trabajo y fichas). No modifica workflows.
function copia404() {
  return {
    name: 'copia-404',
    closeBundle() {
      const dist = resolve('dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      copyFileSync(resolve('.nojekyll'), resolve(dist, '.nojekyll'))
    },
  }
}

export default defineConfig({
  base: '/somos-chapulhuacanito/',
  plugins: [react(), tailwindcss(), copia404()],
  preview: {
    // El preview de Vite resuelve rutas profundas de la SPA dentro del base.
    strictPort: false,
  },
})
