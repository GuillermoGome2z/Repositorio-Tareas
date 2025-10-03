// src/data/glossary_hooks.ts
import type { GlossaryEntry } from "./glossary.types";


export const glossaryHooks: GlossaryEntry[] = [
  {
    term: "useState",
    signature: "const [state, setState] = useState(valorInicial)",
    def:
      "Gestiona estado local en un componente. Al actualizar el estado, React vuelve a renderizar el componente.",
    whenToUse:
      "• Formularios, toggles, contadores, flags de UI.\n• Cuando el estado pertenece solo a este componente.",
    example: `
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicks: {count}
    </button>
  );
}
    `.trim(),
  },
  {
    term: "useEffect",
    signature: "useEffect(efecto, dependencias?)",
    def:
      "Ejecuta efectos secundarios después del render (fetch, timers, suscripciones). Puede devolver una función de limpieza.",
    whenToUse:
      "• Llamadas a APIs / fetch.\n• Subscribirse a eventos (y limpiar al desmontar).\n• Sincronizar cosas fuera de React (título, localStorage).",
    example: `
import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const res = await fetch("/api/users");
      const data = await res.json();
      if (!cancelled) setUsers(data);
    }
    load();
    return () => { cancelled = true; };
  }, []); // solo una vez

  return <ul>{users.map(u => <li key={u}>{u}</li>)}</ul>;
}
    `.trim(),
  },
  {
    term: "useMemo",
    signature: "const value = useMemo(() => calcular(...), [deps])",
    def:
      "Memoriza el resultado de un cálculo costoso; solo se recalcula cuando cambian sus dependencias.",
    whenToUse:
      "• Cálculos pesados o filtrados sobre listas grandes.\n• Evitar trabajo repetido en cada render.",
    example: `
import { useMemo, useState } from "react";

export default function Filter({ items }: { items: { active: boolean; name: string }[] }) {
  const [onlyActive, setOnlyActive] = useState(true);

  const filtered = useMemo(
    () => items.filter(i => (onlyActive ? i.active : true)),
    [items, onlyActive]
  );

  return (
    <>
      <label>
        <input type="checkbox" checked={onlyActive}
               onChange={e => setOnlyActive(e.target.checked)} />
        Solo activos
      </label>
      <ul>{filtered.map(i => <li key={i.name}>{i.name}</li>)}</ul>
    </>
  );
}
    `.trim(),
  },
  {
    term: "useRef",
    signature: "const ref = useRef<T>(valorInicial)",
    def:
      "Guarda un valor mutable que persiste entre renders sin provocar re-render. También referencia nodos del DOM.",
    whenToUse:
      "• Enfocar un input o leer medidas de un elemento del DOM.\n• Guardar IDs de intervalos o valores que no deben disparar renders.",
    example: `
import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>
        Focus
      </button>
    </>
  );
}
    `.trim(),
  },
  {
    term: "useContext",
    signature: "const value = useContext(MiContexto)",
    def:
      "Consume el valor proporcionado por un Context Provider. Evita 'prop drilling' para datos compartidos.",
    whenToUse:
      "• Tema (dark/light), usuario autenticado, idioma, configuración global.\n• Cuando pasas las mismas props por muchos niveles.",
    example: `
import { createContext, useContext } from "react";

const ThemeContext = createContext<"light" | "dark">("light");

function Panel() {
  const theme = useContext(ThemeContext);
  return <div data-theme={theme}>Contenido</div>;
}

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Panel />
    </ThemeContext.Provider>
  );
}
    `.trim(),
  },
  {
    term: "useReducer",
    signature: "const [state, dispatch] = useReducer(reducer, estadoInicial)",
    def:
      "Alternativa a useState para manejar estados complejos o múltiples transiciones con una función reductora.",
    whenToUse:
      "• El siguiente estado depende del anterior.\n• Hay múltiples acciones claras (ADD, REMOVE, TOGGLE...).\n• Quieres centralizar la lógica de actualización.",
    example: `
import { useReducer } from "react";

type State = { count: number };
type Action = { type: "inc" } | { type: "dec" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    default:    return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <span style={{ padding: "0 8px" }}>{state.count}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </>
  );
}
    `.trim(),
  },
  {
    term: "useCallback",
    signature: "const memoFn = useCallback(fn, dependencias)",
    def:
      "Memoriza la identidad de una función para que su referencia se mantenga estable entre renders.",
    whenToUse:
      "• Evitar renders innecesarios en hijos memorizados que reciben callbacks.\n• Usar una función estable como dependencia de otros hooks.",
    example: `
import { useCallback, useState } from "react";

export default function Items() {
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = useCallback((item: string) => {
    setItems(prev => [...prev, item]);
  }, []); // referencia estable

  // handleAdd se puede pasar a un hijo memorizado sin causar re-render
  return (
    <>
      <button onClick={() => handleAdd(String(Date.now()))}>Agregar</button>
      <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
    </>
  );
}
    `.trim(),
  },
];
