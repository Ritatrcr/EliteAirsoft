import React from "react";

type Mode = "grupo" | "individual";

type ModeSwitchProps = {
  value: Mode;
  onChange: (value: Mode) => void;
};

const ModeSwitch: React.FC<ModeSwitchProps> = React.memo(({ value, onChange }) => {
  return (
    <div className="modeSwitch" role="group" aria-label="Seleccionar modo">
      <button
        type="button"
        className={`modeSwitch__btn ${value === "grupo" ? "isActive" : ""}`}
        onClick={() => onChange("grupo")}
        aria-pressed={value === "grupo"}
      >
        Grupo
      </button>

      <button
        type="button"
        className={`modeSwitch__btn ${value === "individual" ? "isActive" : ""}`}
        onClick={() => onChange("individual")}
        aria-pressed={value === "individual"}
      >
        Individual
      </button>

      <span className="modeSwitch__glow" aria-hidden="true" />
    </div>
  );
});

ModeSwitch.displayName = "ModeSwitch";

export default ModeSwitch;
