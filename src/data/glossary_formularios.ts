import type { GlossaryEntry } from './glossary.types';

export const glossaryFormularios: GlossaryEntry[] = [
  // ————— <input> y tipos —————
  {
    term: '<input>',
    def: 'Elemento de formulario versátil. Su comportamiento cambia con el atributo "type", que define el dato a capturar.'
  },
  { term: 'input[type="text"]', def: 'Texto en una sola línea. Ej: nombre, dirección.' },
  { term: 'input[type="password"]', def: 'Oculta caracteres mientras se escriben. Ej: contraseñas.' },
  { term: 'input[type="email"]', def: 'Valida formato de correo electrónico.' },
  { term: 'input[type="number"]', def: 'Permite solo números (admite min, max, step).' },
  { term: 'input[type="radio"]', def: 'Selección exclusiva dentro de un grupo (una sola opción).' },
  { term: 'input[type="checkbox"]', def: 'Selección múltiple e independiente de opciones.' },
  { term: 'input[type="date"]', def: 'Selector de fecha del navegador.' },
  { term: 'input[type="submit"]', def: 'Envía el formulario al servidor.' },
  { term: 'input[type="reset"]', def: 'Restaura los valores originales del formulario.' },

  // ————— Otros controles —————
  {
    term: '<textarea>',
    def: 'Área de texto multilínea para comentarios o descripciones. Tamaño visual con rows/cols (mejor estilizar con CSS).'
  },
  {
    term: '<select>',
    def: 'Lista desplegable con <option>. Ideal para catálogos (países, categorías). Soporta selección múltiple con "multiple".'
  },

  // ————— CSS en formularios —————
  {
    term: 'CSS (en formularios)',
    def: 'Controla presentación y UX: diseño de campos/labels, espaciado, tamaño/colores de botones, estados :hover y feedback visual.'
  },
  {
    term: 'Media Queries',
    def: 'Reglas CSS por tamaño de pantalla/dispositivo. Base del diseño responsive (ej.: apilar campos en móvil).'
  },

  // ————— Frameworks CSS —————
  {
    term: 'Bootstrap',
    def: 'Framework con componentes listos (formularios, validación, grid, responsive). Fuerte documentación y comunidad.'
  },
  {
    term: 'Tailwind CSS',
    def: 'Framework de utilidades. No trae componentes; compones estilos con clases para control total del diseño.'
  },
  {
    term: 'Materialize',
    def: 'Framework basado en Material Design (Google) con componentes modernos para formularios y UI.'
  },
  {
    term: 'Bulma',
    def: 'Framework CSS enfocado en simplicidad y semántica. Incluye helpers para formularios, grid y layout.'
  },

  // ————— Buenas prácticas —————
  {
    term: 'Diseño de formularios (buenas prácticas)',
    def: 'Claridad, orden lógico, etiquetas descriptivas, ayudas visuales y errores indicados de forma inmediata mejoran la eficiencia.'
  }
];
