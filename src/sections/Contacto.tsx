import React from "react";
import "../styles/Contacto.css";
import Button from "../components/UI/Button";
import { trackPhoneClick } from "../utils/analytics";
import { openReservationWhatsApp } from "../utils/whatsapp";

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
          <Button
            text="Hablar por WhatsApp"
            onClick={() => openReservationWhatsApp("consulta desde contacto", {
              section: "contacto",
              buttonText: "Hablar por WhatsApp",
              service: "reserva general",
            })}
          />
          <a
            href="tel:+573057668729"
            onClick={() => trackPhoneClick({
              section: "contacto",
              button_text: "305 766 8729",
              destination: "tel:+573057668729",
            })}
          >
            305 766 8729
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
