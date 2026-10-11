import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Home from "./Home";
import Campos from "./Campos";
import Equipamiento from "./Equipamiento";
import HidrogelArsenal from "./HidrogelArsenal";
import Opiniones from "./Opiniones";
import WhatsAppFloat from "../components/UI/WhatsAppFloat";
import Footer from "./Footer";
import Eventos from "./Eventos";
import Experiencia from "./Experiencia";
import Planes from "./Planes";
import Servicios from "./Servicios";
import TiposPartida from "./TiposPartida";

const InstagramSection = lazy(() => import("./Instagram"));

function DeferredInstagram() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldRender(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={containerRef} className="deferred-instagram">
      {shouldRender ? (
        <Suspense fallback={<div className="deferred-placeholder" aria-hidden="true" />}>
          <InstagramSection />
        </Suspense>
      ) : (
        <div className="deferred-placeholder" aria-hidden="true" />
      )}
    </div>
  );
}

const Principal = () => {
  return (
    <>
      {/* OPCIONAL: una sección de inicio no clickeable */}
      <div id="inicio" className="screen">
        <WhatsAppFloat
  phone="573057668729"
  text="Hola, quiero hacer una reserva en Elite Airsoft."
  tooltip="Escríbenos"
  side="right"
/>
    
        <div className="container">
          
        <Home></Home>
        </div>
      </div>

      {/* CAMPOS (Navbar -> #campos) */}
      <div id="campos" className="screen">
       
          
            <Campos></Campos>
        
      </div>


      <div className="screen">
        
         <Equipamiento></Equipamiento>
        
      </div>

      <div className="screen screen--flush">
        <div className="container">
          <HidrogelArsenal />
        </div>
      </div>

      {/* <section className="screen">
        <div className="container">
          <SeguridadNormas/>
        </div>
      </section> */}

      

      {/* PLANES (Navbar -> #planes) */}
      

      <div id="planes" className="screen screen--flush">
        <div className="container">
          <Planes />
        </div>
      </div>

      <div className="screen">
        <div className="container">
          <Experiencia />
        </div>
      </div>
      
      <div className="screen screen--flush">
        <div className="container">
          <TiposPartida />
        </div>
      </div>

     

      {/* SOBRE NOSOTROS (Navbar -> #sobre-nosotros) */}
      <div id="servicios" className="screen">
        <div className="container">
          <Servicios />
        </div>
      </div>

      

      <div className="screen">
        <div className="container">
          <Eventos/>
        </div>
      </div>

      <div className="screen">
        <div className="container">         
           <DeferredInstagram />

        </div>
      </div>

      <div className="screen">
        <div className="container">
            <Opiniones />
        </div>
      </div>

      <Footer />
    </>

    
  );
};

export default Principal;
