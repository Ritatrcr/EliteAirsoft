import React, { useState } from "react";
import "../styles/MarketingSections.css";
import TejoImg from "../assets/images/servicios/tejo.png";
import BallsImg from "../assets/images/servicios/balls.png";
import ParkImg from "../assets/images/servicios/park.png";
import Cumple from "../assets/images/servicios/cumple.png";

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
            style={service.image ? { "--service-image": `url(${service.image})` } as React.CSSProperties : undefined}
            onClick={() => setActiveService(index)}
            aria-pressed={index === activeService}
            role="listitem"
          >
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
