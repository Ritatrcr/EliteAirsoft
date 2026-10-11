import React, { useState } from "react";
import "../styles/MarketingSections.css";
import TejoImg from "../assets/optimized/services/mini-tejo.webp";
import BallsImg from "../assets/optimized/services/bumperballs.webp";
import ParkImg from "../assets/optimized/services/parking.webp";
import Cumple from "../assets/optimized/services/birthday.webp";

type Service = {
  title: string;
  text: string;
  tag: string;
  image?: string;
};

const SERVICES: Service[] = [
  {
    title: "Mini tejo",
    text: "Reto rápido para seguir compartiendo después de la partida.",
    tag: "Actividad",
    image: TejoImg,
  },
  {
    title: "Bumperballs",
    text: "Diversión extra para grupos y celebraciones.",
    tag: "Extra",
    image: BallsImg,
  },
  {
    title: "Parqueadero gratuito",
    text: "Llegas tranquilo. Sin costo adicional.",
    tag: "Incluido",
    image: ParkImg,
  },
  {
    title: "Zona verde",
    text: "Espacio abierto para descansar y compartir.",
    tag: "Descanso",
  },
  {
    title: "Cumpleaños",
    text: "Zona para celebrar con tu grupo.",
    tag: "Celebración",
    image: Cumple,
  },
];

const Servicios: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="marketing-section services services-v2" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">Más allá del juego</p>
        <h2 id="services-title">Nuestros Servicios</h2>
      </div>

      <div className="service-list service-list--wide" role="list">
        {SERVICES.map((service, index) => (
          <button
            key={service.title}
            type="button"
            className={`service-card ${service.image ? "has-image" : ""} ${index === activeService ? "is-active" : ""}`}
            onClick={() => setActiveService(index)}
            aria-pressed={index === activeService}
            role="listitem"
          >
            {service.image ? (
              <span className="service-card__media" aria-hidden="true">
                <img src={service.image} alt="" width="800" height="600" loading="lazy" decoding="async" />
              </span>
            ) : null}
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
