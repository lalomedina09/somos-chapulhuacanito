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

`npm run build` copia `index.html` a `dist/404.html`. Así, al publicar el contenido de `dist/` en GitHub Pages, un refresco en una ruta interna (por ejemplo `/somos-chapulhuacanito/avisos`) sigue abriendo la aplicación.

## Rutas

`/`, `/comunidad`, `/avisos`, `/negocios`, `/transporte`, `/servicios`, `/eventos`, `/cultura`, `/turismo`, `/noticias`, `/mapa`, `/reportar`.

Las fichas de ejemplo viven en `/avisos/:id`, `/negocios/:id`, `/eventos/:id`, `/turismo/:id` y `/noticias/:id`. Cualquier otra dirección muestra la página 404.

El texto de las secciones internas está en `src/data`. Es ficticio (barrios, negocios, horarios y folios de muestra). Los teléfonos usan 481 000 0000 y los correos, dominios `ejemplo`.
