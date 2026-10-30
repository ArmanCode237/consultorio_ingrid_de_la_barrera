import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* Logotipo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="brand-top">
            <span className="brand-ingrid">Ingrid</span>
            <span className="brand-dela">De la</span>
          </div>
          <span className="brand-barrera">Barrera</span>
          <span className="brand-subtitle">
            NEUROPSICOLOGÍA Y EDUCACIÓN ESPECIAL
          </span>
        </Link>

        {/* Botón hamburguesa para móvil */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          ☰
        </button>

        {/* Enlaces de navegación */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/servicios" className="nav-link" onClick={closeMenu}>
            Servicios
          </NavLink>
          <NavLink to="/nosotros" className="nav-link" onClick={closeMenu}>
            Nosotros
          </NavLink>
          <NavLink to="/preguntas" className="nav-link" onClick={closeMenu}>
            Preguntas
          </NavLink>
          <NavLink to="/contactos" className="nav-link" onClick={closeMenu}>
            Contactos
          </NavLink>
        </nav>

        {/* Botón CTA Derecho */}
        <Link to="/agendar" className="btn-nav" onClick={closeMenu}>
          Agendar Cita
        </Link>
      </div>
    </header>
  );
}