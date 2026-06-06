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
        .campos-section{
          position: relative;
          padding: 0rem 0 3rem 0;
        }

        .campos-section__eyebrow{
          display: none;
          margin: 0;
        }

        .campos-section__title{
          margin: 0;
          text-align: center;
          color: var(--color-text-light);
          font-weight: 800;
          letter-spacing: 0.06em;
          font-size: clamp(1.5rem, 2.1vw, 2.15rem);
        }

        .campos-section__divider{
          height: 1px;
          width: 100%;
          margin: 1.1rem 0 2rem 0;
          background: rgba(167, 141, 102, 0.25);
        }

        /* ✅ En vez de carrusel horizontal, grid responsive:
           - Desktop: 3 columnas (ves las 3 cards sin deslizar)
           - Tablet: 2 columnas
           - Móvil: 1 columna
        */
        .campos-grid{
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: clamp(1rem, 2vw, 2rem);
          align-items: start;
        }

        /* Evita desbordes en grid por contenido */
        .campos-grid > *{
          min-width: 0;
        }

        @media (max-width: 1024px){
          .campos-grid{
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 720px){
          .campos-section{
            width: 100vw;
            margin-left: calc(50% - 50vw);
            padding: 1.55rem 0 2.1rem;
            overflow: hidden;
            background:
              radial-gradient(circle at 50% -4%, rgba(167,141,102,0.24), transparent 38%),
              radial-gradient(circle at 18% 8%, rgba(167,141,102,0.12), transparent 28%),
              linear-gradient(180deg, #202222 0%, #171818 76%, #111212);
            border-top: 1px solid rgba(167,141,102,0.14);
            border-bottom: 1px solid rgba(167,141,102,0.12);
          }

          .campos-section .container{
            width: 100%;
            max-width: none;
            padding-inline: 0;
          }

          .campos-section__eyebrow{
            display: block;
            margin: 0 0 0.35rem;
            text-align: center;
            color: var(--color-accent);
            font-size: 0.72rem;
            font-weight: 900;
            letter-spacing: 0.22em;
            text-transform: uppercase;
          }

          .campos-section__title{
            width: min(100% - 2rem, 430px);
            margin-inline: auto;
            font-size: clamp(2rem, 9vw, 2.65rem);
            line-height: 0.96;
            letter-spacing: 0.04em;
            text-wrap: balance;
          }

          .campos-section__divider{
            width: calc(100% - 2rem);
            margin: 0.9rem auto 1.1rem;
          }

          .campos-grid{
            display: flex;
            grid-template-columns: none;
            gap: 0.85rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            padding: 0 1rem 0.35rem;
            -webkit-overflow-scrolling: touch;
          }

          .campos-grid::-webkit-scrollbar{
            height: 0;
          }

          .campos-grid > *{
            flex: 0 0 min(82vw, 342px);
            scroll-snap-align: center;
          }
        }
      `}</style>

      <div className="container">
        <p className="campos-section__eyebrow">Explora el terreno</p>
        <h2 className="campos-section__title">Nuestros Campos</h2>
        <div className="campos-section__divider" />

        <div className="campos-grid">
          <CampoCard
            title="La Fortaleza"
            images={[Fortaleza1, Fortaleza2, Fortaleza3]}
            description="Campo al aire libre con laberinto, casa, puentes y túnel."
          />

          <CampoCard
            title="Elite Town (Bus)"
            images={[Town1, Town2, Town3]}
            description="Escenario urbano con bus, casa y pasillo."
          />

          <CampoCard
            title="Campo Cubierto CQB"
            images={[CQB1, CQB2, CQB3]}
            description="Combate cercano en pasillos, cuartos y ventanas tipo casa.  "
          />
        </div>
      </div>
    </section>
  );
};

export default Campos;
