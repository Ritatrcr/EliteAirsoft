import React, { useMemo, useState } from "react";
import "../styles/Plans.css";

import PlanCard from "../components/Plans/PlanCard";

type PlanMode = "airsoft" | "gelsoft";

const PlanTypeSwitch: React.FC<{
  value: PlanMode;
  onChange: (v: PlanMode) => void;
}> = React.memo(({ value, onChange }) => {
  return (
    <div className="modeSwitch planSwitch" role="group" aria-label="Seleccionar tipo de plan">
      <button
        type="button"
        className={`modeSwitch__btn ${value === "airsoft" ? "isActive" : ""}`}
        onClick={() => onChange("airsoft")}
        aria-pressed={value === "airsoft"}
      >
        Airsoft
      </button>

      <button
        type="button"
        className={`modeSwitch__btn ${value === "gelsoft" ? "isActive" : ""}`}
        onClick={() => onChange("gelsoft")}
        aria-pressed={value === "gelsoft"}
      >
        Gelsoft
      </button>

      <span className="modeSwitch__glow" aria-hidden="true" />
    </div>
  );
});
PlanTypeSwitch.displayName = "PlanTypeSwitch";

type PlanData = {
  id: string;
  title: string;
  subtitle?: string;
  durationBadge?: string;
  priceText?: string;
  includes: string[];
  extras?: string[];
  ctaLabel: string;
  ctaHref: string;
  highlight?: string;
};

const Plans: React.FC = () => {
  const [mode, setMode] = useState<PlanMode>("airsoft");

  const WHATSAPP_NUMBER_LINK =
    "https://wa.me/573001234567?text=Hola%20quiero%20informaci%C3%B3n%20de%20planes";
  const RESERVA_LINK = "https://TU-LINK-DE-RESERVA.com";

  const equipacionResumen = "Equipamento completo (Guantes por separado)";

    const plans = useMemo<PlanData[]>(() => {
    if (mode === "airsoft") {
      return [
        {
          id: "air-cumple",
          title: "Plan Cumpleañero",
          subtitle: "Celebración en equipo con dinámica + comida + espacio de decoración.",
          durationBadge: "2 HORAS",
          includes: [
            equipacionResumen,
            "Bolas choconas",
          ],
          extras: [
            "Porción de pizza + gaseosa 400 ml (por persona)",
            "Espacio para decoración",
          ],
          ctaLabel: "Reservar",
          ctaHref: RESERVA_LINK,
          highlight: "Más solicitado",
        },
        {
          id: "air-empresarial",
          title: "Plan Empresarial",
          subtitle: "Integración y estrategia con zona social y actividades complementarias.",
          durationBadge: "2 HORAS",
          includes: [
            equipacionResumen,
            "Mini tejo",
          ],
          extras: [
            "Espacio para asado",
            "Zona de descanso / integración",
          ],
          ctaLabel: "Cotizar",
          ctaHref: WHATSAPP_NUMBER_LINK,
          highlight: "Corporativo",
        },
        {
          id: "air-mix",
          title: "Plan MIX",
          subtitle: "Plan extendido: Airsoft + Gelsoft en la misma reserva.",
          durationBadge: "3 HORAS",
          includes: [
            equipacionResumen,
            "Bolas choconas",
            "2 horas de Airsoft",
            "1 hora de Gelsoft",
          ],
          extras: [
            "Modalidades variadas (por objetivos)",
            "Ideal para grupos mixtos y primera vez",
          ],
          ctaLabel: "Me interesa",
          ctaHref: WHATSAPP_NUMBER_LINK,
          highlight: "Nuevo",
        },
      ];
    }

    // GELSOFT (similar a los de arriba, pero solo gelsoft)
    return [
      {
        id: "gel-cumple",
        title: "Plan Cumpleañero",
        subtitle: "Celebración en equipo con dinámica + comida + espacio de decoración.",
        durationBadge: "2 HORAS",
        includes: [
          equipacionResumen,
          "Mini tejo",
          "Gelsoft (réplica + munición incluida)",
        ],
        extras: [
          "Porción de pizza + gaseosa 400 ml (por persona)",
          "Espacio para decoración",
        ],
        ctaLabel: "Reservar",
        ctaHref: RESERVA_LINK,
        highlight: "Gelsoft",
      },
      {
        id: "gel-empresarial",
        title: "Plan Empresarial",
        subtitle: "Integración y estrategia con zona social y actividad complementaria.",
        durationBadge: "2 HORAS",
        includes: [
          equipacionResumen,
          "Bolas choconas",
          "Gelsoft (réplica + munición incluida)",
        ],
        extras: [
          "Espacio para asado",
          "Zona de descanso / integración",
        ],
        ctaLabel: "Cotizar",
        ctaHref: WHATSAPP_NUMBER_LINK,
        highlight: "Corporativo",
      },
      {
        id: "gel-extendido",
        title: "Plan Extendido",
        subtitle: "Más tiempo, más modos de juego y una experiencia más completa.",
        durationBadge: "3 HORAS",
        includes: [
          equipacionResumen,
          "Mini tejo",
          "3 horas de Gelsoft",
          "Modalidades variadas",
        ],
        extras: [
          "Ideal para grupos grandes",
          "Ritmo escalonado (briefing + rondas + finales)",
        ],
        ctaLabel: "Me interesa",
        ctaHref: WHATSAPP_NUMBER_LINK,
        highlight: "Pro",
      },
    ];
  }, [mode]);
 

  return (
    <section id="planes" className="planes-section" data-mode={mode}>
      <div className="container">
        <header className="planes-header">
          <div className="planes-header__left">
            <PlanTypeSwitch value={mode} onChange={setMode} />
          </div>

          <h2 className="planes-title">PLANES</h2>

          <div className="planes-header__right" />
        </header>

        <div className="planes-divider" />

        <div className="planes-grid">
          {plans.map((p) => (
            <PlanCard
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              durationBadge={p.durationBadge}
              priceText={p.priceText}
              includes={p.includes}
              extras={p.extras}
              ctaLabel={p.ctaLabel}
              ctaHref={p.ctaHref}
              highlight={p.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
