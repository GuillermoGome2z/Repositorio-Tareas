import React from 'react';
import type { Task } from '../data/tasks';

interface Props {
  tasks: Task[]; // Filtradas a type === 'investigacion'
}
const ResearchSection: React.FC<Props> = ({ tasks }) => {
  if (tasks.length === 0) return null;

  return (
    <section className="container section-gap" id="investigacion" aria-labelledby="investigacion-title">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <h2 className="section-title text-center" id="investigacion-title">
            Investigación (Texto Plano)
          </h2>

          {tasks.map((t) => (
            <article key={t.id} className="plain-block">
              <h3 className="h5 mb-2">{t.title}</h3>
              {t.description && <p className="mb-0">{t.description}</p>}

              {/* Aquí pega el contenido del glosario en texto plano */}
              {/* Ejemplo: */}
              {/* <pre className="plain-text mt-3">ALGORITMO: ...\nCOMPILADOR: ...</pre> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
