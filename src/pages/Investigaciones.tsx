import { tareas } from '../data/tasks';

export default function Investigaciones() {
  const items = tareas.filter(t => t.tipo === 'investigacion');
  return (
    <div className="container py-4">
      <h2 className="mb-3">Investigaciones</h2>
      {items.length === 0 && <p className="text-secondary">Aún no hay investigaciones.</p>}

      <div className="vstack gap-3">
        {items.map(t => (
          <div key={t.id} className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-2">{t.titulo}</h5>
              <p className="card-text" style={{ whiteSpace: 'pre-wrap' }}>
                {(t as any).contenido}
              </p>
              {t.tags?.map(tag => <span key={tag} className="badge text-bg-light me-1">{tag}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
