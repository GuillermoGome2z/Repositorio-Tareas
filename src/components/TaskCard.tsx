import type { Task } from '../data/tasks';

// Íconos por stack/tema
import { SiReact, SiTypescript, SiBootstrap } from 'react-icons/si';
import { LuFileText } from 'react-icons/lu';
import { TbWorld } from 'react-icons/tb'; // para "Responsive" si lo usas como tag

function iconFor(task: Task) {
  if (task.type === 'investigacion') return <LuFileText />;

  // Si hay tags, elegimos el más representativo
  const tags = (task.tags ?? []).map(t => t.toLowerCase());
  if (tags.includes('react')) return <SiReact />;
  if (tags.includes('typescript')) return <SiTypescript />;
  if (tags.includes('bootstrap')) return <SiBootstrap />;
  if (tags.includes('responsive')) return <TbWorld />;

  // fallback
  return <LuFileText />;
}

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card card-glow flex-fill h-100">
        <div className="card-body">
          <div className="d-flex align-items-start gap-3">
            <div className="icon-badge icon-filled" aria-hidden>
              {iconFor(task)}
            </div>

            <div>
              <h5 className="card-title mb-2">{task.title}</h5>
              {task.description && (
                <p className="card-text text-secondary mb-3">{task.description}</p>
              )}

              {task.tags?.length ? (
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {task.tags.map((t) => (
                    <span key={t} className="badge rounded-pill bg-primary-subtle text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {task.url && (
                <a
                  href={task.url}
                  className="btn btn-primary btn-neon"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en Netlify
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
