# Sec2John Landing Page

![Sec2John Logo](https://i.imgur.com/TnjScnh.png)

## Sobre El Proyecto

Una recreación de la página web del creador y analista de ciberseguridad Sec2John, utilizando Astro y Tailwind para una UI mas estetica.

### Construido Con

* [Astro](https://astro.build/)
* [Tailwind CSS](https://tailwindcss.com/)

## Empezando

Para obtener una copia local en funcionamiento, siga estos sencillos pasos de ejemplo.

### Prerrequisitos

- Tener node.js instalado
- Tener cuenta de Cloudflare
- Saberle a Git

### Instalación

1. Clona el repositorio
   ```sh
   git clone https://github.com/your_username_/out-out.git
   ```
2. Instala los paquetes NPM
   ```sh
   npm install
   ```

## Despliegue en Cloudflare Pages

1.  **Hacer un Fork del Repositorio:**
    *   Haz clic en el botón "Fork" para crear una copia en tu propia cuenta.

2.  **Crear un Proyecto en Cloudflare Pages:**
    *   Inicia sesión en tu [dashboard de Cloudflare](https://dash.cloudflare.com/).
    *   En el menú, ve a `Workers & Pages`.
    *   Haz clic en `Crear aplicación` > `Pages` > `Conectar a Git`.

3.  **Seleccionar tu Repositorio:**
    *   Elige el repositorio que acabas de "forkear".

4.  **Configurar el Despliegue:**
    *   Cloudflare Pages detectará que es un proyecto de Astro. Asegúrate de que la configuración sea la siguiente:
        *   **Framework preset:** `Astro`
        *   **Comando de build:** `npm run build`
        *   **Directorio de salida:** `dist`

5.  **Desplegar:**
    *   Haz clic en `Guardar y Desplegar`. ¡Y listo! Tu proyecto estará online.

## Estructura de Carpetas

```
.
├── public/
│   ├── mp3/
│   │   └── song1.mp3
│   │   └── song2.mp3
│   │   └── song3.mp3
│   └── favicon.svg
│   └── Banner.png
│   └── s2j_av.png
├── src/
│   ├── components/
|   |   └── Contenido.astro
|   |   └── Footer.astro
|   |   └── Header.astro
|   |   └── Musica.astro
│   |   └── SobreMi.astro
│   ├── data/
│   │   └── sec2john.json -- Scrapear esto me dio depresión
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│   |   └──api/
|   |   |   └──ContenidoAPI.ts
│   |   └── index.astro
│   └── styles/
│       └── global.css
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

No hay nada especial en `src/components/`, pero ahí es donde nos gusta poner cualquier componente Astro.

Cualquier activo estático, como imágenes, se puede colocar en el directorio `public/`.

## Autores

* **sec2john** - *Creador del proyecto original* - [sec2john](https://github.com/sec2john)

* **ArcGabicho** - *Fan* - [ArcGabicho](https://github.com/ArcGabicho)