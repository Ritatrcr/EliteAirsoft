import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

const WHATSAPP_URL =
  "https://wa.me/573057668729?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Elite%20Airsoft";
const INSTAGRAM_URL = "https://www.instagram.com/elite_airsoft_col/";
const TIKTOK_URL = "https://www.tiktok.com/@elite_airsoft_";
const MAPS_URL =
  "https://www.google.com/maps?q=4.7327642,-74.225557&z=17";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <div className="footer__name">ELITE AIRSOFT</div>
          <p className="footer__description">
            Campo de airsoft en Funza para partidas, grupos, cumpleaños y experiencias tácticas.
          </p>
          <div className="footer__socials" aria-label="Redes sociales">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
          </div>
          <div className="footer__meta">© {year} • Todos los derechos reservados</div>
        </div>

        <div className="footer__column">
          <h3>Ubicación</h3>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">
            Carrera 12, Funza, Ceuta, Funza, Cundinamarca
          </a>
          <span>Abierto todos los días</span>
          <span>8:00 a.m. – 8:00 p.m.</span>
        </div>

        <div className="footer__column">
          <h3>Contacto</h3>
          <a href="tel:+573057668729">305 766 8729</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @elite_airsoft_col
          </a>
        </div>

        <div className="footer__column">
          <h3>Información útil</h3>
          <span>Airsoft y Gelsoft</span>
          <span>Si vienes solo(a), pregunta por la partida abierta</span>
          <span>¡Reservas Ya!</span>
        </div>

        <nav className="footer__column" aria-label="Enlaces">
          <h3>Explora</h3>
          <a href="#campos">Campos</a>
          <a href="#planes">Planes</a>
          <a href="#sobre-nosotros">Servicios</a>
          <a href="#contactanos">Contacto</a>
        </nav>
      </div>

      <div className="footer__bottom">
        <span>¿Listo para jugar?</span>
      </div>
    </footer>
  );
};

export default Footer;
