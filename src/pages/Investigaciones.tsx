import { tasks } from '../data/tasks';      
import type { Task } from '../data/tasks';  

export default function Investigaciones() {
  // tipa el filtro para evitar "implicit any"
  const items: Task[] = tasks.filter((t: Task) => t.type === 'investigacion');

  return (
    <div className="container py-4">
      <h2 className="mb-3">Investigaciones (Texto plano)</h2>

      {items.length === 0 && (
        <p className="text-secondary">Aún no hay investigaciones.</p>
      )}

      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 d-flex flex-column gap-3">
          {items.map((t: Task) => (
            <article key={t.id} className="plain-block">
              <h3 className="h5 mb-2">{t.title}</h3>
              {t.description && <p className="mb-2">{t.description}</p>}

              {t.tags && t.tags.length > 0 && (
                <div className="d-flex flex-wrap gap-2">
                  {t.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="badge rounded-pill bg-primary-subtle text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
