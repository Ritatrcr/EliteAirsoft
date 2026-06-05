import React, { useState } from "react";
import "../styles/MarketingSections.css";
import ballsBg from "../assets/images/servicios/balls.png";

const SERVICES = [
  {
    title: "Mini tejo",
    text: "Una actividad adicional para seguir compartiendo después de la partida.",
    icon: "◆",
    tag: "Reto corto",
  },
  {
    title: "Bumperballs",
    text: "Diversión extra para grupos que quieren sumar una experiencia distinta.",
    icon: "●",
    tag: "Diversión",
    bg: ballsBg,
  },
  {
    title: "Parqueadero gratuito",
    text: "Llegas con tranquilidad y disfrutas el plan sin costos adicionales.",
    icon: "▰",
    tag: "Gratis",
  },
  {
    title: "Zona verde",
    text: "Espacio abierto para descansar, compartir y disfrutar el ambiente.",
    icon: "✦",
    tag: "Descanso",
  },
  {
    title: "Cumpleaños",
    text: "Un espacio pensado para reuniones, grupos y fechas especiales.",
    icon: "★",
    tag: "Celebración",
  },
  
];

const Servicios: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="marketing-section services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">Después de la partida</p>
        <h2 id="services-title">Servicios para que el plan dure más</h2>
      </div>

      <div className="service-list service-list--wide" role="list">
        {SERVICES.map((service, index) => (
          <button
            key={service.title}
            type="button"
            className={`service-card ${index === activeService ? "is-active" : ""}`}
            onClick={() => setActiveService(index)}
            aria-pressed={index === activeService}
            role="listitem"
          >
            <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
            <span className="service-card__tag">{service.tag}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
