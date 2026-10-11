import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";
import {
  trackInstagramClick,
  trackMapsClick,
  trackWhatsAppClick,
} from "../utils/analytics";

const WHATSAPP_URL =
  "https://wa.me/573057668729?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Elite%20Airsoft";
const INSTAGRAM_URL = "https://www.instagram.com/elite_airsoft_col/";
const TIKTOK_URL = "https://www.tiktok.com/@elite_airsoft_";
const MAPS_URL = "https://www.google.com/maps?q=4.7327642,-74.225557&z=17";

const Footer = () => (
  <footer id="contactanos" className="footer">
    <div className="footer__inner">
      <div className="footer__name">ELITE AIRSOFT</div>

      <address className="footer__location">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() =>
            trackMapsClick({
              section: "footer_location",
              button_text: "Carrera 12, Funza, Ceuta, Funza, Cundinamarca",
              destination: MAPS_URL,
              location: "Elite Airsoft Funza",
            })
          }
        >
          Carrera 12, Funza, Ceuta, Funza, Cundinamarca
        </a>
      </address>

      <div className="footer__socials" aria-label="Redes sociales">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          onClick={() =>
            trackWhatsAppClick({
              section: "footer_social",
              button_text: "WhatsApp",
              destination: "WhatsApp",
            })
          }
        >
          <FaWhatsapp aria-hidden="true" />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          onClick={() =>
            trackInstagramClick({
              section: "footer_social",
              button_text: "Instagram",
              destination: INSTAGRAM_URL,
            })
          }
        >
          <FaInstagram aria-hidden="true" />
        </a>
        <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok">
          <FaTiktok aria-hidden="true" />
        </a>
      </div>

      <div className="footer__copyright">© 2026 · Todos los derechos reservados</div>
    </div>
  </footer>
);

export default Footer;
