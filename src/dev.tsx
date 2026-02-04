import { render } from "preact";
import Widget from "./Widget";
import "./index.css"; // Estilos globales de reset para el dev (opcional)

// Simulamos el montaje en el div #app del index.html
const app = document.getElementById("app");

if (app) {
  // Renderizamos el widget directamente para probar
  render(<Widget initialId="100" />, app);

  // Opcional: Agregar un fondo o texto falso para ver como flota el widget
  const backgroundInfo = document.createElement("div");
  backgroundInfo.innerHTML = `
    <div style="padding: 20px;">
      <h1>Ambiente de Desarrollo</h1>
      <p>El widget debería aparecer flotando abajo a la derecha.</p>
    </div>
  `;
  document.body.prepend(backgroundInfo);
}
