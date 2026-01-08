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
          background-color: var(--color-bg-dark);
          padding: 0rem 0 3rem 0;
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
            padding: 2rem 0 2.5rem 0;
          }
          .campos-grid{
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <h2 className="campos-section__title">NUESTROS CAMPOS</h2>
        <div className="campos-section__divider" />

        <div className="campos-grid">
          <CampoCard
            title="La Fortaleza"
            images={[Fortaleza1, Fortaleza2, Fortaleza3]}
            description="Campo al aire libre con laberinto, casa, puentes y túnel."
            autoplayMs={3500}
          />

          <CampoCard
            title="Elite Town (Bus)"
            images={[Town1, Town2, Town3]}
            description="Escenario urbano con bus, casa y pasillo."
            autoplayMs={3500}
          />

          <CampoCard
            title="Campo Cubierto CQB"
            images={[CQB1, CQB2, CQB3]}
            description="Combate cercano en pasillos, cuartos y ventanas tipo casa.  "
            autoplayMs={3500}
          />
        </div>
      </div>
    </section>
  );
};

export default Campos;
