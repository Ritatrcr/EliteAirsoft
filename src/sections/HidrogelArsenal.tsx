import { useEffect, useState } from "react";
import "../styles/HidrogelArsenal.css";

import ReplicaM4 from "../assets/images/equipamiento/hidrogel/ReplicaM4.png";
import Escopeta from "../assets/images/equipamiento/hidrogel/Escopeta.png";
import ReplicaGrande from "../assets/images/equipamiento/hidrogel/Replica.png";

const WEAPONS = [
  {
    name: "Escopeta Hidrogel",
    image: Escopeta,
    tag: "Ligera",
    range: "Rápida",
    style: "Versátil",
    price: "$30.000 / 1 hora",
  },
  {
    name: "Réplica M4 ",
    image: ReplicaM4,
    tag: "Impacto",
    range: "Cercana",
    style: "Agresiva",
    price: "$45.000 / 1 hora",
  },
  {
    name: "Grande Hidrogel",
    image: ReplicaGrande,
    tag: "Pro",
    range: "Potente",
    style: "Dominio",
    price: "$60.000 / 1 hora",
  },
];

export default function HidrogelArsenal() {
  const [active, setActive] = useState(0);
  const [firing, setFiring] = useState(false);
  const weapon = WEAPONS[active];

  useEffect(() => {
    setFiring(true);
    const timer = window.setTimeout(() => setFiring(false), 620);
    return () => window.clearTimeout(timer);
  }, [active]);

  const selectWeapon = (index: number) => {
    if (index === active) {
      setFiring(false);
      window.setTimeout(() => setFiring(true), 20);
      window.setTimeout(() => setFiring(false), 620);
      return;
    }
    setActive(index);
  };

  return (
    <section className="arsenal" aria-labelledby="arsenal-title">
      <div className="arsenal__grid" aria-hidden="true" />
      <div className="arsenal__scan" aria-hidden="true" />

      <div className="arsenal__inner">
        <div className="arsenal__copy">
          <p className="eyebrow">Modo juego · Hidrogel</p>
          <h2 id="arsenal-title">Elige tu arma </h2>
          <p className="arsenal__lead">
            Partida con el estilo que va contigo.
          </p>

          <div className="arsenal__selector" role="tablist" aria-label="Armas de hidrogel">
            {WEAPONS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`arsenal__option ${index === active ? "is-active" : ""}`}
                onClick={() => selectWeapon(index)}
                role="tab"
                aria-selected={index === active}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>
        </div>

        <div className={`arsenal__stage ${firing ? "is-firing" : ""}`}>
          <div className="arsenal__halo" aria-hidden="true" />
          <div className="arsenal__reticle" aria-hidden="true" />
          <div className="arsenal__muzzle" aria-hidden="true" />
          <div className="arsenal__shots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>

          <img
            key={weapon.name}
            className="arsenal__weapon"
            src={weapon.image}
            alt={weapon.name}
            draggable={false}
          />

          <div className="arsenal__weaponName">
            <span>{weapon.tag}</span>
            <strong>{weapon.name}</strong>
            <small>{weapon.price}</small>
          </div>
        </div>

      </div>
    </section>
  );
}
