import Button from '../components/UI/Button';

import Banner from '../assets/images/Banner.png';

import Mira from '../assets/images/Mira.png';
import Background from '../assets/images/background.png'; 

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
          height: 600px;
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
          z-index: 1;
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
          z-index: 1;
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
