import { defineConfig, loadEnv } from "vite";
import preact from "@preact/preset-vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { resolve } from "path";

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno según el modo (development/production)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      preact(),
      cssInjectedByJsPlugin(), // Inyecta el CSS en el JS final
    ],
    // Definir variables globales para que el código pueda leerlas
    define: {
      "process.env": env,
    },
    build: {
      lib: {
        // El punto de entrada para producción es main.tsx (donde registras el web component)
        entry: resolve(__dirname, "src/main.tsx"),
        name: "MyWidget", // Nombre global (window.MyWidget)
        fileName: (format) => `widget.bundle.js`, // Nombre del archivo final
        formats: ["es", "umd"], // 'es' para moderno, 'umd' para compatibilidad
      },
      rollupOptions: {
        // IMPORTANTE: Dejar external vacío.
        // Queremos que Preact venga DENTRO del bundle para que el widget
        // funcione en cualquier web sin pedir dependencias extra.
        external: [],
      },
      // Minificar para reducir peso
      minify: "esbuild",
    },
    server: {
      port: 3000, // Puerto para desarrollo
    },
  };
});
