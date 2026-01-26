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

/* IMPORTA TU LOGO DE WHATSAPP AQUÍ:
   Cambia esta ruta por la real en tu proyecto */
import WhatsAppIcon from "../assets/images/Wicon.png"

type Mode = "grupo" | "individual";

type Node = {
  key: string;
  className: string;
  img: string;
  title: string;
  desc?: string;
};

const NODES: Node[] = [
  { key: "casco", className: "node-casco", img: CascoImg, title: "Casco" },
  { key: "chaleco", className: "node-chaleco", img: ChalecoImg, title: "Chaleco" },
  { key: "guantes", className: "node-guantes", img: GuantesImg, title: "Guantes", desc: "Valor adicional" },
  { key: "replica", className: "node-replica", img: ReplicaImg, title: "Réplica" },
  { key: "bbs", className: "node-bbs", img: CargadorBBsImg, title: "Cargador + 450 BBs" },
];

/* LINKS (REEMPLAZA CON LOS TUYOS) */
const RESERVA_URL = "https://wa.me/573057668729?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Elite%20Airsoft";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/GplVS3IddDlHUeK6al0HEF";

const Equipamiento: React.FC = () => {
  const [mode, setMode] = useState<Mode>("grupo");

  const modeInfo = useMemo(() => {
    if (mode === "individual") {
      return {
        title: "¿Qué son las partidas abiertas?",
        desc: "Son partidas organizadas por nuestro grupo de WhatsApp: llegas y juegas varias modalidades, sin formar equipo.",
        img: SoloModoImg,
      };
    }

    return {
      title: "Juega con amigos",
      desc: "Arma tu escuadra y coordina estrategias. Perfecto para equipos, cumpleaños y experiencias completas en grupo.",
      img: GrupoModoImg,
    };
  }, [mode]);

  const pricing = useMemo(() => {
    if (mode === "individual") {
      return (
        <>
         
        </>
      );
    }

    return (
      <>
        <strong>$ 32.000 COP</strong> (1 hora) incluye todo el equipamiento.
        <br />
        <strong>$ 56.000 COP</strong> (2 horas) incluye todo el equipamiento.
      </>
    );
  }, [mode]);

  const cta = useMemo(() => {
    if (mode === "individual") {
      return {
        href: WHATSAPP_GROUP_URL,
        label: "Unirte al grupo de WhatsApp",
        isWhatsApp: true,
      };
    }
    return {
      href: RESERVA_URL,
      label: "Reserva ahora",
      isWhatsApp: false,
    };
  }, [mode]);

  return (
    <section className="equip-section" data-mode={mode}>
      <div className="container">
        <header className="equip-header">
          <h2 className="equip-title">EQUIPAMIENTO</h2>
          <div className="equip-divider" />
        </header>

        <div className={`equip-panel ${mode === "individual" ? "is-individual" : "is-grupo"}`}>
          <div className="equip-split">
            <aside className="equip-left">
              <div className="equip-left__top">
                <ModeSwitch value={mode} onChange={setMode} />
              </div>

              <div className="equip-left__card">
                <ModeCard img={modeInfo.img} title={modeInfo.title} desc={modeInfo.desc} />
              </div>

              <div className="equip-left__footer">
                <p className="equip-left__note">{pricing}</p>

                <a
                  className={`equip-cta ${cta.isWhatsApp ? "is-whatsapp" : ""}`}
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {cta.isWhatsApp && (
                    <img className="equip-cta__icon" src={WhatsAppIcon} alt="" aria-hidden="true" />
                  )}
                  <span className="equip-cta__label">{cta.label}</span>
                </a>
              </div>
            </aside>

            <div className="equip-right">
              <div className="equip-radial">
                <div className="equip-orbit" />

                <div className="equip-center" aria-hidden="true">
                  <img
                    className="equip-player"
                    src={JugadorImg}
                    alt="Jugador equipado"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {NODES.map((n) => (
                  <EquipNode
                    key={n.key}
                    className={n.className}
                    img={n.img}
                    title={n.title}
                    desc={n.desc}
                  />
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
