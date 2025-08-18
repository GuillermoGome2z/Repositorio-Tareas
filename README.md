# Portafolio de Tareas — React + TypeScript + Vite

Portafolio moderno para mostrar **proyectos** (cards con tags e íconos) y una sección de **Investigación** con glosario **filtrable**, ordenado **A–Z** (incluye **0–9**) y con **pestañas** si agregas varias investigaciones.

> Stack: React + TypeScript + Vite + Bootstrap 5 + react-icons  
> Estilos principales en `src/App.css`.

---

## ✨ Qué incluye

- **Hero** con tu nombre, botón (CTA) y avatar circular (admite foto real).
- **Grilla de cards** para proyectos:
  - título, descripción, _tags_, ícono según stack.
  - botón “**Ver demo**” (si proporcionas `url` en los datos).
- **Investigación**:
  - **Buscador** por término y por definición (normaliza acentos).
  - **Orden alfabético** y grupos **colapsables** por letra.
  - Botón **0–9** para términos que empiezan con números.
  - **Pestañas** cuando hay 2+ investigaciones.
- **UI oscura**, con sombras “glow” y diseño **responsive**.

---

## 🧰 Requisitos & Scripts

**Requisitos:** Node 18+ recomendado.

```bash
# instalar dependencias
npm install

# (si faltan iconos)
npm i react-icons

# entorno de desarrollo
npm run dev

# build de producción
npm run build

# previsualizar el build local
npm run preview
```


## 🧰 Tecnologías

- Vite + React + TypeScript  
- Bootstrap 5  
- react-icons (íconos en las cards)  
- Estilos personalizados en `src/App.css`

---

## 🗂️ Estructura
```text
src/
  assets/                         # imágenes (foto de perfil, etc.)
  components/
    Glossary.tsx                  # glosario con filtro + A–Z (+ 0–9)
    ResearchSection.tsx           # sección Investigación (tabs + contenido)
    TaskCard.tsx                  # tarjeta de proyecto (tags + botón Netlify + icono)
    Navbar.tsx                    # (opcional) navegación superior
  data/
    tasks.ts                      # lista de tareas (proyectos e investigaciones)
    glossary.types.ts             # tipos del glosario
    glossary_glosario.ts          # glosario #1 (Sistemas)
    glossary_formularios.ts       # glosario #2 (Formularios/CSS)
  pages/
    PortfolioPage.tsx             # página principal (hero + grilla + investigación)
  App.tsx
  App.css                         # tema y estilos del sitio
  main.tsx                        # entrada de React
index.html                        # <div id="root"></div> + script de Vite

