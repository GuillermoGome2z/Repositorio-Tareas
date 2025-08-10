export type TaskType = 'investigacion' | 'publicada';

export interface TaskBase {
  id: string;
  titulo: string;
  curso?: string;
  fecha?: string;      // ISO o texto libre
  tags?: string[];
}

export interface Investigacion extends TaskBase {
  tipo: 'investigacion';
  contenido: string;   // texto plano
}

export interface Publicada extends TaskBase {
  tipo: 'publicada';
  descripcion?: string;
  url: string;         // Netlify u otro
}

export type Task = Investigacion | Publicada;

export const tareas: Task[] = [
  {
    id: 'inv-01',
    tipo: 'investigacion',
    titulo: 'Modelo OSI vs TCP/IP',
    fecha: '2025-08-09',
    tags: ['Redes'],
    contenido:
      'Resumen comparativo de capas, funciones, encabezados y casos de uso...'
  },
  {
    id: 'pub-01',
    tipo: 'publicada',
    titulo: 'Landing Portafolio Personal',
    descripcion: 'Sitio React con Bootstrap',
    url: 'https://https://cv-guillermogomez.netlify.app/',
    tags: ['Frontend']
  }
];
