import Card from '../components/UI/Card';
import Mira from '../assets/images/Mira.png';

const Combos = () => {
  return (
    <section>
      <h1>Combos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
        <Card
          title="Combo Iniciación"
          description="Incluye equipamiento básico, 2 horas de juego y guía."
          image={Mira}
        />
        <Card
          title="Combo Pro"
          description="Incluye equipamiento premium, 3 horas de juego, y 1000 balas."
        />
        <Card
          title="Combo Grupal"
          description="Ideal para grupos. Precio especial por persona. Incluye todo."
        />
      </div>
    </section>
  );
};

export default Combos;
