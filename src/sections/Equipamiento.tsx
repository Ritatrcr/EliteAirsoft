import React from "react";

// Ajusta rutas a tus assets reales:
import JugadorImg from "../assets/images/equipamiento/jugador.png";

import CascoImg from "../assets/images/equipamiento/casco.png";
import ChalecoImg from "../assets/images/equipamiento/chaleco.png";
import GuantesImg from "../assets/images/equipamiento/guantes.png";
import ReplicaImg from "../assets/images/equipamiento/replica.png";
import CargadorBBsImg from "../assets/images/equipamiento/cargador.png";

const Equipamiento = () => {
  return (
    <section className="equip-section">
      <style>{`
        .equip-section{
          background: var(--color-bg-dark);
          padding: clamp(0rem, 0vw, 0rem) 0;
        }

        .equip-title{
          margin: 0;
          text-align: center;
          color: var(--color-text-light);
          font-weight: 800;
          letter-spacing: 0.08em;
          font-size: clamp(1.6rem, 2.2vw, 2.3rem);
        }

        .equip-divider{
          height: 1px;
          width: 100%;
          margin: 0.6rem 0 1.4rem 0;
          background: rgba(167, 141, 102, 0.25);
        }

        /* Panel con look tecnológico */
        .equip-panel{
          position: relative;
          border-radius: 26px;
          border: 1px solid rgba(167, 141, 102, 0.18);
          background:
            radial-gradient(1200px 500px at 50% 0%, rgba(167,141,102,0.10), transparent 60%),
            linear-gradient(to bottom, rgba(0,0,0,0.10), rgba(0,0,0,0.26));
          padding: clamp(0rem, vw, 0rem);
          box-shadow: 0 18px 60px rgba(0,0,0,0.35);
          overflow: hidden;
        }

        /* Grid tech de fondo (muy sutil) */
        .equip-panel::before{
          content:'';
          position:absolute;
          inset: 0;
          background:
            linear-gradient(to right, rgba(216,210,194,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(216,210,194,0.06) 1px, transparent 1px);
          background-size: 44px 44px;
          opacity: 0.18;
          mask-image: radial-gradient(circle at 50% 35%, rgba(0,0,0,1), rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 75%);
          pointer-events: none;
          z-index: 0;
        }

        /* Scanline sutil */
        .equip-panel::after{
          content:'';
          position:absolute;
          left: -20%;
          right: -20%;
          height: 160px;
          top: -30px;
          background: linear-gradient(to bottom, transparent, rgba(167,141,102,0.10), transparent);
          filter: blur(6px);
          opacity: 0.55;
          pointer-events: none;
          z-index: 0;
          animation: scan 6.5s ease-in-out infinite;
        }

        @keyframes scan{
          0%   { transform: translateY(-20px); opacity: 0.25; }
          45%  { transform: translateY(220px); opacity: 0.65; }
          100% { transform: translateY(520px); opacity: 0.20; }
        }

        /* ====== RADIAL HERO ====== */
        .equip-radial{
          position: relative;
          z-index: 1;
          border-radius: 22px;
          border: 1px solid rgba(167,141,102,0.12);
          background: rgba(0,0,0,0.10);
          overflow: hidden;

          /* Altura estable */
          min-height: clamp(420px, 44vw, 620px);
          padding: clamp(1rem, 2vw, 2rem);
        }

        /* Glow central */
        .equip-radial::before{
          content:'';
          position:absolute;
          inset: 0;
          background:
            radial-gradient(420px 280px at 50% 55%, rgba(167,141,102,0.18), transparent 60%),
            radial-gradient(380px 260px at 50% 55%, rgba(216,210,194,0.10), transparent 62%);
          pointer-events:none;
          z-index: 0;
        }

        /* Anillo orbitando */
        .equip-orbit{
          position:absolute;
          left: 50%;
          top: 55%;
          width: min(520px, 80vw);
          aspect-ratio: 1 / 1;
          transform: translate(-50%, -50%);
          border-radius: 999px;
          border: 1px dashed rgba(167,141,102,0.22);
          opacity: 0.75;
          z-index: 0;
          animation: orbit 18s linear infinite;
        }

        .equip-orbit::after{
          content:'';
          position:absolute;
          inset: -10px;
          border-radius: 999px;
          border: 1px solid rgba(216,210,194,0.08);
        }

        @keyframes orbit{
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg); }
        }

        /* Centro (jugador) */
        .equip-center{
          position:absolute;
          left: 50%;
          top: 58%;
          transform: translate(-50%, -50%);
          z-index: 2;
          display: grid;
          place-items: center;
          pointer-events: none;
        }

        .equip-player{
          width: min(420px, 52vw);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 22px 55px rgba(0,0,0,0.50));
        }

        /* Nodos (accesorios) */
        .equip-node{
          position:absolute;
          left: 50%;
          top: 58%;
          transform:
            translate(-50%, -50%)
            translate(var(--x), var(--y));
          z-index: 3;

          display: flex;
          align-items: center;
          gap: 0.75rem;

          padding: 0.85rem 0.95rem;
          border-radius: 16px;

          background: rgba(0,0,0,0.22);
          border: 1px solid rgba(167,141,102,0.16);
          box-shadow: 0 18px 50px rgba(0,0,0,0.35);

          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);

          cursor: default;
          user-select: none;

          transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
          animation: float 6.5s ease-in-out infinite;
          animation-delay: var(--d);
        }

        @keyframes float{
          0%   { transform: translate(-50%, -50%) translate(var(--x), var(--y)) translateY(0px); }
          50%  { transform: translate(-50%, -50%) translate(var(--x), var(--y)) translateY(-10px); }
          100% { transform: translate(-50%, -50%) translate(var(--x), var(--y)) translateY(0px); }
        }

        .equip-node:hover{
          border-color: rgba(167,141,102,0.42);
          background: rgba(0,0,0,0.30);
          transform:
            translate(-50%, -50%)
            translate(var(--x), var(--y))
            scale(1.02);
        }

        .equip-node__img{
          width: 46px;
          height: 46px;
          object-fit: contain;
          filter: drop-shadow(0 12px 26px rgba(0,0,0,0.40));
          flex: 0 0 auto;
        }

        .equip-node__text{
          text-align: left;
          min-width: 0;
        }

        .equip-node__name{
          margin: 0;
          color: var(--color-text-light);
          font-weight: 900;
          letter-spacing: 0.02em;
          font-size: 1.02rem;
          line-height: 1.1;
          white-space: nowrap;
        }

        .equip-node__desc{
          margin: 0.35rem 0 0 0;
          color: rgba(216,210,194,0.88);
          line-height: 1.25;
          font-size: 0.92rem;

          /* 2 líneas máximo */
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;

          overflow-wrap: anywhere;
          word-break: break-word;
          max-width: 220px;
        }

        /* Badge inferior */
        .equip-badge{
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          z-index: 4;

          padding: 0.65rem 1.1rem;
          border-radius: 999px;
          background: rgba(35,37,39,0.70);
          border: 1px solid rgba(167,141,102,0.26);
          color: rgba(216,210,194,0.92);
          font-weight: 900;
          letter-spacing: 0.02em;
          text-align: center;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          white-space: nowrap;
          box-shadow: 0 14px 40px rgba(0,0,0,0.35);
        }

        /* ====== POSICIONES (desktop) ====== */
        .node-casco    { --x: clamp(-360px, -22vw, -240px); --y: clamp(-220px, -8vw, -150px); --d: 0ms; }
        .node-chaleco  { --x: clamp( 120px,  1vw,  140px); --y: clamp(-240px, -19vw, -160px); --d: 220ms; }
        .node-replica  { --x: clamp(-420px, -26vw, -260px); --y: clamp(  0px,   6vw,  140px); --d: 420ms; }
        .node-guantes  { --x: clamp( 260px,  20vw,  380px); --y: clamp(  -950px,   -9vw,  900px); --d: 640ms; }
        .node-bbs      { --x: clamp(  8px,   18vw,  720px); --y: clamp( -920px,  6vw,  260px); --d: 860ms; }

        /* ====== Responsive: en móvil pasa a "anillo" más compacto y textos cortos ====== */
        @media (max-width: 900px){
          .equip-radial{
            min-height: clamp(520px, 120vw, 720px);
          }

          .equip-center{
            top: 54%;
          }

          .equip-orbit{
            top: 54%;
            width: min(520px, 92vw);
          }

          .equip-node{
            top: 54%;
            padding: 0.75rem 0.85rem;
          }

          .equip-node__desc{
            max-width: 180px;
            font-size: 0.88rem;
          }

          /* posiciones más cerradas */
          .node-casco    { --x: clamp(-220px, -34vw, -150px); --y: clamp(-220px, -28vw, -150px); }
          .node-chaleco  { --x: clamp( 140px,  28vw,  220px); --y: clamp(-220px, -28vw, -150px); }
          .node-guantes  { --x: clamp(-240px, -36vw, -160px); --y: clamp(  40px,  14vw,  120px); }
          .node-replica  { --x: clamp( 160px,  30vw,  240px); --y: clamp(  40px,  14vw,  120px); }
          .node-bbs      { --x: 0px; --y: clamp(220px, 36vw, 280px); }
        }

        /* Respeta usuarios con reduced motion */
        @media (prefers-reduced-motion: reduce){
          .equip-panel::after,
          .equip-orbit,
          .equip-node{
            animation: none !important;
          }
        }

        .equip-note{
          margin: 1rem 0 0 0;
          text-align: center;
          color: rgba(216,210,194,0.78);
          font-size: 0.92rem;
          line-height: 1.5;
        }
      `}</style>

      <div className="container">
        <h2 className="equip-title">EQUIPAMIENTO</h2>
        <div className="equip-divider" />

        <div className="equip-panel">
          <div className="equip-radial">
            <div className="equip-orbit" />

            {/* Centro: Jugador */}
            <div className="equip-center">
              <img className="equip-player" src={JugadorImg} alt="Jugador equipado" />
            </div>

            {/* Accesorios rodeando */}
            <div className="equip-node node-casco" aria-label="Casco">
              <img className="equip-node__img" src={CascoImg} alt="" />
              <div className="equip-node__text">
                <p className="equip-node__name">Casco</p>
                <p className="equip-node__desc">Protección esencial para jugar seguro.</p>
              </div>
            </div>

            <div className="equip-node node-chaleco" aria-label="Chaleco">
              <img className="equip-node__img" src={ChalecoImg} alt="" />
              <div className="equip-node__text">
                <p className="equip-node__name">Chaleco</p>
                <p className="equip-node__desc">Soporte para accesorios y movilidad.</p>
              </div>
            </div>

            <div className="equip-node node-guantes" aria-label="Guantes">
              <img className="equip-node__img" src={GuantesImg} alt="" />
              <div className="equip-node__text">
                <p className="equip-node__name">Guantes</p>
                <p className="equip-node__desc">Agarre firme y protección en CQB.</p>
              </div>
            </div>

            <div className="equip-node node-replica" aria-label="Réplica">
              <img className="equip-node__img" src={ReplicaImg} alt="" />
              <div className="equip-node__text">
                <p className="equip-node__name">Réplica</p>
                <p className="equip-node__desc">Lista para jugar (incluye cargador).</p>
              </div>
            </div>

            <div className="equip-node node-bbs" aria-label="Cargador y BBs">
              <img className="equip-node__img" src={CargadorBBsImg} alt="" />
              <div className="equip-node__text">
                <p className="equip-node__name">Cargador + 450 BBs</p>
                <p className="equip-node__desc">Munición incluida para arrancar la partida.</p>
              </div>
            </div>

            <div className="equip-badge">Incluye: Réplica + Cargador + 450 BBs</div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Equipamiento;
