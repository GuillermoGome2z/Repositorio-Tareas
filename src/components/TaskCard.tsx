import type { Task } from '../data/tasks';

// Íconos por stack/tema
import { SiReact, SiTypescript, SiBootstrap } from 'react-icons/si';
import { LuFileText } from 'react-icons/lu';
import { TbWorld } from 'react-icons/tb';
import { FiGithub } from 'react-icons/fi'; // <-- NUEVO

function iconFor(task: Task) {
  if (task.type === 'investigacion') return <LuFileText aria-hidden />;
  const tags = (task.tags ?? []).map((t) => t.toLowerCase());
  if (tags.includes('react')) return <SiReact aria-hidden />;
  if (tags.includes('typescript')) return <SiTypescript aria-hidden />;
  if (tags.includes('bootstrap')) return <SiBootstrap aria-hidden />;
  if (tags.includes('responsive')) return <TbWorld aria-hidden />;
  return <LuFileText aria-hidden />;
}

export default function TaskCard({ task }: { task: Task }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card card-glow flex-fill h-100 overflow-hidden">
        {/* ---------- IMAGEN DEL PROYECTO (NUEVO) ---------- */}
        <div className="ratio ratio-16x9 bg-dark">
          {task.imageSrc ? (
            <img
              src={task.imageSrc}
              alt={task.imageAlt || task.title}
              loading="lazy"
              className="w-100 h-100"
              style={{ objectFit: 'cover' }} // evita clases personalizadas
            />
          ) : (
            <div className="d-flex align-items-center justify-content-center text-secondary">
              <small>Sin imagen</small>
            </div>
          )}
        </div>

        <div className="card-body">
          <div className="d-flex align-items-start gap-3">
            <div className="icon-badge icon-filled" aria-hidden="true">
              {iconFor(task)}
            </div>

            <div>
              <h5 className="card-title mb-2">{task.title}</h5>

              {task.description && (
                <p className="card-text text-secondary mb-3">
                  {task.description}
                </p>
              )}

              {task.tags?.length ? (
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {task.tags.map((t) => (
                    <span
                      key={t}
                      className="badge rounded-pill bg-primary-subtle text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              {/* ---------- BOTONES ---------- */}
              <div className="d-flex flex-wrap gap-2">
                {task.url && (
                  <a
                    href={task.url}
                    className="btn btn-primary btn-neon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir demo de ${task.title}`}
                  >
                    Ver en Netlify
                  </a>
                )}

                {task.githubUrl && (
                  <a
                    href={task.githubUrl}
                    className="btn btn-outline-light d-inline-flex align-items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir repositorio de ${task.title} en GitHub`}
                  >
                    <FiGithub aria-hidden />
                    Ver en GitHub
                  </a>
                )}
              </div>
              {/* -------------------------------- */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
