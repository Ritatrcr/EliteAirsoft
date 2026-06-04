import { useState } from 'react';
import './Navbar.css';
import LogoHorizontal from '../assets/images/LogoHorizontal.png';

const NAV_IDS = {
  inicio: 'inicio',
  campos: 'campos',
  planes: 'planes',
  sobre: 'sobre-nosotros',
  contacto: 'contactanos',
} as const;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    if (id === NAV_IDS.inicio) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setMenuOpen(false);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

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
        <img src={LogoHorizontal} alt="Elite Airsoft" />
      </div>

      <nav id="main-navigation" className="navbar__links" aria-label="Navegación principal">
        <button type="button" onClick={() => scrollTo(NAV_IDS.inicio)}>Inicio</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.campos)}>Campos</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.planes)}>Planes</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.sobre)}>Sobre nosotros</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.contacto)}>Contáctanos</button>
      </nav>
    </header>
  );
};

export default Navbar;
