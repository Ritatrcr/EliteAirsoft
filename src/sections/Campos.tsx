import Card from '../components/UI/Card';
import Fortaleza from '../assets/images/LaFortaleza.png';
import Town from '../assets/images/EliteTown.png';
import CQB from '../assets/images/CQV.png';

const Campos = () => {
  return (
    <section className="home__fields">
      <style>{`
        .home__fields {

          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 2rem;
        }
      `}</style>

      <Card
        image={Fortaleza}
        title="La Fortaleza"
        description="Un campo al aire libre con múltiples escenarios y obstáculos naturales para una experiencia de juego auténtica."
      />
      <Card
        image={Town}
        title="Elite Town"
        description="Un entorno urbano diseñado para combates tácticos, con edificios, calles y zonas de cobertura."                        
      />
      <Card
        image={CQB}
        title="CQB Arena"
        description="Un campo de combate cercano (Close Quarters Battle) ideal para partidas rápidas y emocionantes en espacios reducidos."
      />
    </section>
  );
}
export default Campos;