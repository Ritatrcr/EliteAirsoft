import Home from "./Home";
import Campos from "./Campos";
import Equipamiento from "./Equipamiento";
import Opiniones from "./Opiniones";
import InstagramSection from "./Instagram";
import WhatsAppFloat from "../components/UI/WhatsAppFloat";
import Footer from "./Footer";
import Eventos from "./Eventos";
import Experiencia from "./Experiencia";
import Planes from "./Planes";
import Servicios from "./Servicios";
import TiposPartida from "./TiposPartida";

const Principal = () => {
  return (
    <>
      {/* OPCIONAL: una sección de inicio no clickeable */}
      <section className="screen">
        <WhatsAppFloat
  phone="573001112233"
  text="Hola, quiero info de planes."
  tooltip="Escríbenos"
  side="right"
/>
    
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
          <Experiencia />
        </div>
      </section>

      <section className="screen">
        
         <Equipamiento></Equipamiento>
        
      </section>

      {/* <section className="screen">
        <div className="container">
          <SeguridadNormas/>
        </div>
      </section> */}

      

      {/* PLANES (Navbar -> #planes) */}
      

      <section id="planes" className="screen screen--flush">
        <div className="container">
          <Planes />
        </div>
      </section>

     

      {/* SOBRE NOSOTROS (Navbar -> #sobre-nosotros) */}
      <section id="sobre-nosotros" className="screen">
        <div className="container">
          <Servicios />
        </div>
      </section>

      <section className="screen screen--flush">
        <div className="container">
          <TiposPartida />
        </div>
      </section>

      <section className="screen">
        <div className="container">
          <Eventos/>
        </div>
      </section>

      <section className="screen">
        <div className="container">         
           <InstagramSection></InstagramSection>

        </div>
      </section>

      <section className="screen">
        <div className="container">
            <Opiniones />
        </div>
      </section>

      <Footer />
    </>

    
  );
};

export default Principal;
