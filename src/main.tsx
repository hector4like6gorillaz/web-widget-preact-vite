import { render } from "preact";
import register from "preact-custom-element";
import Widget from "./Widget";

// 1. Definir el nombre de la etiqueta HTML
const WIDGET_TAG_NAME = "template-widget";

// 2. Definir qué atributos observará el Web Component
// (Si cambian en el HTML, el componente se actualiza)
const observedAttributes = ['initial-id'] as any; 

// 3. Registrar el Web Component
// shadow: false es CRÍTICO para que los estilos inyectados funcionen sin dolor de cabeza
register(Widget, WIDGET_TAG_NAME, observedAttributes, { shadow: false });

// 4. (Opcional) Exponer método global para inicialización manual
// Útil para integraciones legacy
const mount = (el: HTMLElement, props: any) => {
  render(<Widget {...props} />, el);
};

const unmount = (el: HTMLElement) => {
  render(null, el);
};

// Exponemos al objeto window global
(window as any).MyWidget = {
  init: mount,
  unmount: unmount,
  tagName: WIDGET_TAG_NAME,
};

console.log(`Widget ${WIDGET_TAG_NAME} loaded!`);
