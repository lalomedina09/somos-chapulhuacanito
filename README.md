# Somos Chapulhuacanito

Prototipo navegable del portal comunitario de Chapulhuacanito (Huasteca Potosina). Está hecho con React, Vite, React Router y Tailwind CSS. No tiene backend ni base de datos: el contenido de las secciones internas es de ejemplo.

## Requisitos

- Node.js 20 o superior

## Desarrollo

```bash
npm install
npm run dev
```

Vite sirve la app en la raíz del servidor local:

**http://localhost:5173/**

## Compilar y previsualizar

```bash
npm run build
npm run preview
```

El build de producción usa la base `/somos-chapulhuacanito/` para GitHub Pages. La vista previa queda en:

**http://localhost:4173/somos-chapulhuacanito/**

`npm run build` copia `index.html` a `dist/404.html`. Así, un refresco en una ruta interna (por ejemplo `/somos-chapulhuacanito/avisos`) sigue abriendo la aplicación. `public/.nojekyll` llega a `dist/` para que Pages no procese el sitio con Jekyll.

## Publicación en GitHub Pages

El sitio publicado queda en **https://lalomedina09.github.io/somos-chapulhuacanito/**.

El workflow `.github/workflows/deploy.yml` compila con Node 22 (`npm ci` y `npm run build`) y publica el contenido de `dist/`. Se dispara al hacer push a `main` y también se puede lanzar a mano.

Una sola vez, al pasar el despliegue a Actions: en el repositorio, **Settings → Pages → Build and deployment → Source: GitHub Actions**. Hoy Pages sigue publicando la raíz de `main` al estilo anterior; ese ajuste se cambia en el momento del merge, no antes.

Para lanzarlo a mano: pestaña **Actions**, workflow **Publicar en GitHub Pages**, **Run workflow**.

Para ver el build de producción en local:

```bash
npm run build
npm run preview
```

**http://localhost:4173/somos-chapulhuacanito/**

Cada pull request hacia `main` ejecuta `.github/workflows/ci.yml` (`npm ci` y `npm run build`) y muestra el resultado en la comprobación del PR.

## Rutas

`/`, `/comunidad`, `/avisos`, `/negocios`, `/transporte`, `/servicios`, `/eventos`, `/cultura`, `/turismo`, `/noticias`, `/mapa`, `/reportar`.

Las fichas de ejemplo viven en `/avisos/:id`, `/negocios/:id`, `/eventos/:id`, `/turismo/:id` y `/noticias/:id`. Cualquier otra dirección muestra la página 404.

El texto de las secciones internas está en `src/data`. Es ficticio (barrios, negocios, horarios y folios de muestra). Los teléfonos usan 481 000 0000 y los correos, dominios `ejemplo`.

Las ilustraciones nuevas están en `src/assets/img/secciones`. El ícono para compartir y los favicon viven en `public/` (`og.png`, `favicon.svg`, `apple-touch-icon.png`, `icons/` y `site.webmanifest`) y se enlazan con la base de Vite.
