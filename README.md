# Portafolio de Tareas — React + TypeScript + Vite

Portafolio moderno para listar mis **tareas/proyectos** (con cards y botón a Netlify) y una sección de **Investigación** con glosario **filtrable** y **orden alfabético**.

> Stack: React + TypeScript + Vite + Bootstrap 5. Estilos propios en `App.css`.  
> Demo (Netlify): _(agrega tu URL si tienes deploy)_

![preview](public/preview.png)

---

## ✨ Características

- **Hero** con nombre, CTA y avatar circular (puede mostrar mi foto).
- **Grilla de cards** para proyectos “publicados” (tags y botón _Ver en Netlify_).
- **Investigación**:
  - Glosario con **buscador** (por término y por definición).
  - **Orden A–Z** (incluye grupo **0–9**) y grupos **colapsables**.
  - **Pestañas** si hay varias investigaciones (ej.: Glosario general y Formularios).
- **Diseño responsive** (Bootstrap + CSS).

---

## 🧰 Tecnologías

- Vite + React + TypeScript  
- Bootstrap 5  
- react-icons (íconos en las cards)  
- Estilos personalizados en `src/App.css`

---

## 🚀 Puesta en marcha

```bash
# instalar dependencias
npm install

# (si faltan iconos)
npm i react-icons

# entorno de desarrollo
npm run dev

# build de producción
npm run build

# previsualizar el build
npm run preview
