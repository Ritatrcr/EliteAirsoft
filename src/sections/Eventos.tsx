import React from "react";
import Button from "../components/UI/Button";
import "../styles/Eventos.css";

type EventStatus = "abierto" | "ultimos" | "cerrado";

type EventItem = {
  id: string;
  day: string;     // "15"
  month: string;   // "MAR"
  title: string;
  type: string;    // "CQB Nocturno"
  slots: string;   // "18/24 cupos"
  status: EventStatus;
  href: string;    // link de inscripción
};

const EVENTS: EventItem[] = [
  {
    id: "e1",
    day: "7",
    month: "JUN",
    title: "Partida Abierta",
    type: "CQB Nocturno",
    slots: "30 Cupos",
    status: "abierto",
    href: "https://wa.me/573057668729?text=Hola%2C%20quiero%20inscribirme%20a%20Shadow%20Strike",
  },
 
];

const statusLabel: Record<EventStatus, string> = {
  abierto: "Inscripciones abiertas",
  ultimos: "Últimos lugares",
  cerrado: "Cerrado",
};

const Eventos: React.FC = () => {
  return (
    <section className="ev" aria-labelledby="ev-title">
      <header className="ev-head">
        <h2 id="ev-title" className="ev-title">Próximos Eventos</h2>
        <p className="ev-subtitle">
          Participa en operaciones especiales, torneos y entrenamientos exclusivos.
        </p>
      </header>

      <div className="ev-list">
        {EVENTS.map((e) => (
          <article key={e.id} className="ev-card">
            <div className="ev-date" aria-label={`Fecha ${e.day} ${e.month}`}>
              <div className="ev-dateDay">{e.day}</div>
              <div className="ev-dateMonth">{e.month}</div>
            </div>

            <div className="ev-main">
              <h3 className="ev-name">{e.title}</h3>

              <div className="ev-meta">
                <span className="ev-dot" aria-hidden="true">◎</span>
                <span>{e.type}</span>
                <span className="ev-sep" aria-hidden="true">•</span>
                <span className="ev-people" aria-hidden="true"></span>
                <span>{e.slots}</span>
              </div>
            </div>

            <div className="ev-actions">
              <span className={`ev-pill ev-pill--${e.status}`}>
                {statusLabel[e.status]}
              </span>

              <div className="ev-btnWrap">
                <Button
                  text="Inscribirse"
                  onClick={() => window.open(e.href, "_blank")}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Eventos;