import React, { useState } from "react";
import "../styles/MarketingSections.css";

import FortalezaImg from "../assets/images/campos/Fortaleza3.png";
import CqbImg from "../assets/images/campos/CQB2.jpg";
import TownImg from "../assets/images/campos/Bus2.jpg";
import TunelImg from "../assets/images/Tunel2.jpg";
import FogataImg from "../assets/images/Fogata.jpg";
import ReplicaImg from "../assets/images/equipamiento/Replica.png";

const MATCH_TYPES = [
  {
    title: "Baja confirmada",
    level: "Coordinación",
    image: TunelImg,
    goal: "Recoge las bajas",
    stat: "Trabajo en equipo",
    desc: "Cada jugador eliminado deja una marca. El equipo suma puntos solo si logra recogerla antes que el rival.",
  },
  {
    title: "Captura la bandera",
    level: "Estrategia",
    image: FortalezaImg,
    goal: "Roba la bandera",
    stat: "Ataque + defensa",
    desc: "Cada equipo protege su bandera mientras intenta tomar la del rival y llevarla de regreso a su base.",
  },
  {
    title: "Dominación",
    level: "Control",
    image: TownImg,
    goal: "Toma posiciones",
    stat: "Control del mapa",
    desc: "Los equipos deben conquistar y mantener varios puntos del campo durante el mayor tiempo posible.",
  },
  {
    title: "Rescata el rehén",
    level: "Objetivo",
    image: CqbImg,
    goal: "Extrae al rehén",
    stat: "Comunicación",
    desc: "Un equipo debe liberar al jugador retenido y escoltarlo hasta una zona segura antes de que acabe el tiempo.",
  },
  {
    title: "Eliminación",
    level: "Precisión",
    image: FogataImg,
    goal: "Último equipo en pie",
    stat: "Puntería",
    desc: "Gana el equipo que logra sacar de juego a todos los rivales antes de ser eliminado.",
  },
];

const TiposPartida: React.FC = () => {
  const [active, setActive] = useState(1);
  const match = MATCH_TYPES[active];
  const canPrev = active > 0;
  const canNext = active < MATCH_TYPES.length - 1;

  return (
    <section className="marketing-section match-types" aria-labelledby="match-types-title">
      <div
        className="game-mode-shell"
        style={{ ["--mission-image" as string]: `url(${MATCH_TYPES[0].image})` }}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" && canPrev) setActive((current) => current - 1);
          if (event.key === "ArrowRight" && canNext) setActive((current) => current + 1);
        }}
      >
        <div className="game-mode-backdrop" aria-hidden="true" />

        <div className="game-mode-inner game-mode-inner--centered">
          <div className="section-heading game-mode-heading">
            <p className="eyebrow">Modalidades</p>
          </div>

          <div className="mission-stage">
            <div className="mission-side mission-side--left">
              {active > 0 ? (
                <button type="button" onClick={() => setActive(active - 1)}>
                  <span>{String(active).padStart(2, "0")}</span>
                  {MATCH_TYPES[active - 1].title}
                </button>
              ) : null}
            </div>

            <article className="mission-focus">
              <img src={match.image} alt="" />
              <div className="mission-focus__scrim" />
              <div className="mission-focus__content">
                <div className="game-mode-chip">Misión {String(active + 1).padStart(2, "0")}</div>
                <h3>{match.title}</h3>
                <p>{match.desc}</p>

                <div className="game-mode-meta">
                  <div>
                    <span>Nivel</span>
                    <b>{match.level}</b>
                  </div>
                  <div>
                    <span>Objetivo</span>
                    <b>{match.goal}</b>
                  </div>
                  <div>
                    <span>Clave</span>
                    <b>{match.stat}</b>
                  </div>
                </div>
              </div>
            </article>

            <div className="mission-side mission-side--right">
              {active < MATCH_TYPES.length - 1 ? (
                <button type="button" onClick={() => setActive(active + 1)}>
                  <span>{String(active + 2).padStart(2, "0")}</span>
                  {MATCH_TYPES[active + 1].title}
                </button>
              ) : null}
            </div>
          </div>

          <div className="mission-controls">
            <button
              className="mission-nav mission-nav--left"
              type="button"
              onClick={() => canPrev && setActive((current) => current - 1)}
              aria-label="Anterior"
              disabled={!canPrev}
            >
              <img src={ReplicaImg} alt="" aria-hidden="true" />
            </button>

            <div className="mission-progress mission-progress--numbered">
              {MATCH_TYPES.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  className={index === active ? "is-active" : ""}
                  onClick={() => setActive(index)}
                  aria-label={`Ver ${item.title}`}
                />
              ))}
            </div>

            <button
              className="mission-nav mission-nav--right"
              type="button"
              onClick={() => canNext && setActive((current) => current + 1)}
              aria-label="Siguiente"
              disabled={!canNext}
            >
              <img src={ReplicaImg} alt="" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiposPartida;
