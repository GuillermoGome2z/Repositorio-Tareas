import React from 'react';
import type { GlossaryEntry } from '../data/glossary.types';

function normalize(s: string) {
  return s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
}
const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Glossary({ entries }: { entries: GlossaryEntry[] }) {
  const [q, setQ] = React.useState('');
  const [letter, setLetter] = React.useState<string | null>(null);

  const filtered = React.useMemo(() => {
    const byQ = (e: GlossaryEntry) =>
      !q || normalize(e.term).includes(normalize(q)) || normalize(e.def).includes(normalize(q));
    const byLetter = (e: GlossaryEntry) =>
      !letter || normalize(e.term).startsWith(letter.toLowerCase());

    return entries
      .filter(byQ)
      .filter(byLetter)
      .sort((a, b) => a.term.localeCompare(b.term, 'es', { sensitivity: 'base' }));
  }, [entries, q, letter]);

  const groups = React.useMemo(() => {
    return filtered.reduce<Record<string, GlossaryEntry[]>>((acc, e) => {
      const k = e.term.charAt(0).toUpperCase();
      (acc[k] ||= []).push(e);
      return acc;
    }, {});
  }, [filtered]);

  return (
    <div className="glossary">
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
          <button className={`letter-pill ${letter === null ? 'active' : ''}`} onClick={() => setLetter(null)}>Todos</button>
          {LETTERS.map((L) => (
            <button
              key={L}
              className={`letter-pill ${letter === L ? 'active' : ''}`}
              onClick={() => setLetter(L)}
            >
              {L}
            </button>
          ))}
        </div>
      </div>

      <div className="glossary-list mt-3">
        {Object.keys(groups).length === 0 && <p className="text-secondary">No hay resultados.</p>}

        {Object.entries(groups).map(([L, arr]) => (
          <details key={L} open={!!letter || q.length > 0}>
            <summary className="glossary-letter">
              {L} <span className="count">{arr.length}</span>
            </summary>
            <ul className="glossary-ul">
              {arr.map((e) => (
                <li key={e.term} className="gloss-row">
                  <strong className="term">{e.term}</strong>
                  <span className="def">{e.def}</span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
}
