// src/pages/PortfolioPage.tsx
import React from 'react';
import TaskCard from '../components/TaskCard';
import ResearchSection from '../components/ResearchSection';
import { tasks } from '../data/tasks';

const PortfolioPage: React.FC = () => {
  const research = tasks.filter(t => t.type === 'investigacion');
  const projects = tasks.filter(t => t.type !== 'investigacion');

  return (
    <>
      {/* HERO */}
      <header className="hero-wrap">
        <div className="container position-relative">
          {/* Si tienes Navbar propio, puedes quitar este nav inline */}
          <nav className="d-flex justify-content-end gap-3 py-3 small text-uppercase nav-links">
            <a href="#proyectos">Proyectos</a>
            <a href="#investigacion">Investigación</a>
            <a href="#contacto">Contacto</a>
          </nav>

          <div className="row align-items-center hero-content">
            <div className="col-12 col-lg-7">
              <p className="brand">Folio<span className="brand-x">x</span></p>
              <h1 className="display-4 fw-bold mb-1">
                Wilson <span className="txt-gradient">Hernández</span>
              </h1>
              <p className="lead text-secondary mb-4">
                Web Developer • React • TypeScript • Bootstrap
              </p>
              <a href="#proyectos" className="btn btn-primary btn-lg btn-neon">Ver Proyectos</a>
            </div>

            <div className="col-12 col-lg-5 text-center mt-5 mt-lg-0">
              <div className="avatar-circle" aria-hidden />
            </div>
          </div>
        </div>
      </header>

      {/* PROYECTOS */}
      <section className="container section-gap" id="proyectos" aria-labelledby="proyectos-title">
        <h2 className="section-title text-center" id="proyectos-title">Tareas publicadas</h2>
        <div className="row g-4 mt-1">
          {projects.map(task => <TaskCard key={task.id} task={task} />)}
        </div>
      </section>

      {/* INVESTIGACIÓN (texto plano) */}
      <ResearchSection tasks={research} />

      {/* FOOTER */}
      <footer className="container py-5" id="contacto">
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} Wilson Hernández — Hecho con React + TS
        </div>
      </footer>
    </>
  );
};

export default PortfolioPage;
