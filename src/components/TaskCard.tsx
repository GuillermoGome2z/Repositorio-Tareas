import React from 'react';
import type { Task } from '../data/tasks';

interface Props {
  task: Task;
}
const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 d-flex">
      <div className="card card-glow flex-fill h-100">
        <div className="card-body">
          <div className="d-flex align-items-start gap-3">
            <div className="icon-badge" aria-hidden />
            <div>
              <h5 className="card-title mb-2">{task.title}</h5>
              {task.description && (
                <p className="card-text text-secondary mb-3">{task.description}</p>
              )}
              {task.tags && (
                <div className="mb-3 d-flex flex-wrap gap-2">
                  {task.tags.map((t) => (
                    <span key={t} className="badge rounded-pill bg-primary-subtle text-primary">
                      {t}
                    </span>
                  ))}
                </div>
              )}
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
};

export default TaskCard;
