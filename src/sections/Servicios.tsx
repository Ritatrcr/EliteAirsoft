import React from "react";
import "../styles/MarketingSections.css";

const SERVICES = [
  {
    title: "Mini tejo",
    text: "Una actividad adicional para seguir compartiendo después de la partida.",
  },
  {
    title: "Bumperballs",
    text: "Diversión extra para grupos que quieren sumar una experiencia distinta.",
  },
  {
    title: "Parqueadero gratuito",
    text: "Llegas con tranquilidad y disfrutas el plan sin costos adicionales.",
  },
  {
    title: "Zona verde",
    text: "Espacio abierto para descansar, compartir y disfrutar el ambiente.",
  },
  {
    title: "Zona de celebración de cumpleaños",
    text: "Un espacio pensado para reuniones, grupos y fechas especiales.",
  },
  {
    title: "Baño",
    text: "Comodidades básicas disponibles durante toda la experiencia.",
  },
];

const Servicios: React.FC = () => {
  return (
    <section className="marketing-section services" aria-labelledby="services-title">
      <div className="section-heading">
        <p className="eyebrow">Después de la partida</p>
        <h2 id="services-title">Servicios para que el plan dure más</h2>
      </div>

      <div className="service-list service-list--wide">
        {SERVICES.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
