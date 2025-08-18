import React from 'react';
import type { Task } from '../data/tasks';
import Glossary from './Glossary';

export default function ResearchSection({ tasks }: { tasks: Task[] }) {
  if (!tasks?.length) return null;

  const [active, setActive] = React.useState(0);

  return (
    <section className="container section-gap" id="investigacion" aria-labelledby="investigacion-title">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="section-title text-center" id="investigacion-title">Investigación</h2>

          {tasks.length > 1 && (
            <ul className="nav nav-pills justify-content-center mb-4">
              {tasks.map((t, i) => (
                <li key={t.id} className="nav-item">
                  <button
                    className={`nav-link ${i === active ? 'active' : ''}`}
                    onClick={() => setActive(i)}
                  >
                    {t.title}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {tasks.map((t, i) => (
            <article key={t.id} style={{ display: i === active ? 'block' : 'none' }}>
              <div className="plain-block mb-3">
                <h3 className="h5 mb-2">{t.title}</h3>
                {t.description && <p className="mb-2 text-secondary">{t.description}</p>}

                {t.entries ? (
                  <Glossary entries={t.entries} />
                ) : t.content ? (
                  <pre className="plain-text mt-2">{t.content}</pre>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
