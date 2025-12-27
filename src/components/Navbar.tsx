import './Navbar.css';

const NAV_IDS = {
  campos: 'campos',
  planes: 'planes',
  sobre: 'sobre-nosotros',
  contacto: 'contactanos',
} as const;

const Navbar = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/src/assets/images/LogoHorizontal.png" alt="Elite Airsoft" />
      </div>

      <nav className="navbar__links" aria-label="Navegación principal">
        <button type="button" onClick={() => scrollTo(NAV_IDS.campos)}>Campos</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.planes)}>Planes</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.sobre)}>Sobre nosotros</button>
        <button type="button" onClick={() => scrollTo(NAV_IDS.contacto)}>Contáctanos</button>
      </nav>
    </header>
  );
};

export default Navbar;
