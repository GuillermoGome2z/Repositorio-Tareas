export type TaskType = 'investigacion' | 'proyecto';

import type { GlossaryEntry } from './glossary.types';
import { glossaryGlosario } from './glossary_glosario';

import type { GlossaryEntry } from './glossary.types';
import { glossaryGlosario } from './glossary_glosario';

export interface Task {
  id: string;
  title: string;
  description?: string;
  type: 'investigacion' | 'proyecto';
  url?: string;
  tags?: string[];
  entries?: GlossaryEntry[];   
  content?: string;
}

// …
export const tasks: Task[] = [
  {
    id: 'glosario-01',
    title: 'Glosario de términos (Sistemas)',
    description: 'Definiciones clave del curso.',
    type: 'investigacion',
    entries: glossaryGlosario, 
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
  // Si creas otra investigación, agrega otro objeto con type:'investigacion' y entries: [...]
];
