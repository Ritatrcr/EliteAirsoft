import { useState } from 'react';
import './Navbar.css';
import LogoHorizontal from '../assets/optimized/logo-horizontal.webp';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${menuOpen ? 'is-open' : ''}`}>
      <button
        type="button"
        className="navbar__toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <div className="navbar__logo">
        <a href="#inicio" onClick={() => setMenuOpen(false)} aria-label="Elite Airsoft, ir al inicio">
          <img src={LogoHorizontal} alt="Elite Airsoft" width="252" height="84" />
        </a>
      </div>

      <nav id="main-navigation" className="navbar__links" aria-label="Navegación principal">
        <a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#campos" onClick={() => setMenuOpen(false)}>Campos</a>
        <a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a>
        <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
        <a href="#contactanos" onClick={() => setMenuOpen(false)}>Contáctanos</a>
      </nav>
    </header>
  );
};

export default Navbar;
