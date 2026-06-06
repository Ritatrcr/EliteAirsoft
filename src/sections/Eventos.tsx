import React from "react";
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
    href: "https://chat.whatsapp.com/GplVS3IddDlHUeK6al0HEF?mode=gi_t",
  },
 
];

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
              <div className="ev-btnWrap">
                <button
                  type="button"
                  className="ev-iconBtn"
                  onClick={() => window.open(e.href, "_blank")}
                  aria-label="Inscribirse a la partida abierta"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M15 19c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4" />
                    <circle cx="9.5" cy="8" r="3.2" />
                    <path d="M18 8v6" />
                    <path d="M15 11h6" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Eventos;