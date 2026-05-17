import React from "react";
import "../styles/SeguridadNormas.css";

type Rule = {
  title: string;
  desc: string;
  icon: "shield" | "eye" | "target" | "age";
};

const RULES: Rule[] = [
  {
    icon: "eye",
    title: "Protección Ocular Obligatoria",
    desc: "Gafas o máscara homologada en todo momento dentro del campo.",
  },
  {
    icon: "target",
    title: "Control de Potencia",
    desc: "Todas las réplicas pasan por cronógrafo. Límites según normativa.",
  },
  {
    icon: "shield",
    title: "Fair Play",
    desc: "Respeto, honestidad y deportividad. Reconoce tus hits.",
  },
  {
    icon: "age",
    title: "Edad Mínima 16 años",
    desc: "Menores con autorización parental y supervisión.",
  },
];

const Icon = ({ name }: { name: Rule["icon"] }) => {
  // SVGs sencillos (sin librerías)
  const common = {
    className: "sn-iconSvg",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" {...common}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    );
  }

  // age
  return (
    <svg viewBox="0 0 24 24" {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6" />
      <path d="M12 16h.01" />
    </svg>
  );
};

const SeguridadNormas: React.FC = () => {
  return (
    <section className="sn" aria-labelledby="sn-title">
      <header className="sn-head">
        <div className="sn-titleRow">
          <span className="sn-titleIcon" aria-hidden="true">
            <Icon name="shield" />
          </span>
          <h2 id="sn-title" className="sn-title">
            Recomendaciones
          </h2>
        </div>

        <p className="sn-subtitle">
          El airsoft es un deporte seguro cuando se practica responsablemente.
          Estas son nuestras reglas inquebrantables.
        </p>
      </header>

      <div className="sn-grid">
        {RULES.map((r) => (
          <article key={r.title} className="sn-card">
            <div className="sn-cardIcon" aria-hidden="true">
              <Icon name={r.icon} />
            </div>

            <div className="sn-cardText">
              <h3 className="sn-cardTitle">{r.title}</h3>
              <p className="sn-cardDesc">{r.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="sn-note" role="note" aria-label="Importante">
        <span className="sn-noteBadge">Importante:</span>
        <span className="sn-noteText">
          ELITE AIRSOFT promueve el uso responsable y deportivo del airsoft. No
          promovemos la violencia real. Este es un deporte de estrategia y compañerismo.
        </span>
      </div>
    </section>
  );
};

export default SeguridadNormas;