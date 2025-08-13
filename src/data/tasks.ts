export type TaskType = 'investigacion' | 'proyecto';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  url?: string;       // para Netlify
  tags?: string[];
}

export const tasks: Task[] = [
  {
    id: 'glosario-01',
    title: 'Glosario de términos (Sistemas)',
    description:
      'Definiciones clave: algoritmo, compilador, framework, API, endpoint, ORM, REST, CRUD, etc.',
    type: 'investigacion'
  },
  {
    id: 'form-react-01',
    title: 'Formulario en React + TS',
    description: 'Formulario con validaciones y exportación a Excel.',
    type: 'proyecto',
    url: 'https://tusitio1.netlify.app',
    tags: ['React', 'TypeScript', 'Bootstrap']
  },
  {
    id: 'cv-portfolio-01',
    title: 'CV/Portfolio (dark theme)',
    description: 'Hoja de vida con tarjetas y secciones responsivas.',
    type: 'proyecto',
    url: 'https://tusitio2.netlify.app',
    tags: ['React', 'UI', 'Responsive']
  }
  // Añade aquí tus demás tareas…
];
