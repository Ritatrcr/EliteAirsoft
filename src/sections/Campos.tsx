import Card from '../components/UI/Card';
import Fortaleza from '../assets/images/LaFortaleza.png';
import Town from '../assets/images/EliteTown.png';
import CQB from '../assets/images/CQV.png';
const Campos = () => (
<div className="home__section">
        <h2>NUESTROS CAMPOS</h2>
        <div className="home__fields">
          <Card title="La Fortaleza" description="" image={Fortaleza} />
          <Card title="Elite Town" description="" image={Town} />
          <Card title="Campo Cubierto CQV" description="" image={CQB} />
        </div>
      </div>
);

export default Campos;