import Button from '../components/UI/Button';

import Banner from '../assets/images/Banner.png';

import Mira from '../assets/images/Mira.png';
import Background from '../assets/images/background.png'; 
import MobileBackground from '../assets/images/Mobile.png';


const Home = () => {
  return (
    <section className="home">
      <style>{`
        .home__hero {
          display: flex;
          flex-direction: column;
          background-color: var(--color-bg-dark);
          color: var(--color-text-light);
          gap: 1rem;
          padding-top: 3rem;
          padding-rigth: 20rem;
          align-items: center;
          text-align: center;
          width: 100vw;
          height: 700px;
          margin-left: calc(-50vw + 50%);
          position: relative;
          z-index: 1;
          overflow: hidden;
          
        }

        .home__hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${Background});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.7;
          z-index: 0;
        }

        .home__banner {
          padding-top: 10rem;
          padding-left: 5rem;
          width: 50%;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 9999;
        }

        .home__content {
          max-width: 700px;
          position: relative;
          z-index: 1;
          padding-right: 10rem;
        }

        .home__content h1 {
          font-weight: 700;
          color: white;
          margin: 0;
        }

       

        .home__title-bottom {
          font-size: 3.5rem;
          text-align: left;
            margin-bottom: 0.1rem; 

        }


        .home__content p {
          margin: 1rem 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .home__section {
          background-color: var(--color-bg);
          padding: 3rem 1rem;
          text-align: center;
        }

        .home__fields {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }

        .home__mira {
          position: absolute;
          bottom: -100px;
          left: 0;
          width: 150px; 
          z-index: 9999;
        }

        @media (min-width: 768px) {
          .home__hero {
            flex-direction: row;
            justify-content: center;
            text-align: left;
          }

          .home__content {
            margin-left: 2rem;
          }
        }

        /* =========================
   MOBILE ONLY (no toca desktop)
   ========================= */

@media (max-width: 767px) {

  .home__hero {
    width: 100%;
    margin-left: 0;
    height: auto;
    min-height: 82vh;

    padding-top: 7.25rem;
    padding-left: 0;
    padding-right: 0;

    gap: 1.25rem;
  }

  /* CAMBIO REAL: aquí sí se sobreescribe la imagen para mobile */
  .home__hero::before {
    background-image: url(${MobileBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.9;
  }

  .home__hero::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
      radial-gradient(closest-side at 60% 35%, rgba(0,0,0,0.12), rgba(0,0,0,0.70)),
      linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.70));
  }

  .home__banner,
  .home__content {
    z-index: 2;
    position: relative;
  }

  .home__banner {
    width: min(62%, 420px);
    margin: 0;
    padding-top: 4rem;
    padding-left: 0;
    position: relative;
    filter: drop-shadow(0 16px 30px rgba(0,0,0,0.35));
  }

  .home__content {
    max-width: 560px;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    text-align: center;
  }

  .home__title-bottom {
    font-size: clamp(2.05rem, 9vw, 2.65rem);
    line-height: 1.03;
    text-align: center;
    margin: 0;
    text-shadow: 0 10px 30px rgba(0,0,0,0.55);
  }

  .home__content p {
    margin: 0;
    padding-top: 0.85rem;
    padding-bottom: 1.25rem;
    font-size: 1rem;
    line-height: 1.65;
    opacity: 0.95;
  }

  .home__content .btn {
    width: min(340px, 100%);
  }

  /* Mira: izquierda, más arriba, debajo del contenido */
  .home__mira {
    position: absolute;
    left: 0;
    bottom: -30px;
    width: 130px;
    opacity: 0.15;
    z-index: 1;
    pointer-events: none;
    margin: 0;
  }

  /* Campos (si también quieres que se vean mejor en móvil) */
  .home__section {
    padding: 2.5rem 1rem 3.25rem;
  }

  .home__fields {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .home__fields > * {
    width: min(420px, 92vw);
  }
}


      `}</style>

      <div className="home__hero">
        <img src={Banner} alt="Banner Elite Airsoft" className="home__banner" />
        <div className="home__content">
          <h1 className="home__title-bottom">UNA EXPERIENCIA ÚNICA</h1>
          <p>
            Bienvenido a Elite Airsoft, donde la estrategia, la adrenalina y el trabajo en equipo
            se convierten en una experiencia inolvidable.
          </p>
          <Button
            text="RESERVA YA!"
            onClick={() =>
              window.open(
                'https://wa.me/573057668729?text=Hola%2C%20quiero%20hacer%20una%20reserva%20en%20Elite%20Airsoft',
                '_blank'
              )
            }
          />
        </div>
        <img src={Mira} alt="Mira decorativa" className="home__mira" />
      </div>

      
    </section>
  );
};

export default Home;
