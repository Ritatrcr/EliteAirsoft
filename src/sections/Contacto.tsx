import React from "react";
import "../styles/Contacto.css";
import Button from "../components/UI/Button";

const WHATSAPP_URL =
  "https://wa.me/573057668729?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Elite%20Airsoft";

const Contacto: React.FC = () => {
  return (
    <section className="contact" aria-labelledby="contact-title">
      <div className="contact-card">
        <div>
          <p className="eyebrow">Tu próxima misión empieza aquí</p>
          <h2 id="contact-title">Reserva, pregunta o arma tu plan ideal</h2>
          <p>
            Escríbenos y te ayudamos a elegir modalidad, duración y horario según tu grupo.
          </p>
        </div>

        <div className="contact-actions">
          <Button text="Hablar por WhatsApp" onClick={() => window.open(WHATSAPP_URL, "_blank")} />
          <a href="tel:+573057668729">305 766 8729</a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
