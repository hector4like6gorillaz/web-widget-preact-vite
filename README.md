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

## 🧪 Pruebas en Local (Preview)

Para probar la versión de producción localmente simulando un servidor CDN (con CORS habilitado y sin caché):

`npx http-server dist -p 8080 --cors -c-1`

Esto levantará el servidor en `http://127.0.0.1:8080`.

## 🌐 Cómo usar en una web externa

### Opción A: Web Component (Recomendada)
Agrega el script y usa la etiqueta. 

**Para pruebas locales:**
```html
<script src="http://127.0.0.1:8080/widget.bundle.js"></script>
<mi-widget-pro initial-id="55"></mi-widget-pro>
