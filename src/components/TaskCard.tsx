import type { Publicada } from '../data/tasks';

interface Props { task: Publicada; }

export default function TaskCard({ task }: Props) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{task.titulo}</h5>
        {task.descripcion && <p className="card-text">{task.descripcion}</p>}

        <div className="mt-auto d-flex align-items-center gap-2">
          <a href={task.url} target="_blank" rel="noreferrer" className="btn btn-primary">
            Ver en Netlify
          </a>
          <div className="ms-auto">
            {task.tags?.map(tag => (
              <span key={tag} className="badge text-bg-secondary ms-1">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
