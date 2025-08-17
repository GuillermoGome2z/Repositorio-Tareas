export type TaskType = 'investigacion' | 'proyecto';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: TaskType;
  url?: string;      
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
    url: 'https://funny-smakager-925a6e.netlify.app/',
    tags: ['React', 'TypeScript', 'Bootstrap']
  },
  {
    id: 'cv-portfolio-01',
    title: 'CV/Portfolio (dark theme)',
    description: 'Hoja de vida con tarjetas y secciones responsivas.',
    type: 'proyecto',
    url: 'https://cv-guillermogomez.netlify.app/',
    tags: ['React', 'UI', 'Responsive']
  },
  
   {
    id: 'diseno-responsivo-01',
    title: 'Diseño Responsivo en React',
    description: 'Sitio con maquetación responsive (grid/flex) y buenas prácticas.',
    type: 'proyecto',
    url: 'https://diseno-responsivo-guillermo-react.netlify.app/',
    tags: ['React', 'Responsive', 'CSS', 'Grid/Flex']
  }

];
