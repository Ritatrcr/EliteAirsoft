import React, { useState } from "react";
import "../styles/MarketingSections.css";

import TunelImg from "../assets/images/Tunel2.jpg";
import FogataImg from "../assets/images/Fogata.jpg";
import FortalezaImg from "../assets/images/campos/Fortaleza2.jpg";
import CqbImg from "../assets/images/campos/CQB3.jpg";

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
            <img src={moment.image} alt="" />
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
