export type TaskType = 'investigacion' | 'proyecto';
import { glossaryFormularios } from './glossary_formularios';
import type { GlossaryEntry } from './glossary.types';
import { glossaryGlosario } from './glossary_glosario';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: 'investigacion' | 'proyecto';
  url?: string;                 // demo (Netlify/Vercel)
  githubUrl?: string;           // nuevo: repositorio
  imageSrc?: string;            // nuevo: captura/preview
  imageAlt?: string;            // nuevo: texto alternativo
  tags?: string[];
  entries?: GlossaryEntry[];
  content?: string;
}

// Lista de tareas del portafolio
export const tasks: Task[] = [
  {
    id: 'glosario-01',
    title: 'Glosario de términos (Sistemas)',
    description: 'Definiciones clave del curso.',
    type: 'investigacion',
    entries: glossaryGlosario,
  },
  {
    id: 'glosario-forms-01',
    title: 'Elementos de Formularios HTML + CSS',
    description: 'Inputs, textarea, select, CSS (media queries) y frameworks.',
    type: 'investigacion',
    entries: glossaryFormularios,
  },
  {
    id: 'form-react-01',
    title: 'Formulario en React + TS',
    description: 'Formulario con validaciones y exportación a Excel.',
    type: 'proyecto',
    url: 'https://funny-smakager-925a6e.netlify.app/',
    githubUrl: 'https://github.com/GuillermoGome2z/Formulario-',
    imageSrc: '/images/form-react-ts.png',
    imageAlt: 'Captura del formulario React + TS',
    tags: ['React', 'TypeScript', 'Bootstrap'],
  },
  {
    id: 'cv-portfolio-01',
    title: 'CV/Portfolio',
    description: 'Hoja de vida con tarjetas y secciones responsivas.',
    type: 'proyecto',
    url: 'https://cv-guillermogomez.netlify.app/',
    githubUrl: 'https://github.com/GuillermoGome2z/hoja-de-vida',
    imageSrc: '/IMGCV.png',
    imageAlt: 'Vista previa del portafolio dark theme',
    tags: ['React', 'UI', 'Responsive'],
  },
  {
    id: 'diseno-responsivo-01',
    title: 'Diseño Responsivo en React',
    description: 'Sitio con maquetación responsive (grid/flex) y buenas prácticas.',
    type: 'proyecto',
    url: 'https://diseno-responsivo-guillermo-react.netlify.app/',
    githubUrl: 'https://github.com/GuillermoGome2z/Responsivo-React',
    imageSrc: '/images/react-responsive.png',
    imageAlt: 'Captura del diseño responsive en React',
    tags: ['React', 'Responsive', 'CSS', 'Grid/Flex'],
  },
];
