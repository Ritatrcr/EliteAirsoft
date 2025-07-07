import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src="/src/assets/images/LogoHorizontal.png" alt="Elite Airsoft" />
      </div>
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/calendar">Calendário</Link>
        <Link to="/combos">Combos</Link>
        <Link to="/about">Sobre Nosotros</Link>
        <Link to="/contact">Contáctanos</Link>
      </nav>
    </header>
  );
};

export default Navbar;
