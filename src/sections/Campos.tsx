import CampoCard from '../components/UI/FieldCard';

import Fortaleza1 from '../assets/images/campos/Fortaleza.png';
import Fortaleza2 from '../assets/images/campos/Fortaleza2.jpg';
import Fortaleza3 from '../assets/images/campos/Fortaleza3.png';

import Town1 from '../assets/images/campos/Bus.png';
import Town2 from '../assets/images/campos/Bus2.jpg';
import Town3 from '../assets/images/campos/Bus3.jpg';

import CQB1 from '../assets/images/campos/CQB.png';
import CQB2 from '../assets/images/campos/CQB2.jpg';
import CQB3 from '../assets/images/campos/CQB3.jpg';

const Campos = () => {
  return (
    <section className="campos-section">
      <style>{`
        /* Sección estilo "plantilla" */
        .campos-section{
          position: relative;
          background-color: var(--color-bg-dark);
          padding: 0rem 0 3rem 0;
        }

        .campos-section__title{
          margin: 0;
          text-align: center;
          color: var(--color-text-light);
          font-weight: 800;
          letter-spacing: 0.06em;
          font-size: clamp(1.6rem, 2.2vw, 2.2rem);
        }

        .campos-section__divider{
          height: 1px;
          width: 100%;
          margin: 1.25rem 0 2.25rem 0;
          background: rgba(167, 141, 102, 0.25);
        }

        /* Carrusel horizontal (fila) */
        .campos-grid{
          display: flex;
          gap: 2rem;

          overflow-x: auto;
          overflow-y: hidden;

          /* "Snap" profesional */
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scroll-behavior: smooth;
          overscroll-behavior-x: contain;

          /* padding para que no pegue a los bordes */
          padding: 0.25rem 1rem 1rem 1rem;
        }

        /* Cada tarjeta se ancla al snap y no se encoge */
        .campos-grid > *{
          scroll-snap-align: start;
          flex: 0 0 auto;
        }

        /* Tamaño responsive de la tarjeta para que se vea bien en horizontal */
        .campos-grid .campo-card{
          width: min(380px, 85vw);
        }

        /* En desktop: un poco más contenida */
        @media (min-width: 1100px){
          .campos-grid .campo-card{
            width: 360px;
          }
        }

        /* Scrollbar discreta (Firefox) */
        .campos-grid{
          scrollbar-width: thin;
          scrollbar-color: rgba(167, 141, 102, 0.35) rgba(0,0,0,0.15);
        }

        /* Scrollbar discreta (Chrome/Safari) */
        .campos-grid::-webkit-scrollbar{
          height: 8px;
        }
        .campos-grid::-webkit-scrollbar-thumb{
          background: rgba(167, 141, 102, 0.25);
          border-radius: 999px;
        }
        .campos-grid::-webkit-scrollbar-track{
          background: rgba(0,0,0,0.15);
          border-radius: 999px;
        }

        /* Indicador visual de que hay más contenido a los lados */
        .campos-section::before,
        .campos-section::after{
          content:'';
          position:absolute;
          top: 0;
          bottom: 0;
          width: 52px;
          pointer-events: none;
          z-index: 2;
        }
        .campos-section::before{
          left: 0;
          background: linear-gradient(to right, var(--color-bg-dark), rgba(35,37,39,0));
        }
        .campos-section::after{
          right: 0;
          background: linear-gradient(to left, var(--color-bg-dark), rgba(35,37,39,0));
        }
      `}</style>

      <div className="container">
        <h2 className="campos-section__title">NUESTROS CAMPOS</h2>
        <div className="campos-section__divider" />

        <div className="campos-grid">
          <CampoCard
            title="La Fortaleza"
            images={[Fortaleza1, Fortaleza2, Fortaleza3]}
            description="Campo al aire libre con laberinto, casa, puentes y túnel. Ideal para partidas estratégicas con rotaciones, flanqueos y misiones por objetivos usando cobertura natural."
          />

          <CampoCard
            title="Elite Town (Bus)"
            images={[Town1, Town2, Town3]}
            description="Escenario urbano con bus, pasillo y casa. Perfecto para juego táctico de avance: limpiar esquinas, controlar líneas estrechas y moverse rápido entre coberturas."
          />

          <CampoCard
            title="Campo Cubierto CQB"
            images={[CQB1, CQB2, CQB3]}
            description="Combate cercano en pasillos, cuartos y ventanas simulando una casa grande. Ritmo alto, contacto rápido y jugadas intensas donde la comunicación manda."
          />
        </div>
      </div>
    </section>
  );
};

export default Campos;
