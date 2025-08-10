import { tareas } from '../data/tasks';
import type { Publicada } from '../data/tasks';

export default function Publicadas() {
  const items = tareas.filter(
    (t): t is Publicada => t.tipo === 'publicada'
  );
 return (
    <div className="container py-4">
      <h2 className="mb-3">Tareas publicadas</h2>
      {items.length === 0 && <p className="text-secondary">Aún no hay tareas publicadas.</p>}
      {/* renderiza tus TaskCard aquí */}
    </div>
  );
}
