import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">Portafolio de Tareas</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link" to="/investigaciones">Investigaciones</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/publicadas">Publicadas</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
