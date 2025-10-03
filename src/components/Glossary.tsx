// src/components/Glossary.tsx
import React from "react";
import type { GlossaryEntry } from "../data/glossary.types";

// Normaliza texto (maneja undefined/null)
function normalize(s?: string) {
  return (s ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Glossary({ entries }: { entries: GlossaryEntry[] }) {
  const [q, setQ] = React.useState("");
  const [letter, setLetter] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    const byQ = (e: GlossaryEntry) => {
      // Armamos un "haystack" con todos los campos posibles
      const haystack = [
        e.term,
        // compatibilidad con tu esquema anterior:
        (e as any).def,
        // campos nuevos opcionales:
        e.description,
        (e as any).definition, // por si el tipo aún no lo declara
        (e as any).signature,
        (e as any).whenToUse,
        (e as any).example,
      ]
        .filter(Boolean)
        .join(" ");

      return !q || normalize(haystack).includes(normalize(q));
    };

    const byLetter = (e: GlossaryEntry) =>
      !letter || normalize(e.term).startsWith(letter.toLowerCase());

    return entries
      .filter(byQ)
      .filter(byLetter)
      .sort((a, b) => a.term.localeCompare(b.term, "es", { sensitivity: "base" }));
  }, [entries, q, letter]);

  const groups = React.useMemo(() => {
    return filtered.reduce<Record<string, GlossaryEntry[]>>((acc, e) => {
      const k = (e.term?.charAt(0) || "#").toUpperCase();
      (acc[k] ||= []).push(e);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <div className="glossary">
      {/* Toolbar */}
      <div className="glossary-toolbar">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar término o definición…"
          className="form-control form-control-lg"
          aria-label="Buscar en glosario"
        />

        <div className="letters mt-3">
          <button
            className={`letter-pill ${letter === null ? "active" : ""}`}
            onClick={() => setLetter(null)}
          >
            Todos
          </button>
          {LETTERS.map((L) => (
            <button
              key={L}
              className={`letter-pill ${letter === L ? "active" : ""}`}
              onClick={() => setLetter(L)}
            >
              {L}
            </button>
          ))}
        </div>
      </div>

      {/* Listado */}
      <div className="glossary-list mt-3">
        {Object.keys(groups).length === 0 && (
          <p className="text-secondary">No hay resultados.</p>
        )}

        {Object.entries(groups).map(([L, arr]) => (
          <details key={L} open={!!letter || q.length > 0}>
            <summary className="glossary-letter">
              {L} <span className="count">{arr.length}</span>
            </summary>

            <ul className="glossary-ul">
              {arr.map((e) => {
                // Campos nuevos (opcionales)
                const signature = (e as any).signature as string | undefined;
                const definition =
                  ((e as any).definition as string | undefined) ?? e.description;
                const whenToUse = (e as any).whenToUse as string | undefined;
                const example = (e as any).example as string | undefined;

                // Compat: si no hay campos nuevos, usamos e.def (esquema anterior)
                const legacyDef = (e as any).def as string | undefined;
                const isStructured =
                  signature || definition || whenToUse || example;

                return (
                  <li key={e.term} className="gloss-row">
                    <strong className="term d-block mb-2">{e.term}</strong>

                    {isStructured ? (
                      <div className="def d-flex flex-column gap-2">
                        {signature && (
                          <p className="mb-0">
                            <strong>Firma: </strong>
                            <code>{signature}</code>
                          </p>
                        )}

                        {definition && (
                          <p className="mb-0">
                            <strong>Definición: </strong>
                            <span>{definition}</span>
                          </p>
                        )}

                        {whenToUse && (
                          <div>
                            <strong>Cuándo usar: </strong>
                            <div style={{ whiteSpace: "pre-line" }}>
                              {whenToUse}
                            </div>
                          </div>
                        )}

                        {example && (
                          <div className="mt-1">
                            <strong>Ejemplo:</strong>
                            <pre className="mt-2 mb-0">
                              <code>{example}</code>
                            </pre>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Fallback al esquema viejo (term + def)
                      <span className="def" style={{ whiteSpace: "pre-line" }}>
                        {legacyDef ?? ""}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
