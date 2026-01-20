import React, { useMemo, useState } from "react";

import EquipNode from "../components/Equipamiento/EquipNode";
import ModeSwitch from "../components/Equipamiento/ModeSwitch";
import ModeCard from "../components/Equipamiento/ModeCard";

import "../styles/Equipamento.css";

import JugadorImg from "../assets/images/equipamiento/jugador.png";

import CascoImg from "../assets/images/equipamiento/casco.png";
import ChalecoImg from "../assets/images/equipamiento/chaleco.png";
import GuantesImg from "../assets/images/equipamiento/guantes.png";
import ReplicaImg from "../assets/images/equipamiento/replica.png";
import CargadorBBsImg from "../assets/images/equipamiento/cargador.png";

import GrupoModoImg from "../assets/images/modos/grupo.png";
import SoloModoImg from "../assets/images/modos/solo.png";

type Mode = "grupo" | "individual";

type Node = {
  key: string;
  className: string;
  img: string;
  title: string;
  desc?: string;
};

const Equipamiento: React.FC = () => {
  const [mode, setMode] = useState<Mode>("grupo");

  const modeInfo = useMemo(() => {
    return mode === "individual"
      ? {
          
          title: "¿Qué son las partidas abiertas?",
          desc: "Entrena, mejora puntería y únete a partidas rápidas. Ideal si vienes por primera vez o quieres ir a tu ritmo.",
          img: SoloModoImg,
          
        }
        
      : {
          
          title: "Juega en grupo",
          desc: "Arma tu escuadra y coordina estrategias. Perfecto para equipos, cumpleaños y experiencias completas en grupo.",
          img: GrupoModoImg,
        };
  }, [mode]);

  const nodes: Node[] = useMemo(
    () => [
      { key: "casco", className: "node-casco", img: CascoImg, title: "Casco" },
      { key: "chaleco", className: "node-chaleco", img: ChalecoImg, title: "Chaleco" },
      { key: "guantes", className: "node-guantes", img: GuantesImg, title: "Guantes", desc: "Tiene un valor adicional" },
      { key: "replica", className: "node-replica", img: ReplicaImg, title: "Réplica" },
      { key: "bbs", className: "node-bbs", img: CargadorBBsImg, title: "Cargador + 450 BBs" },
    ],
    []
  );

  return (
    <section className="equip-section">
      <div className="container">
        <h2 className="equip-title">EQUIPAMIENTO</h2>
        <div className="equip-divider" />

        <div className="equip-panel">
          <div className="equip-split">
            <aside className="equip-left">
              <div className="equip-left__top">
                <ModeSwitch value={mode} onChange={setMode} />
              </div>

              <ModeCard img={modeInfo.img} title={modeInfo.title} desc={modeInfo.desc} />
              <p className="equip-left__note">
                {mode === "individual"
                  ?  <>
                    $ 25.000 COP/hora incluye todo el equipamiento.
                    <br />
                    $ 15.000 COP/hora si traes tu propio equipo
                  </>
                  :  <>
                    $ 32.000 COP 1 hora incluye todo el equipamiento.
                    <br />
                    $ 56.000 COP 2 horas incluye todo el equipamiento.
                  </>}
              </p>
            </aside>

            <div className="equip-right">
              <div className="equip-radial">
                <div className="equip-orbit" />

                <div className="equip-center">
                  <img className="equip-player" src={JugadorImg} alt="Jugador equipado" loading="lazy" decoding="async" />
                </div>

                {nodes.map((n) => (
                  <EquipNode key={n.key} className={n.className} img={n.img} title={n.title} desc={n.desc} />
                ))}

                <div className="equip-badge">Por persona</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipamiento;
