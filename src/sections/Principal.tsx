import Home from "./Home";
import Campos from "./Campos";
import Equipamiento from "./Equipamiento";
const Principal = () => {
  return (
    <>
      {/* OPCIONAL: una sección de inicio no clickeable */}
      <section className="screen">
        <div className="container">
          
        <Home></Home>
        </div>
      </section>

      {/* CAMPOS (Navbar -> #campos) */}
      <section id="campos" className="screen">
       
          
            <Campos></Campos>
        
      </section>

      <section className="screen">
        <div className="container">
          <h1>Videos / Fotos cheveres</h1>
          <p>(RITA)</p>
        </div>
      </section>

      <section className="screen">
        
         <Equipamiento></Equipamiento>
        
      </section>

      {/* PLANES (Navbar -> #planes) */}
      <section id="planes" className="screen">
        <div className="container">
          <h1>Precios por persona / Qué incluye</h1>
          <p>(MERCHITO)</p>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Planes Airsoft (Combos)</h1>
          <p>(MERCHITO)</p>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Planes Gelsoft</h1>
          <p>(RITA)</p>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Partidas abiertas (¿Quieres venir solo?)</h1>
        </div>
      </section>

      {/* SOBRE NOSOTROS (Navbar -> #sobre-nosotros) */}
      <section id="sobre-nosotros" className="screen">
        <div className="container">
          <h1>Servicios (Tejo, bombas, bolirana, parqueadero)</h1>
          <p>(MERCHITO)</p>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Comunidad: Instagram + reseñas Google Maps</h1>
          <p>(RITA)</p>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Dónde queda (Maps) + Horarios</h1>
          <p>(RITA)</p>
        </div>
      </section>

      {/* CONTACTANOS (Navbar -> #contactanos) */}
      <section id="contactanos" className="screen">
        <div className="container">
          <h1>Contacto / Reserva ya</h1>
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <h1>Footer</h1>
          <p>(MERCHITO)</p>
        </div>
      </section>
    </>
  );
};

export default Principal;
