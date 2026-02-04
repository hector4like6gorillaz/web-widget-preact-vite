# Widget Boilerplate (Preact + Vite)

Plantilla para crear widgets web embebibles de alto rendimiento.

## 🚀 Desarrollo

1. Instalar dependencias:
   `yarn install`

2. Crear archivo de entorno:
   `cp .env.example .env`

3. Iniciar servidor de desarrollo:
   `yarn dev`

## 📦 Construcción (Build)

Para generar el archivo `.js` final:

`yarn build`

El archivo se generará en `dist/widget.bundle.js`.

## 🌐 Cómo usar en una web externa

### Opción A: Web Component (Recomendada)
Agrega el script y usa la etiqueta:

```html
<script src="https://tu-cdn.com/widget.bundle.js"></script>
<mi-widget-pro initial-id="55"></mi-widget-pro>