import React, { useMemo, useState } from "react";
import "../styles/MarketingSections.css";
import Button from "../components/UI/Button";
import PlanesBg from "../assets/images/campos/CQB3.jpg";
import { openReservationWhatsApp } from "../utils/whatsapp";

type PlanMode = "airsoft" | "gelsoft";

const PLANS = {
  airsoft: [
    {
      name: "Reserva 1 hora",
      price: "$40.000",
      duration: "1 hora",
      featured: false,
      perks: ["Por persona", "CQB + La Fortaleza", "Réplica M4", "Máscara, chaleco y 450 balines"],
    },
    {
      name: "Reserva 2 horas",
      price: "$60.000",
      duration: "2 horas",
      featured: true,
      perks: ["Por persona", "CQB + La Fortaleza + Élite Town", "Réplica M4", "Máscara, chaleco y 450 balines"],
    },
    {
      name: "Adicionales",
      price: "Desde $6.000",
      duration: "Opcionales",
      featured: false,
      perks: ["Recarga 450 balines: $15.000", "Guantes: $6.000 por hora", "Grupo mínimo: 4 personas", "Máximo: 20 personas"],
    },
  ],
  gelsoft: [
    {
      name: "Reserva 1 hora",
      price: "$25.000",
      duration: "1 hora",
      featured: false,
      perks: ["2 campos: Kill House + El Bunker", "Más de 2 modos de juego", "El precio varía según la réplica elegida", "Edad mínima: 6 años"],
    },
    {
      name: "Reserva 2 horas",
      price: "$30.000",
      duration: "2 horas",
      featured: true,
      perks: ["3 campos: Kill House + El Bunker + Élite Town", "Más de 5 modos de juego", "El precio varía según la réplica elegida", "Cumpleaños el mismo día: gratis"],
    },
    {
      name: "Recargas",
      price: "$10.000 – $15.000",
      duration: "Adicional",
      featured: false,
      perks: ["Normal 400 balas: $10.000", "Escopeta 800 balas: $12.000", "Metralleta 2.000 balas: $15.000", "Grupo mínimo: 4 personas"],
    },
  ],
};

const Planes: React.FC = () => {
  const [mode, setMode] = useState<PlanMode>("airsoft");
  const plans = useMemo(() => PLANS[mode], [mode]);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const activePlan = plans[selectedPlan] ?? plans[0];

  return (
    <section
      className="marketing-section plans"
      aria-labelledby="plans-title"
      style={{ ["--plans-image" as string]: `url(${PlanesBg})` }}
    >
      <div className="section-heading">
        <p className="eyebrow">Elige tu nivel</p>
        <h2 id="plans-title">Planes para cada tipo de jugador</h2>
      </div>

      <div className="mode-toggle" role="tablist" aria-label="Modalidad de planes">
        <button
          type="button"
          className={mode === "airsoft" ? "is-active" : ""}
          onClick={() => {
            setMode("airsoft");
            setSelectedPlan(1);
          }}
          role="tab"
          aria-selected={mode === "airsoft"}
        >
          Airsoft
        </button>
        <button
          type="button"
          className={mode === "gelsoft" ? "is-active" : ""}
          onClick={() => {
            setMode("gelsoft");
            setSelectedPlan(1);
          }}
          role="tab"
          aria-selected={mode === "gelsoft"}
        >
          Gelsoft
        </button>
      </div>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            type="button"
            className={`plan-card ${plan.featured ? "is-featured" : ""} ${index === selectedPlan ? "is-selected" : ""}`}
            onClick={() => setSelectedPlan(index)}
            aria-pressed={index === selectedPlan}
          >
            {plan.featured ? <span className="plan-badge">Más elegido</span> : null}
            <h3>{plan.name}</h3>
            <div className="plan-price">{plan.price}</div>
            <div className="plan-duration">{plan.duration}</div>
            <ul>
              {plan.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <div className="plans-cta">
        <Button
          text={`Consultar ${activePlan.name}`}
          onClick={() => openReservationWhatsApp(activePlan.name)}
        />
      </div>
    </section>
  );
};

export default Planes;
