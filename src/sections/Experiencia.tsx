import React, { useState } from "react";
import "../styles/MarketingSections.css";

import TunelImg from "../assets/optimized/experience/tunnel.webp";
import FogataImg from "../assets/optimized/experience/night.webp";
import FortalezaImg from "../assets/optimized/fields/fortaleza-2.webp";
import CqbImg from "../assets/optimized/fields/cqb-3.webp";

const MOMENTS = [
  { title: "Túneles", image: TunelImg, label: "Movimiento", desc: "Avanza, cubre y sorprende al rival." },
  { title: "Nocturnas", image: FogataImg, label: "Adrenalina", desc: "La misión cambia cuando baja la luz." },
  { title: "Fortaleza", image: FortalezaImg, label: "Estrategia", desc: "Defiende posiciones y domina el campo." },
  { title: "CQB", image: CqbImg, label: "Acción rápida", desc: "Combate cercano, reflejos y precisión." },
];

const Experiencia: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="marketing-section experience-showcase" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="eyebrow">Más que una partida</p>
        <h2 id="experience-title">Una experiencia que se siente real</h2>
      </div>

      <div className="experience-gallery" role="tablist" aria-label="Experiencias">
        {MOMENTS.map((moment, index) => (
          <button
            key={moment.title}
            type="button"
            className={`experience-tile ${index === active ? "is-active" : ""}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
            aria-selected={index === active}
            role="tab"
          >
            <img src={moment.image} alt="" width="900" height="600" loading="lazy" decoding="async" />
            <div className="experience-tile__scrim" />
            <span>{moment.title}</span>
            <small>{moment.label}</small>
            <p>{moment.desc}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default Experiencia;
