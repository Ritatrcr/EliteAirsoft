import './Home.css';
import Button from '../components/UI/Button';
import Banner from '../assets/images/Banner.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home__hero">
        <img src={Banner} alt="Banner Elite Airsoft" className="home__banner" />
        <div className="home__content">
          <h1>UNA EXPERIENCIA ÚNICA.</h1>
          <p>
            Bienvenido a Elite Airsoft, donde la estrategia, la adrenalina y el trabajo en equipo
            se convierten en una experiencia inolvidable.
          </p>
          <Button text="RESERVA YA!" onClick={() => alert('Reserva iniciada')} />
        </div>
      </div>
      <div className="home__section">
        <h2>TE OFRECEMOS...</h2>
        {/* Aquí podrías usar <Card /> más adelante */}
      </div>
    </section>
  );
};

export default Home;
