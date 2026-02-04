import { useState, useEffect } from "preact/hooks";
import styles from "./Widget.module.css";

// Definimos las Props que aceptará el Web Component
interface WidgetProps {
  initialId?: string; // Los atributos HTML siempre vienen como string
}

export default function Widget({ initialId = "1" }: WidgetProps) {
  const [count, setCount] = useState(parseInt(initialId));

  // Ejemplo de uso de variable de entorno
  const title = import.meta.env.VITE_WIDGET_TITLE || "Widget";

  return (
    <div className={styles.widgetContainer}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <span className={styles.badge}>ID: {count}</span>
      </div>

      <div className={styles.body}>
        <p>Este es un widget flotante encapsulado.</p>
        <div className={styles.controls}>
          <button onClick={() => setCount((c) => c - 1)}>-</button>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
}
