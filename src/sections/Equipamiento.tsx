import React, { useMemo, useState } from "react";

import EquipNode from "../components/Equipamiento/EquipNode";

import "../styles/Equipamento.css";

import JugadorImg from "../assets/optimized/equipment/player-airsoft.webp";
import JugadorGelsoftImg from "../assets/optimized/equipment/player-gelsoft.webp";

import CascoImg from "../assets/optimized/equipment/helmet.webp";
import ChalecoImg from "../assets/optimized/equipment/vest.webp";
import GuantesImg from "../assets/optimized/equipment/gloves.webp";
import ReplicaImg from "../assets/optimized/equipment/replica.webp";
import CargadorBBsImg from "../assets/optimized/equipment/magazine.webp";
import ReplicaGelsoftImg from "../assets/optimized/equipment/gel-blaster.webp";
import GafasProteccionImg from "../assets/optimized/equipment/goggles.webp";
import BalasHidrogelImg from "../assets/optimized/equipment/gel-balls.webp";
import ChalecoHidrogelImg from "../assets/optimized/equipment/gel-vest.webp";

type EquipMode = "airsoft" | "gelsoft";

type Node = {
  key: string;
  className: string;
  img: string;
  title: string;
  desc?: string;
};

const AIRSOFT_NODES: Node[] = [
  { key: "casco", className: "node-casco", img: CascoImg, title: "Casco" },
  { key: "chaleco", className: "node-chaleco", img: ChalecoImg, title: "Chaleco" },
  { key: "guantes", className: "node-guantes", img: GuantesImg, title: "Guantes", desc: "Valor adicional" },
  { key: "replica", className: "node-replica", img: ReplicaImg, title: "Réplica" },
  { key: "bbs", className: "node-bbs", img: CargadorBBsImg, title: "Cargador + 450 BBs" },
];

const GELSOFT_NODES: Node[] = [
  {
    key: "gelsoft-replica",
    className: "node-gelsoft-replica",
    img: ReplicaGelsoftImg,
    title: "Arma de hidrogel",
  },
  {
    key: "gafas",
    className: "node-gafas",
    img: GafasProteccionImg,
    title: "Gafas de protección",
  },
  {
    key: "chaleco-hidrogel",
    className: "node-chaleco-hidrogel",
    img: ChalecoHidrogelImg,
    title: "Chaleco hidrogel",
  },
  {
    key: "balas-hidrogel",
    className: "node-balas-hidrogel",
    img: BalasHidrogelImg,
    title: "1 Recarga de Balas Hidrogel",
  },
];

const Equipamiento: React.FC = () => {
  const [mode, setMode] = useState<EquipMode>("airsoft");
  const nodes = useMemo(() => (mode === "airsoft" ? AIRSOFT_NODES : GELSOFT_NODES), [mode]);
  const playerImg = mode === "airsoft" ? JugadorImg : JugadorGelsoftImg;

  return (
    <section className="equip-section" data-mode={mode}>
      <div className="container">
        <header className="equip-header">
          <p className="equip-kicker">Incluido en tu experiencia</p>
          <h2 className="equip-title">Tu equipo en campo</h2>
          <div className="equip-divider" />
          <div className="equip-mode-toggle" role="tablist" aria-label="Tipo de equipamiento">
            <button
              type="button"
              className={mode === "airsoft" ? "is-active" : ""}
              onClick={() => setMode("airsoft")}
              role="tab"
              aria-selected={mode === "airsoft"}
            >
              Airsoft
            </button>
            <button
              type="button"
              className={mode === "gelsoft" ? "is-active" : ""}
              onClick={() => setMode("gelsoft")}
              role="tab"
              aria-selected={mode === "gelsoft"}
            >
              Gelsoft
            </button>
          </div>
        </header>

        <div className="equip-panel">
          <div className="equip-right equip-right--solo">
            <div className="equip-radial">
              <div className="equip-orbit" />

              <div className="equip-center" aria-hidden="true">
                <img
                  key={mode}
                  className="equip-player"
                  src={playerImg}
                  alt="Jugador equipado"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="720"
                />
              </div>

              <div key={mode} className="equip-node-ring">
                {nodes.map((n) => (
                  <EquipNode
                    key={n.key}
                    className={n.className}
                    img={n.img}
                    title={n.title}
                    desc={n.desc}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipamiento;
